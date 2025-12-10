import { useState } from "react";

export default function LoginPage() {
  const [ userId, setUserId ] = useState("");
  const [ userPw, setUserPw ] = useState("");
  const [ error, setError ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ msg, setMsg ] = useState("");

  const handleLogin = async () => {
    try{
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, userPw })
      });

    } catch(err) {
      setError("로그인 도중 오류가 발생하였습니다.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div class="login-wrapper">
      <form onSubmit={handleLogin} class="login-form">
        <h2>로그인</h2>
        <input 
          type="text"
          placeholder="아이디"
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value);
          }} 
        />

        <input 
          type="password" 
          placeholder="비밀번호"
          value={userPw}
          onChange={(e)=>{
            setUserPw(e.target.value);
          }}
        />
        {error && <div class="login-error">{error}</div>}
        <button type="submit" disabled={loading}>
          {loading ? "로그인 중..." : "로그인"}
        </button>
      </form>
    </div>
  )
}