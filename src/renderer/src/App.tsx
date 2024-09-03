import { ChakraProvider } from '@chakra-ui/react';
import {AuthRoutes} from './routes/auth.routes';
import {AppRoutes} from './routes/app.routes';
// import { AuthContextProvider } from './contexts/AuthContext';


const App = () => {
  const isAuthenticated = true

  return (
    <ChakraProvider>
      {/* <AuthContextProvider> */}
      {isAuthenticated ? <AuthRoutes /> : <AppRoutes />}
      {/* </AuthContextProvider> */}
    </ChakraProvider>
  );
};
export default App;