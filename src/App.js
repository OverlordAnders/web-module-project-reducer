import React from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { useReducer } from 'react';
import reducer, {initialState} from './reducers';
import { addOne } from './actions';
import { applyNumber } from './actions';



function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  const handleApplyNum = (value)=>{
    dispatch(applyNumber(value));
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>handleApplyNum(1)} value={1}/>
              <CalcButton onClick={()=>handleApplyNum(2)} value={2}/>
              <CalcButton onClick={()=>handleApplyNum(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>handleApplyNum(4)} value={4}/>
              <CalcButton onClick={()=>handleApplyNum(5)} value={5}/>
              <CalcButton onClick={()=>handleApplyNum(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>handleApplyNum(7)} value={7}/>
              <CalcButton onClick={()=>handleApplyNum(8)} value={8}/>
              <CalcButton onClick={()=>handleApplyNum(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton value={"+"}/>
              <CalcButton value={"*"}/>
              <CalcButton value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
