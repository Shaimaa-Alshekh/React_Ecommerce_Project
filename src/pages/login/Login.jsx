import axios from "axios";
import React, { useState } from "react";
import { object, string, } from 'yup';
import {  Bounce, Slide, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate=useNavigate();
  let [user,setUser] = useState({
    email: '',
    password: '',
  });
  const [error,setError]=useState([]);
  const [loader,setLoader]=useState(false);
  
  const handleInputChange = (e) => {
    const {name,value} = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };


  const validateData=async()=>{
    let LoginSchema = object({
      email: string().email().required(),
      password: string().min(8).max(20),

    });
    try{
      await LoginSchema.validate(user ,{abortEarly:false});
      return true;

    }catch(error){
      console.log("error validate",error.errors);
      for(let i=0;i<error.errors.length;i++){
          toast.error(error.errors[i], {
            position: "bottom-right",
            autoClose: 30000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });

      }

      setError(error.errors);
      setLoader(false)
      return false;
    }
    
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoader(true);
    const validate=await validateData();
    console.log(validate);
  
    if(validate){
      try{
        const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/auth/signin`,user);
        console.log(data);
        setUser({email: '',password: '',});
        localStorage.setItem('userToken',data.token);

        if(data.message == 'success'){
          toast.success('Login Successfuly!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
            
            });
            navigate('/');
         }

      }catch(error){
        console.log(error.response);
            toast.error(error.response.data.message, {
              position: "bottom-center",
              autoClose: false,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: 0,
              theme: "dark",
              transition: Slide,
              });
        
      }finally{
        setLoader(false);
      }
     

    }else{
      console.log("error requesr",error);
      
    }

   
  };
  
  

  return (
    <>
       
    
      <div className="container p-5 fs-4">
      <h2>Login</h2>


        <form onSubmit={handleSubmit}>
          <div className="form-group p-3">
            <label htmlFor="exampleInputEmail1">Email </label>
            <input
              type="email"
              value={user.email}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              onChange={handleInputChange}
            />
          </div>
         
          <div className="form-group p-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              value={user.password}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              autoComplete="on"
            />
          </div>
         

          <button type="submit" className="btn btn-danger m-3 p-3" disabled={loader?'disabled':null}>
            {!loader?'Login' :'wait...'}
          </button>
        </form>
      </div>          
  
    </>
  );
}

export default Login;
