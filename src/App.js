import './App.css';
import React, { Component } from 'react';
import Counters from './components/counters';
import NavigationBar from './components/navigationBar';
import CakeContainer from './components/cakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store'
class App extends Component {
  state = { 
    counters : [
        {id: 0, value:  0},
        {id: 1, value:  3},
        {id: 2, value:  0},
        {id: 3, value:  0},
    ]
 }
 handleDeleteClick=(id)=>{
    const counters = this.state.counters.filter(counter => counter.id !== id);
    this.setState({
        counters 
    })
 }
 handleIncreementClick = (counter) => {
     //Commented to use spread operator
    // const counters = this.state.counters.map(c => {
    //     if(c.id === id) {
    //      c.value = c.value+1
    //     }
    // return c;
    // });
    // this.setState({
    //     counters 
    // })
   const counters = [...this.state.counters];
  //must not do this counters[0].value++;  
   const index = counters.indexOf(counter);
//    counters[index] = {...counter}
   counters[index].value++;
   this.setState({ counters })
}
 handleReset = () =>{
  const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
   }
);
  this.setState({ counters })
 }
 render(){
  return (
    <Provider store={store}>
    <React.Fragment>
        {/* <NavigationBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
        <Counters countersState={this.state.counters} handleReset={this.handleReset} handleIncreementClick={this.handleIncreementClick} handleDeleteClick={this.handleDeleteClick}/> 
        </main>   */}
        <CakeContainer/>
    </React.Fragment>
    </Provider>
  );
}
}

export default App;
