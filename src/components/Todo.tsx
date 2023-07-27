import { TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  handleDelete:({ id }:TodoId) => void
  handleCompleted:({ id, completed } : Pick<TodoType, 'id' | 'completed'> ) => void
}


export const Todo :React.FC<Props> = ({ id, title, completed, handleDelete, handleCompleted }) => {
  return (
    <div className='view'>
        <input  onChange={(e)=>{
          handleCompleted({id, completed: e.target.checked})}}
          className='toggle'  type='checkbox' ></input>
        <label>{title}</label>
        <button onClick={()=>{handleDelete({ id })}} className='destroy'></button>
    </div>
  )
}

