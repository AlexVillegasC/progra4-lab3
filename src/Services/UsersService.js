import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Base URL for users API
const USERS_API_URL = 'https://api.jsonbin.io/v3/qs/680c2cf68561e97a5007bd8e';

// Fetch function to get users from the server
const fetchUsers = async () => {
  const response = await axios.get(USERS_API_URL);
  // Extract the array of user records from the JSON payload
  return response.data.record;  // assumes response.data has the shape { id, record, metadata }
};

/**
 * Custom hook to retrieve users via React Query v5.
 * Returns { data, isLoading, isError, error } where data is an array of users.
 * Uses the object syntax required by React Query v5.
 */
export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 5 * 60 * 1000,   // cache for 5 minutes
    retry: 1,                    // retry once on failure
  });
};
