import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import {toast} from 'react-toastify'

const Register = () => {
  const[name,setName]=useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [phone,setPhone] = useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name,email,password,phone);
    toast.success('Register Succesfully');
  };



  return (
    <Layout title={'Register Now!'}>
        <div className='register'>
            <h1>Register Now!</h1>
            <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <input type="text" value={name} onChange={(e)=> setName(e.target.value)}className="form-control" id="exampleInputEmail1" placeholder='Enter Your Name'required  />
  </div>
  <div className="mb-3">
    
    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter Your Email' required/>
  </div>
  <div className="mb-3">
    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter Password' required />
  </div>
  <div className="mb-3">
    <input type="text" value={phone} onChange={(e)=> setPhone(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter Your Number' required/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </div>
        
      
    </Layout>
  );
};

export default Register; 
