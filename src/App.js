import './App.css';
import ClassCounter from './components/ClassCounter';
import ClassCounterTwo from './components/ClassCounterTwo';
import FunctionCounter from './components/FunctionCounter';
import FunctionCounterTwo from './components/FunctionCounterTwo';

function App() {
  return (
    <div className="App">
       <ClassCounter/>
       <FunctionCounter/>
       <FunctionCounterTwo/>
       <ClassCounterTwo/>
    </div>
  )
}

export default App;
