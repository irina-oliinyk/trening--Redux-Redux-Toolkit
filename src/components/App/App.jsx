import { Layout } from "../Layout/Layout";
import { AppBar } from "../AppBar/AppBar";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskList } from "../TaskList/TaskList";
import css from "./App.module.css";

export const App = () => {
  return (
    <div className={css.conteiner}>
      <Layout>
        <AppBar />
        <TaskForm />
        <TaskList />
      </Layout>
    </div>
  );
};

export default App;
