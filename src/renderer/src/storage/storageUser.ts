const Store = require('electron-store');
const store = new Store();

import { UserDTO } from '@renderer/dtos/UserDTO';
import { USER_STORAGE } from './storageConfig';

// Salvar usuário
export async function storageUserSave(user: UserDTO) {
  store.set(USER_STORAGE, user);
}

// Obter usuário
export async function storageUserGet() {
  const user: UserDTO = store.get(USER_STORAGE, {} as UserDTO);
  return user;
}

// Remover usuário
export async function storageUserRemove() {
  store.delete(USER_STORAGE);
}