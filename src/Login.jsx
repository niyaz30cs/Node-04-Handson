import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navi = useNavigate();
  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://vercel.com/niyaz-alams-projects/backend-handson-4/login",
        { email, password }
      );

      const data = response.data;

      localStorage.setItem("token", data.token);

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <section id="midparts">
        <h3>Login</h3>
        <form method="POST">
          <label className="inp">Email:
            <input type="email" placeholder="Enter your Email" autoComplete="off" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          </label>
          <label className="inp">Password:
            <input type="password" placeholder="Enter password"
              autoComplete="off"
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
            />
          </label>
          <button id="submit" onClick={submit}>
            Submit
          </button>
        </form>
        <hr className="hrl" />
        <p
          onClick={() => {
            navi("/signup");
          }}
          className="shift"
        >
          Ragistration Here
        </p>
      </section>
    </div>
  );
}

export default Login;
