import React from 'react';
import './App.css';
import CustomHookWithCounterOne from './components/CustomHookWithCounterOne';
import CustomHookWithCounterTwo from './components/CustomHookWithCounterTwo';
// import CustomHookWithDocTitleOne from './components/CustomHookWithDocTitleOne';
// import CustomHookWithDocTitleTwo from './components/CustomHookWithDocTitleTwo';
// import ClassTimer from './components/ClassTimer';
// import HookTimer from './components/HookTimer';
// import UseRefHook from './components/UseRefHook';
// import UseMemoCounter from './components/UseMemoCounter';
// import ParentComponent from './components/ParentComponent';
// import DataFetchingTwo from './components/DataFetchingTwo';
// import DataFetchingOne from './components/DataFetchingOne';
// import UseReducerWithContextA from './components/UseReducerWithContextA';
// import UseReducerWithContextB from './components/UseReducerWithContextB';
// import UseReducerWithContextC from './components/UseReducerWithContextC';
// import ReducerCounterThree from './components/ReducerCounterThree';
// import ReducerCounterOneTwo from './components/ReducerCounterTwo';
// import ReducerCounterOne from './components/ReducerCounterOne';
// import ComponentC from './components/ComponentC';
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

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

// export const CountContext = React.createContext()

// const initialState = 0
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1
//     case 'decrement':
//       return state - 1
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// } 

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <CustomHookWithCounterOne/>
      <CustomHookWithCounterTwo/>
      {/* <CustomHookWithDocTitleOne/>
      <CustomHookWithDocTitleTwo/> */}
      {/* <ClassTimer />
      <HookTimer /> */}
      {/* <UseRefHook/> */}
      {/* <UseMemoCounter/> */}
      {/* <ParentComponent/> */}
      {/* <DataFetchingTwo/> */}
      {/* <DataFetchingOne/> */}
      {/* <CountContext.Provider value={{countState: count, countDispatch: dispatch}} >
        Count - {count}
        <UseReducerWithContextA />
        <UseReducerWithContextB />
        <UseReducerWithContextC />
      </CountContext.Provider> */}
      {/* <ReducerCounterThree /> */}
      {/* <ReducerCounterOneTwo /> */}
      {/* <ReducerCounterOne/> */}
      {/* <UserContext.Provider value={'Sandeep'}>
        <ChannelContext.Provider value={'Kumar'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

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
