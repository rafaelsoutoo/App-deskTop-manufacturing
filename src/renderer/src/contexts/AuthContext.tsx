import { createContext, ReactNode, useState, useEffect  } from "react";
import { UserDTO } from "@renderer/dtos/UserDTO";

import { api } from "@renderer/services/api";

export type AuthContextDataProps = {
  user: UserDTO;
  singIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoadingUserStorageData: boolean;
}

type AuthContextProviderProps = {
    children: ReactNode
  }

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);


import { storageUserSave, storageUserGet, storageUserRemove } from "@renderer/storage/storageUser";
import { storageAuthTokenSave, storageAuthTokenGet, storageAuthTokenRemove } from "@renderer/storage/storageAuthToken";



export function AuthContextProvider({ children }: AuthContextProviderProps)  {

    const [user, setUser] = useState<UserDTO>({} as UserDTO);
    const [isLoadingUserStorageData, setIsLoadingUserStorageData] = useState(true); 


    async function userAndTokenUpdate(userData: UserDTO, token: string) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
      setUser(userData);//joga os usuarios no estado
    }



    async function storageUserAndTokenSave(userData: UserDTO, token: string) {

      try {
        setIsLoadingUserStorageData(true)

        await storageUserSave(userData);//joga os dados do usuario no storage
        await storageAuthTokenSave(token); //joga o token do usuário no storage
      } catch (error) {
        throw error
      } finally {
        setIsLoadingUserStorageData(false);
      }
  
    }



    async function singIn(email: string, password: string) {
      try {
        const { data } = await api.post('/sessions', { email, password });
        if(data.user && data.token) {
          await storageUserAndTokenSave(data.user, data.token);
          userAndTokenUpdate(data.user, data.token) //jogar no storage e no estado os dados do usuário
        }
      } catch (error) {
        throw error
      }
    }

    async function loadUserData() { //do storage para carregar o usuario logado
      try {
        setIsLoadingUserStorageData(true);
        const userLogged = await storageUserGet();
        const token = await storageAuthTokenGet();
  
        if(token && userLogged) {
          userAndTokenUpdate(userLogged, token);
        } 
      } catch (error) {
        throw error
      } finally {
        setIsLoadingUserStorageData(false);
      }
    }
  
    useEffect(() => {
      loadUserData()
    },[])


    async function signOut() {
      try {
        setIsLoadingUserStorageData(true);
        setUser({} as UserDTO);
        await storageUserRemove();
        await storageAuthTokenRemove();
      } catch (error) {
        throw error;
      } finally {
        setIsLoadingUserStorageData(false);
      }
    }
  

    return (
      <AuthContext.Provider value={{ 
        user, 
        singIn,
        signOut,
        isLoadingUserStorageData
      }}>
        {children}
      </AuthContext.Provider>
    )
  }