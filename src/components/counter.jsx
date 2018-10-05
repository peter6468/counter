import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    // if(prevprops.counter.vale !== this.props.counter.value) {
      //make a ajax call and get new data from the server
    //}
  }

  componentWillUnMount() {
    console.log('Counter -Unmount');
  }
 

  render() { 
    return (
      <div>
        {/* inside curly brackets u can write any js expression*/}  
        {/*jsx expressions are just like noraml js obj,u can return them from a fucntion, u can pass them to a funvtion, u can also use them as the value of a constant or variable}*/}
        <span className={this.getBadgeClasses()}>{this.formatCount()}  </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/*need 2 change this expression + pass the idea of this counter so pass an => function + here we call onDelete w/this.props.id */}
        <button 
          onClick={() => this.props.onDelete(this.props.counter.id)} 
          className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );  
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value  === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const {value} = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}



export default Counter;
