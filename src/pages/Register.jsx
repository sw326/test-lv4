import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const nav = useNavigate();

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/register",
        {
          id,
          password,
          nickname,
        }
      );
      if (data.success) {
        nav(`/login`);
      } else {
        alert(`회원가입에 실패 했어요!`);
      }
    } catch (error) {
      console.error(`회원가입 에러`, error.message);
      alert(`회원가입에 실패 했어요! 다시 시도해주세요 :) `);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerSubmit}>
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
        <p>NickName</p>
        <input
          type="text"
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
          placeholder="Nickname"
        />
        <br />
        <button type="submit">회원가입하기</button>
        <br />
        <button onClick={() => nav(`/login`)}>로그인하러가기</button>
      </form>
    </div>
  );
};

export default Register;
