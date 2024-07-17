import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const nav = useNavigate();

    const loginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://3.38.191.164/login', {
                id,
                password,
            });
            console.log(response);
            if (response.status === 201) {
                //토큰 저장하기 > 로컬스토리지에
                login(data.accessToken);
                nav('/');
            } else {
                alert('Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginSubmit}>
                <p>ID</p>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => {
                        setId(e.target.value);
                    }}
                    placeholder="ID"
                />
                <p>PW</p>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    placeholder="PW"
                />
                <br />
                <button type="submit">로그인</button>
                <br />

                <button onClick={() => nav(`/register`)}>회원가입</button>
            </form>
        </div>
    );
};

export default Login;
