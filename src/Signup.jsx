import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();

  const HandelChange = (e) => {
    setData({ [e.target.name]: e.target.value });
  };
  async function submit(e) {
    e.preventDefault();
    alert("hiii")

    try {
      const response = await axios.post(
        "https://vercel.com/niyaz-alams-projects/backend-handson-4/signup",
        data
      );

      setData({
        name: "",
        email: "",
        phone: "",
        password: "",
      });

      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <section id="midpart">
        <h3>Ragistration</h3>
        <form method="POST" className="fo">
          <label className="inp">
            Name:
            <input
              type="text"
              name="Name"
              id="name"
              placeholder="Enter Your Name"
              value={data.name}
              autoComplete="off"
              onChange={HandelChange}
            />
          </label>
          <label className="inp">
            Email:
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="Enter Your Email"
              value={data.email}
              autoComplete="email"
              onChange={HandelChange}
            />
          </label>
          <label className="inp">
            Contact:
            <input
              type="number"
              name="Call"
              placeholder="Enter Your Phone Number"
              value={data.phone}
              autoComplete="off"
              onChange={HandelChange}
            />
          </label>
          <label className="inp">
            Password:
            <input
              type="password"
              name="password"
              id="pass"
              placeholder="Enter Your Password"
              value={data.password}
              autoComplete="off"
              onChange={HandelChange}
            />
          </label>

          <button id="submit" onClick={submit}>
            Submit
          </button>
        </form>
        <hr className="hrl" />
        <p
          onClick={() => {
            navigate("/login");
          }}
          className="shift"
        >
          If you already ragister goto login page
        </p>
      </section>
    </div>
  );
}

export default Signup;
