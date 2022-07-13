
import React , { useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddData() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  let nevigate=useNavigate();


  function sendData(){
    fetch('http://localhost:3002/data',{

      method:"Post",

      headers:{
        'Content-Type':"application/json"
      },

    
      body: JSON.stringify(
        {
          email,
          password
        }
      )
    }).then(data=> data.json() )
    .then( nevigate("/showdata"))
  }
  




  return (
    <div className="container mt-3">

      <div className="row">
        <div className="col-md-4 offset-md-4 border py-3 rounded">
          <h1 className='text-center'>Add Data</h1>
          <form >
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input onChange={e=>setemail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input onChange={e=>setpassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button onClick={sendData} type="submit" class="btn btn-primary">Submit</button>
          </form>

        </div>
      </div>
    </div>







  )
}
