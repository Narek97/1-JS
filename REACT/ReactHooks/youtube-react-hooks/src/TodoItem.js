
// React Hook useReducer

import React,{useContext} from 'react'
import {Context} from "./context"

export default function TodoItem({title, id, completed}) {

  const {dispatch} = useContext(Context)
  const cls = ['todo']
  return (
    <li className={cls.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={()=>dispatch({
            type:'toggle',
            payload:id
          })}
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
          onClick={()=>dispatch({
            type:'remove',
            payload:id
          })}
        >
          delete
        </i>
      </label>
    </li>
  )
}






// // // React Hook useContext

// import React,{useState,useContext} from 'react'
// import {Context} from "./context"

// export default function TodoItem({title, id, completed}) {

//   const {removTodo,togleTodo} = useContext(Context)

//   // const [checked, setChecked] = useState(completed)
//   const cls = ['todo']
//   // if(checked){
//   //   cls.push('completed')
//   // }

//   return (
//     <li className={cls.join(' ')}>
//       <label>
//         <input
//           type="checkbox"
//           // checked={checked}
//           // onChange={()=>setChecked(!checked)}
//           checked={completed}
//           onChange={()=>togleTodo(id)}
//         />
//         <span>{title}</span>

//         <i
//           className="material-icons red-text"
//           onClick={()=>removTodo(id)}
//         >
//           delete
//         </i>
//       </label>
//     </li>
//   )
// }