import React from 'react';
import './App.css';
import ComponentC from './components/ComponentC';
// import DataFetching from './components/DataFetching';
// import IntervalClassCounter from './components/IntervalClassCounter';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import MouseContainer from './components/MouseContainer';
// import ClassMouse from './components/ClassMouse';
// import HookMouse from './components/HookMouse';
// import ClassCounterOne from './components/ClassCounterOne';
// import HookCounterOne from './components/HookCounterOne';
// import FunctionCounterFour from './components/FunctionCounterFour';
// import FunctionCounterThree from './components/FunctionCounterThree';
// import ClassCounter from './components/ClassCounter';
// import ClassCounterTwo from './components/ClassCounterTwo';
// import FunctionCounter from './components/FunctionCounter';
// import FunctionCounterTwo from './components/FunctionCounterTwo';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Sandeep'}>
        <ChannelContext.Provider value={'Kumar'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>

      {/* <DataFetching /> */}
      {/* <IntervalClassCounter/>
      <IntervalHookCounter/> */}
      {/* <MouseContainer/> */}
      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      {/* <ClassCounterOne/> */}
      {/* <HookCounterOne/> */}
      {/* <FunctionCounterFour/> */}
      {/* <FunctionCounterThree/> */}
      {/* <ClassCounter/>
       <FunctionCounter/>
       <FunctionCounterTwo/>
       <ClassCounterTwo/> */}
    </div>
  )
}

export default App;
