import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = (event)=>{
        event.preventDefault();
        const form = event.target;
        const Name =  form.name.value
        const email =  form.email.value
        const password =  form.password.value
        console.log(Name,email,password);
        
        
          
        };
    return (
          <div className="hero bg-base-200 min-h-screen">
         <div className="hero-content flex-col">
      <h1 className="text-4xl font-bold">Login Now!</h1>
    <div className="text-center lg:text-left">
    <p className=""></p>
    </div>
    <div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input 
          type="email"
          name="email"
           placeholder=" type email" 
           className="input input-bordered"
           required 
           />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input 
          type="password"
          name="password" 
          placeholder=" Type password" 
          className="input input-bordered" 
          required 
          />
          <label className="label">
            <a  className="label-text-alt link link-hover">forget password</a>
          </label>


          <label className="label">
            <Link to="/sign-up" className="label-text-alt link link-hover">new to website? create an account</Link>
          </label>
          
        </div>
        <div className="form-control mt-6">
       
       <input
        type="submit" 
        value="Login " 
        className="btn btn-outline"/>
      
       
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;