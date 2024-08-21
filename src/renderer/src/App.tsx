import { ChakraProvider } from '@chakra-ui/react';
import {AuthRoutes} from './routes/auth.routes';
import {AppRoutes} from './routes/app.routes';


const App = () => {
  const isAuthenticated:number = 2;

  return (
    <ChakraProvider>
      {isAuthenticated === 1 ? <AuthRoutes /> : <AppRoutes />}
    </ChakraProvider>
  );
};
export default App;