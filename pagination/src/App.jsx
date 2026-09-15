
import './App.css'
import { useState } from 'react';

function App() {
  const users = Array.from({length:100},(_,i)=>({
    id:i+1,
    name:`user${i+1}`
  }));
  // console.log(users);

  const [currentpage, setcurrentpage] = useState(1);
  const dataperpage = 10;
  const lastindex = currentpage* dataperpage ;
  const firstindex = lastindex - dataperpage ;
  const currentuser = users.slice(firstindex ,lastindex);

  const totalpages = Math.ceil(users.length / dataperpage );

  return(
    <>
    {currentuser.map(user=>(
      <p key={user.id}>
        {user.name}
      </p>
    ))}
    <button disabled={currentpage === 1} 
    onClick={()=>setcurrentpage(currentpage-1)}>
      prev
    </button>

    {Array.from({length:totalpages} , (_,i)=>(
      <button key={i} onClick={()=>setcurrentpage(i+1)}>
        {i+1}
      </button>
    ))}

    <button disabled={currentpage === totalpages}
    onClick={()=>setcurrentpage(currentpage+1)}>
      next
      
    </button>

    </>
  )
  
  
}

export default App
