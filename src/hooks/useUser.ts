import { useQuery } from '@tanstack/react-query';
import { fetchUser } from '../api/api';
import { User } from '../types';

export const useUser = () => {
  return useQuery<User, Error>({
    queryKey: ['user'],
    queryFn: fetchUser,
  });
};
