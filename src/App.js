// This will be our parent component for all the other components
// This is the component that will be exported into the index.js file to be rendered in the root
import './App.css';
import { CreateNewTask } from './Components/CreateNewTask'; 

function App() {
  return (
    <div className='App'> 
    <CreateNewTask />
    </div>
  );
}

export default App;
