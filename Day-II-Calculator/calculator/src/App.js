import React from 'react';
import './App.css';
//import Keypad from './components/KeypadComponents/Keypad';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from '../src/components/ButtonComponents/NumberButton';
import ActionButton from '../src/components/ButtonComponents/ActionButton';

class App extends React.Component {
  

    state = {numArr: [],
    result: 0,
  operationArr: [],
displayArr: []};
    
 
  

  clickHandler = (e) =>{
    let {numArr, result, operationArr, displayArr} = this.state;
    let value=e.target.getAttribute('data-value');
    console.log(value, result);
    numArr.push(value);
    displayArr.push(value);
    result = displayArr;
    this.setState({numArr, result, operationArr, displayArr});
    console.log(numArr);



}

doMath = (e) =>{
  let{numArr, operationArr, result, displayArr} = this.state;
  let value=e.target.getAttribute('data-value');
  operationArr.push(numArr);
  operationArr.push(value);
  displayArr.push(value);
  result = displayArr.join('');
  console.log(operationArr);
  this.setState({numArr: [], operationArr, result, displayArr});

}

mathResult = (e) => {
  let{operationArr, result, numArr} = this.state;
  operationArr.push(numArr);
  let num = operationArr.join('');
  result = eval(num);
  this.setState({operationArr, numArr, result});
}

clear = (e) => {
let {numArr, result, operationArr, displayArr} = this.state;
numArr = [];
operationArr = [];
displayArr = [];
result = 0;
this.setState({numArr, result, operationArr, displayArr});
console.log(this.state.numArr);
}

 render() {
  return (
    
    <div className='calculator'>
      <div><CalculatorDisplay initialValue={this.state.result}/></div>
      <div className = 'calculatorgrid'>
        <div className = 'actionrow'><div  className='column' ><ActionButton buttonStyle={'long clearzero'} text={'Clear'} click={this.clear} /></div><div  className='column startend' ><NumberButton buttonStyle={'number operator'} text={'/'} click={this.doMath}  /></div></div>
        <div className = 'row'><div  className='column' ><NumberButton buttonStyle={'number'} text={'7'} click={this.clickHandler} /></div><div  className='column' ><NumberButton buttonStyle={'number'} text={'8'} click={this.clickHandler} /></div><div  className='column' ><NumberButton buttonStyle={'number'} text={'9'} click={this.clickHandler} /></div><div  className='column' ><NumberButton buttonStyle={'number operator'} text={'*'} click={this.doMath}  /></div></div>
        <div className = 'row'><div  className='column' ><NumberButton buttonStyle={'number'} text={'4'} click={this.clickHandler} /></div><div  className='column' ><NumberButton buttonStyle={'number'} text={'5'} click={this.clickHandler} /></div><div  className='column' ><NumberButton buttonStyle={'number'} text={'6'} click={this.clickHandler} /></div><div  className='column' ><NumberButton buttonStyle={'number operator'} text={'-'} click={this.doMath}  /></div></div>
        <div className = 'row'><div  className='column' ><NumberButton buttonStyle={'number'} text={'1'} click={this.clickHandler} /></div><div  className='column' ><NumberButton buttonStyle={'number'} text={'2'} click={this.clickHandler} /></div><div  className='column' ><NumberButton buttonStyle={'number'} text={'3'} click={this.clickHandler} /></div><div  className='column' ><NumberButton buttonStyle={'number operator'} text={'+'} click={this.doMath}  /></div></div>
        <div className = 'actionrow'><div  className='column' ><NumberButton buttonStyle={'long clearzero'} text={'0'} click={this.clickHandler} /></div><div  className='column startend' ><NumberButton buttonStyle={'number operator'} text={'='} click={this.mathResult}  /></div></div>
        
        
        </div>
    </div>
  );
};
}
export default App;
