import React from 'react'
import { Link } from 'react-router-dom';

export default function ShowData() {
  const [data, setdata] = React.useState([]);
  

  React.useEffect(() => {
   fetch('http://localhost:3002/data')
   .then(data=>data.json())
   .then(data=>{
    setdata(data)
   })
  }, [])
  
function deleteData(id){
  fetch('http://localhost:3002/data/'+id,{
    method:'DELETE'
  })
  .then(data=>data.json())
  .then(res=>{

   // setdata by filtering out the deleted data
    setdata(data.filter(item=>item.id!==id))
  })
}

//update data
function updateData(id,data){
  
  fetch('http://localhost:3002/data/'+id,{
    method:'PUT',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
  })
  .then(data=>data.json())
  .then(res=>{
    setdata(data.filter(item=>item.id!==id))
  }
  )
}


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h1 className="text-center ">
            Display Data
          </h1>
          <div className="row div col-md-4 offset-md-4">
            <table>
              <thead>
                <tr>
                  <td>email</td>
                  <td>password</td>
                </tr>
              </thead>
              <tbody>
               
                  {
                   data.map(item=>
                    <tr key={item.id}>
                    <td>{item?.email}</td>
                    <td>{item.password}</td>
                    <span className='d-flex '>
                    <i class="fa-solid fa-trash-can float-end mx-2" onClick={deleteData.bind(this,item.id)}></i>
                    <i class="fa-solid fa-pen float-end" ></i>
                    <Link to={`/showdata/${item.id}`}>viewsingle</Link>
                    </span>
                    </tr>
                   )
                  }
             
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
