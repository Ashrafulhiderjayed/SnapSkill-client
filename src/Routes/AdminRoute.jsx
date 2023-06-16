import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user && isAdmin){
        return children
    }
    return <Navigate to="/" state={{ from: location}} replace></Navigate>;
};

export default AdminRoute;