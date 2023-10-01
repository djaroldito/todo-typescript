import { TodoTitle } from "../types"
import { CreateTodo } from "./CreateTodo"

interface Props {
    onAddTodo: ({title}: TodoTitle) => void
}

export const Header:React.FC<Props> = ({onAddTodo}) => {
  return (
    <header className="header">
        <h1>Arielito's to do 
          {/* <img
        style={{width:'80px', height:'40px', borderRadius:'5px'}}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcAzG-FilsJbdzLiNkl6FXrIoOMpr5c1lV-w&usqp=CAU"

        /> */}
        
        </h1>
        <CreateTodo 
        onAddTodo={onAddTodo}
        />

      
    </header>
  )

  }

