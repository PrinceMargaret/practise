import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Header from "./Header/Header"
import React from 'react' 
import AddData from "./AddData/AddData"
import ShowData from "./ShowData/ShowData"
import ShowDataSingle from "./ShowDataSingle/ShowDataSingle"
//const AddData=React.lazy(()=>import("./AddData/AddData"))
//const ShowData=React.lazy(()=>import("./ShowData/ShowData"))
//const ShowDataSingle=React.lazy(()=>import("./ShowDataSingle/ShowDataSingle"))

function App() {
  return (
    <div >
  <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/adddata' element={<AddData/>}/>
    <Route path='/showdata' element={<ShowData/>}/>
    <Route path='/showdata/:id' element={<ShowDataSingle/>} />
    
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
