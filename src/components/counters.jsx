import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    // state = { 
    //     counters : [
    //         {id: 0, value:  0},
    //         {id: 1, value:  3},
    //         {id: 2, value:  0},
    //         {id: 3, value:  0},
    //     ]
    //  }
    //  handleDeleteClick=(id)=>{
    //     const counters = this.state.counters.filter(counter => counter.id !== id);
    //     this.setState({
    //         counters 
    //     })
    //  }
    //  handleIncreementClick = (counter) => {
    //      //Commented to use spread operator
    //     // const counters = this.state.counters.map(c => {
    //     //     if(c.id === id) {
    //     //      c.value = c.value+1
    //     //     }
    //     // return c;
    //     // });
    //     // this.setState({
    //     //     counters 
    //     // })
    //    const counters = [...this.state.counters];
    //   //must not do this counters[0].value++;  
    //    const index = counters.indexOf(counter);
    // //    counters[index] = {...counter}
    //    counters[index].value++;
    //    this.setState({ counters })
    // }
    //  handleReset = () =>{
    //   const counters = this.state.counters.map(c => {
    //       c.value = 0;
    //       return c;
    //    }
    // );
    //   this.setState({ counters })
    //  }
    render() { 
        const { countersState, handleReset ,handleDeleteClick ,handleIncreementClick } = this.props
        return ( <div>
            <button className ="btn btn-primary m-2" onClick={handleReset} >Reset</button>
            {countersState.map( counter =>
            <div key = {counter.id}>
            <Counter 
            key = {counter.id} 
            selected = {counter} 
            handleDeleteClick={handleDeleteClick}
            handleIncreementClick={handleIncreementClick}
            />
            <br/>
            </div>
            )
            }
          </div>
        )
    }
}
 
export default Counters;