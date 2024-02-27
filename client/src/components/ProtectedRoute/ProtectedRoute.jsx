import { jwtDecode } from 'jwt-decode'; //
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({component})=>
{
    const navigate=useNavigate();

        const token =  localStorage.getItem('token');
        if(token===null)
        {
            navigate('/');
            return null;
        }

        const currentTime = Math.floor(Date.now() / 1000);
        const decodedToken = jwtDecode(token);
        
        if(decodedToken.exp<currentTime)
        {
            navigate('/');
            return null;
        }

        else
        {
            return component;
        }
}

export default ProtectedRoute;