import react,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let arr=["Ashikur Rahman","Surieya Akter","Amatur Rahman"]
  return (
    <div>
      <Counter></Counter>
      <User></User>
      {
        arr.map(x=><Name nm={x}></Name>)
      }     
    </div>
  );
}

function Name(props){
  return <div style={{border:'2px solid red',margin:'5px'}}>
    <h1>{props.nm}</h1>
    <h3>try to understand</h3>
  </div>
}

function Counter(){
  let [count,setCount]=useState(0);
  return <div>
    <h1 id='abc' class=''>Count: {count}</h1>
    <button onClick={()=>setCount(count+1)}> + </button>
    <button onClick={()=>setCount(count-1)}> - </button>
  </div>
}


function User(){
const [user,setUsers]=useState([]);
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>setUsers(data))
},[])
  return(
    <div>
      <h1>Dynamic Users : {user.length}</h1>
      <ul>
        {
          user.map(x=><li>{x.name}</li>)
        }
      </ul>
    </div>
  )
}
export default App;
