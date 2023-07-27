import { TodoId , type ListOfTodos, type Todo as Todotype } from '../types'
import {Todo} from './Todo'


interface Props{
    todos:ListOfTodos
    handleDelete:({ id }:TodoId) =>  void
    handleCompleted:({ id, completed } : Pick<Todotype, 'id' | 'completed'> ) => void
}



export const Todos : React.FC<Props> = ({ todos, handleDelete, handleCompleted })  => {
    return(
        <ul className='todo-list'>
            {
                
                todos.map((el)=>(
                    <li key={el.id} className={`${el.completed ? 'completed' : ''}`}>
                        <Todo
                        id={el.id}
                        key={el.id} 
                        title={el.title}
                        completed={el.completed}
                        handleDelete={handleDelete}
                        handleCompleted={handleCompleted}
                            />
                           
                    </li>
                ))

            }
        </ul>
    )
}