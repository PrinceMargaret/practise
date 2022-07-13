 
import React , {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';


export default function ShowDataSingle() {
  const [view, setview] = useState([]);
  let {id}=useParams();
  useEffect(() => {
    fetch(`http://localhost:3002/data/${id}`)
    .then(data=>data.json())
    .then(data=>{
      setview(data)
    
    })

  
  }, [])
  


  return (
    <div>email : {view.email} password: {view.password}</div>
  )
}
