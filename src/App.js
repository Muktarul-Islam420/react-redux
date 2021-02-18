
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import Count from './components/Count/Count';
import Handle from './components/Handle/Handle';
import store from './components/Store'

function App() {

  // const reducer = (state ={}, action) =>{
  //   if(action.type === 'A'){
  //     return{
  //       ...state,
  //       A: "Raka loves me"
  //     }
  //   }

  //   if(action.type === 'B'){
  //     return{
  //       ...state,
  //       B: "I loves Raka"
  //     }
  //   }

  //   if(action.type === 'C'){
  //     return{
  //       ...state,
  //       C: "We loves each other"
  //     }
  //   }

  //   return state
  // }

  // const store = createStore(reducer)

  // store.subscribe(() =>{
  //   console.log(store.getState().A)
  // })

  // store.subscribe(() =>{
  //   console.log(store.getState().B)
  // })

  // store.dispatch({type: 'A'})
  // store.dispatch({type: 'Something'})
  // store.dispatch({type: 'B'})
  // store.dispatch({type: 'C'})
  
  return (
    <Provider store = {store}> 
      <div className="App">
      <h1>React Redux</h1>
      <Count></Count>
      <Handle/>
    </div>
    </Provider>
  );
}

export default App;
