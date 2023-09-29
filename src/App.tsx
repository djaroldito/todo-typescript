import { useState } from "react";
import { Todos } from "./components/Todos";
import { FilterValue, TodoId, TodoTitle, type Todo as Todotype } from "./types";
import { TODO_FILTERS } from "./consts";
import { Footer } from "./components/Footer";

import { Header } from "./components/Header";



const App = (): JSX.Element => {
  const [todos, setTodos] = useState([]);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );

  const handleDelete = ({ id }: TodoId): void => {
    // @ts-ignore
    let result = todos.filter((el) => el.id !== id);
    setTodos(result);
  };

  const handleCompleted = ({
    id,
    completed,
  }: Pick<Todotype, "id" | "completed">): void => {
    let result = todos.map((el) => {
      // @ts-ignore
      if (el.id === id) {
        return {
          // @ts-ignore
          ...el,
          completed,
        };
      }
      return el;
    });
    // @ts-ignore
    setTodos(result);
  };
// @ts-ignore
  const activeCount = todos.filter((el) => !el.completed).length;
  const completedCount = todos.length - activeCount;

  const handleFilterChange = (filter: FilterValue): void => {
     setFilterSelected(filter);
  };

  const filteredTodos = todos.filter((el) => {
    // @ts-ignore
    if (filterSelected === TODO_FILTERS.ACTIVE) return !el.completed;
    // @ts-ignore
    if (filterSelected === TODO_FILTERS.COMPLETED) return el.completed;
    return el;
  });

  const handleRemoveAllCompleted = () : void=>{
    // @ts-ignore
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
    // @ts-ignore
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
