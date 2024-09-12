import { Task } from "../Task/Task";
import { useSelector } from "react-redux";
import css from "./TaskList.module.css";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case "active":
      return tasks.filter((task) => !task.comleted);
    case "completed":
      return tasks.filter((task) => task.completed);

    default:
      return tasks;
  }
};

export const TaskList = () => {
  // 2. Отримуємо масив завдань із стану Redux
  const tasks = useSelector((state) => state.tasks.items);

  // 3. Отримуємо значення фільтра із стану Redux
  const statusFilter = useSelector((state) => state.filters.status);

  // 4. Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
