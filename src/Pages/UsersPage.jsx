
import Login from '../Components/Login';
import UsersList from '../Components/UsersList';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const UsersPage = () => {
    
  const { user } = useContext(AuthContext);

  return (
    
    (user ?
        <QueryClientProvider client={queryClient}>
            <UsersList/> 
        </QueryClientProvider>
    : <Login /> )
    

  );
}

export default UsersPage;