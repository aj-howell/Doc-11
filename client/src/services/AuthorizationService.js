import axios from 'axios';
const uri=process.env.REACT_APP_API_URL;

const login = async (email, password) => {
    const AuthResponse = await axios.post(`${uri}/login`, {email, password});

    return AuthResponse;
}

const register = async (username, email, password) => {
    const AuthResponse = await axios.post(`${uri}/users`, {username, email, password});

    return AuthResponse;
}


export default { login, register };