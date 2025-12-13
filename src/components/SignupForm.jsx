import { useState } from "react";

const SignupForm = () => {
  const [ name, setName ] = useState("");

  const onChangeName = (e) => {
    
  }

  return (
    <div>
      <input type="text" onChange={onChangeName} placeholder="이름을 입력해주세요"/>
    </div>
  );
};

export default SignupForm;