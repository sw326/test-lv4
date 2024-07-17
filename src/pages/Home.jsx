import { useNavigate } from "react-router-dom";


const Home = () => {
    const nav = useNavigate()
    const testHandler = () =>{
        const token = localStorage.getItem("accessToken")
        if(!token){
            alert("로그인이 필요합니다.")
            nav("/login")
        }else{
            nav("/test")
        }
    }
    return (
        <div>
            <h1>Home입니다 로그인 기능 구현하느라 고생 많으셨습니다.</h1>
            <button onClick={testHandler}>test</button>
        </div>
    );
};

export default Home;
