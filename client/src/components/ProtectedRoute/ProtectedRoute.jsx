import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({component})=>
{
    const navigate=useNavigate();

    const tokenString= localStorage.getItem('token');

    const [jwtRes,setRes] = useState({valid:true, token:tokenString});

    useEffect(()=>
    {
        const interval = setInterval(() => {

            const currentTime = Math.floor(Date.now() / 1000);

            const decodedToken = jwtDecode(jwtRes.token);

            if(decodedToken.exp<currentTime)
            {
                localStorage.removeItem('token');
                jwtRes.token=null;
                jwtRes.valid=false;
               
                setRes(jwtRes); 
                
                navigate('/');
                return ()=>{clearInterval(interval)};
            }
        }, 300000);       
       
    }, [jwtRes, navigate]);

            return component;
}

export default ProtectedRoute;