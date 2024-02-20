import axios from 'axios';

const login = async (email, password) => {
    const AuthResponse = await axios.post('http://localhost:9000/login', {email, password});

    return AuthResponse;
}

const register = async (username, email, password) => {
    const AuthResponse = await axios.post('http://localhost:9000/users', {username, email, password});

    return AuthResponse;
}


export default { login, register };