import {React,Component} from 'react';
import "./App.css"
import {useSelector,useDispatch,connect} from "react-redux"
import {counterActions} from "./store/index";
function App() {
const counter = useSelector(state => state.counter.counter)
const dispatch = useDispatch()
// const incrementCounter=()=>{
//   dispatch({type:"increment"})
// }
// const decrementCounter=()=>{
//   dispatch({type:"decrement"})
// }
// const increaseCounter=()=>{
//   dispatch({type:"increase",value:5})
// }
const incrementCounter=()=>{
  dispatch(counterActions.increment())
}
const decrementCounter=()=>{
  dispatch(counterActions.decrement())
}
const increaseCounter=()=>{
  dispatch(counterActions.increase(5))
}
return( 
  <div className="mainDiv">
   <div>Counter value is {counter}</div>
   <div className="buttons_div">
     <div>
       <button onClick={incrementCounter}>Increment</button>
       <button onClick={decrementCounter}>Decrement</button>
       <button onClick={increaseCounter}>Increment by 5</button>
     </div>
   </div>

  </div>
)
}
export default App;
// class App extends Component{
 
//  incrementCounter(){
//    this.props.increment();
//  };
//   decrementCounter(){
//     this.props.decrement();
//   };
//   render(){
//     return(
// <div className="mainDiv">
//    <div>Counter value is {this.props.counter}</div>
//    <div className="buttons_div">
//      <div>
//        <button onClick={this.incrementCounter.bind(this)}>Increment</button>
//        <button onClick={this.decrementCounter.bind(this)}>Decrement</button>
//      </div>
//    </div>

//   </div>)
//   }
// }
// const mapStateToProps =state=>{
//   return{
//     counter:state.counter
//   }
// }
// const mapDispatchToProps=dispatch=>{
//   return{
// increment:()=>{ dispatch({type:"increment"})},
// decrement:()=>{ dispatch({type:"decrement"})}
//   }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(App);
