import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import './login.css';
import mone from '../assets/mone.webp';
import { FaRegEyeSlash, FaEye } from "react-icons/fa";

const schema = z.object({
  email: z.string().min(5, "Email must be at least 5 characters long").email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long")
});

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });
  const [show, setShow] = useState(false);

  const onSubmit = (values) => {
    console.log(values);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login">
          <div className="log">
            <h1>Login</h1>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                {...register("email")}
                id='email'
                placeholder="Enter your email"
              />
              {errors.email && <em>{errors.email.message}</em>}
            </div>
            <div className='pw'>
              <label htmlFor="password">Password</label>
              <input
                type={show ? "text" : "password"}
                {...register("password")}
                id='password'
                placeholder="Enter your password"
              />
              {show
                ? <FaEye className='i-eyed' onClick={() => setShow(!show)} />
                : <FaRegEyeSlash onClick={() => setShow(!show)} className='i-eyed' />
              }
              {errors.password && <em>{errors.password.message}</em>}
            </div>
            <button type='submit'>Login</button>
          </div>
          <div className="img">
            <img src={mone} alt="right" />
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
