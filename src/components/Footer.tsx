import { FilterValue } from "../types";
import { Filters } from "./Filters";

interface Props {
  activeCount: number;
  completedCount: number;
  onclearCompleted: () => void;
  filterSelected: FilterValue;
  handleFilterChange: (filter: FilterValue) => void;
 
}

export const Footer: React.FC<Props> = ({
  handleFilterChange,
  filterSelected,
  onclearCompleted,
  activeCount = 0,
  completedCount = 0,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> Tareas pendientes
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
      {
        completedCount > 0 ? <button className="clear-completed" onClick={onclearCompleted}>Borrar Completados</button> : null
      }
    </footer>
  );
};
