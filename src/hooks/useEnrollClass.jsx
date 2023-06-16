import { useQuery } from '@tanstack/react-query'

import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useEnrollClass = () =>{
    const {user, loading} = useAuth()
    const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data : enrollClass = [] } = useQuery({
        queryKey: ['enrollClass', user?.email],
        // enabled:(!!user?.email && !!localStorage.getItem("access-token") , !loading),

        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/payments?email=${user?.email}`,{
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json()
        },
      })

      return [enrollClass, refetch]
}

export default useEnrollClass;