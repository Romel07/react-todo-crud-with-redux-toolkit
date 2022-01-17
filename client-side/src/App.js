import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'
import TotalCompleteItem from './components/TotalCompleteItem'

function App() {
  return (
    <div className="container bg-white p-4 mt-5">
      <h1>My Todo List</h1>
      <AddTodoForm/>
      <TodoList/>
      <TotalCompleteItem/>
    </div>
  );
}

export default App;
