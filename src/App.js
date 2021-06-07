import logo from './logo.svg';
import {createElement, React,useState} from 'react';
import './App.css';

function App() {
  const[curr,setCurr] = useState('');
  const[item,setItems] = useState([]);
  const fun = (e)=>{
    if(curr !=0){
    setItems([curr,...item]);
    setCurr('');
    }

  }
  const deleteItem=(ind)=>{
    const updatedData=item.filter((ele,id)=>{
      return ind != id;
    
    })
    setItems(updatedData);

  }

  return (
    <>
      <div className="main_div">
      <div className="data_div">
      <div className="h1"><b>To-Do-List 🔥 </b></div>
      <div className="input">
      <input onBlur={fun} value={curr} onChange={(e)=>{setCurr(e.target.value);
      }} type="text" placeholder=" ✍️ Enter Item which you want to store :) " />
      <br/>
     
      </div>
      <div className="mydata">
       <ol  className="DataList">
         
         {
           item.map((ele,ind)=>{
           
           return (
               <div className="showdata" key={ind}>
               <h3>{ele}</h3>
               <i className="far fa-trash-alt add-btn " title="delete item"  onClick={()=> deleteItem(ind)}></i>
             </div>
           )

           })
         }
         
       </ol>
       <button onClick={()=>{
        setItems([]);
      }}>Clear All</button><br/>



      </div>
      </div>

      </div>
    </>
  );
}

export default App;
