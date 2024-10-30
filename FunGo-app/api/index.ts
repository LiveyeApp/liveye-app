import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const getItem = () => {
    return useQuery({
        queryKey: ['products', 'categories'],
        queryFn: async () => {


            return { categories: categories.data };
        },
    });
};
