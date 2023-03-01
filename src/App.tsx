import './App.css';
import NewTodo from './Componets/NewTodo';
import Todos from './Componets/Todos';
import TodoContextProvider from './store/todo-context';


function App() {

  

  return (
    <TodoContextProvider>
      <NewTodo/>
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
