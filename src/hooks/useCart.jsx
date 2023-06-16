import { useQuery } from '@tanstack/react-query'

import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () =>{
    const {user, loading} = useAuth()
    const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data : cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        // enabled:(!!user?.email && !!localStorage.getItem("access-token") , !loading),

        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json()
        },

      })

      return [cart, refetch]
}

export default useCart;