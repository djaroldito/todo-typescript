import { useState } from "react";
import { Todos } from "./components/Todos";
import { FilterValue, TodoId, TodoTitle, type Todo as Todotype } from "./types";
import { TODO_FILTERS } from "./consts";
import { Footer } from "./components/Footer";

import { Header } from "./components/Header";

// const mockTodos = [
//   {
//     id: "1",
//     title: "todo 1",
//     completed: true,
//   },
//   {
//     id: "2",
//     title: "todo 2",
//     completed: false,
//   },
//   {
//     id: "3",
//     title: "todo 3",
//     completed: false,
//   },
// ];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState([]);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );

  const handleDelete = ({ id }: TodoId): void => {
    let result = todos.filter((el) => el.id !== id);
    setTodos(result);
  };

  const handleCompleted = ({
    id,
    completed,
  }: Pick<Todotype, "id" | "completed">): void => {
    let result = todos.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          completed,
        };
      }
      return el;
    });
    setTodos(result);
  };

  const activeCount = todos.filter((el) => !el.completed).length;
  const completedCount = todos.length - activeCount;

  const handleFilterChange = (filter: FilterValue): void => {
     setFilterSelected(filter);
  };

  const filteredTodos = todos.filter((el) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !el.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return el.completed;
    return el;
  });

  const handleRemoveAllCompleted = () : void=>{
    const newTodos = todos.filter((el)=> !el.completed)
    setTodos(newTodos)
  }

  const onAddTodo = ({title}: TodoTitle):void=>{
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Header 
      onAddTodo={onAddTodo}
      />

      <Todos
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
        todos={filteredTodos}
      />
      <Footer
        onclearCompleted={handleRemoveAllCompleted}
        completedCount={completedCount}
        activeCount={activeCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        
      />
    </div>
  );
};

export default App;
