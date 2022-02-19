import React,{useState,useEffect} from 'react'
import TdoList from './Todo/TdoList'
import Context from './context/context'
import AddTodo from './Todo/AddTodo'
import Loader from './loader'
import Modal from './Modal/Modal'
function App() {


  const [todo, setTodo] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => response.json())
    .then(todos=>{
      setTimeout(() => {
        setTodo(todos)
        setLoader(false)
      }, 2000);
    })
  }, [])

  const onToggle= (id)=>{
    setTodo(todo.map(t=>{
      if(t.id===id){
        t.completed=!t.completed
      }
      return t
    })
    )
  }

  const removeTodo = id =>{

    setTodo(todo.filter(todo=>todo.id!==id))
    
  }

  const addTodo = (title) =>{
      setTodo([...todo,{
        title,
        id:Date.now(),
        completed:false}
      ])
  }

  return (
    <Context.Provider
      value={{removeTodo}}
    >
      <div className='wraper' >
        <h1>React Tutorial</h1>
        <Modal/>
        <AddTodo onCreate={addTodo} />
        {loader?<Loader/> :
             todo.length? (<TdoList todo={todo} onToggle={onToggle}/>)
             :(loader?null:<p>No Todos</p>)
        }
     
  
         
      </div>
    </Context.Provider>
  )
}

export default App
