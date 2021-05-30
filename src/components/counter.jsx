import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //  value : this.props.selected.value,
    // //  imageUrl : "https://picsum.photos/200",
    // // tags:["tag1","tag2","tag3","tag4","tag5"]
    // }
    // constructor(props){
    //  super(props);
    //  this.state = {
    //      value:props.value
    //  }
    //  this.handleIncreementClick = this.handleIncreementClick.bind(this);
    //}
    //commented out(down) to remove local state and make it as controlled component
    // handleIncreementClick = () => {
    //     this.setState({
    //         value:this.state.value + 1
    //     })
    // }
    render() { 
        let classes = this.getBadgeClass();
        const {handleIncreementClick ,handleDeleteClick ,selected } = this.props;
        return ( 
            <React.Fragment>
                {/* <img src={this.state.imageUrl} alt="" /> */}
                <span className={classes}>{this.formatCounter()}</span>
                <button className="btn btn-secondary btn-sm m-2" onClick = {() => handleIncreementClick(selected)}>Increement</button>
                <button className="btn btn-danger btn-sm m-2" onClick = {()=> handleDeleteClick(selected.id)}>Delete</button>
                {/* {this.state.tags.length > 0 ? <ul>
                    {this.state.tags.map( value => ff
                        <li key={value}>{value}</li>
                    )}
                </ul> :
                <span>There are no tags in the list</span>
                 } */}
                {/* {this.props.children} */}
                {/* <h4>Counter number:{this.props.id}</h4> */}
            </React.Fragment>
         );
    }
    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += this.props.selected.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCounter() {
        const { value } = this.props.selected;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;