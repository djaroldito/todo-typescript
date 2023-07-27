import { TodoTitle } from "../types"
import { CreateTodo } from "./CreateTodo"

interface Props {
    onAddTodo: ({title}: TodoTitle) => void
}

export const Header:React.FC<Props> = ({onAddTodo}) => {
  return (
    <header className="header">
        <h1>todo<img
        style={{width:'90px', height:'50px', borderRadius:'5px'}}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcAzG-FilsJbdzLiNkl6FXrIoOMpr5c1lV-w&usqp=CAU"

        />
        </h1>
        <CreateTodo 
        onAddTodo={onAddTodo}
        />

      
    </header>
  )

  }

