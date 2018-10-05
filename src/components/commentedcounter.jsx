import React, { Component } from "react";

class Counter extends Component {
  //state:its an obj that inc any data that this component needsz: in this case we add
  //a property
  // state = {
  //  value: this.props.counter.value
  // };

  //method that is called when an obj of this type is created "class Counter"
  //at this point in the constructor we do have access to this
  //this is known as bind method
  // constructor() {
  //   //have to use super to get access to above
  //   // bind method: allows us set the value of this 
  //   //this will not change now since its binde
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // we can convert above into an => fumctiom:dont re bind this keyword they inherit it
  //=> much easier than having to use constructor
  handleIncrement = () => {
    //console.log("Increment Clicked", this);
    //console.log(product);
    //this.setState method tell react we're updating the state then it will figure out what part of the
    //state =has changed + based on that it will bring the Dom in syn w/virtual Dom 
    this.setState({ value: this.state.value +1 });
    //obj.method(); if a function is called as part of a method in an obj, this in that functio will always
    //return a refrence ot that obj
    //function(), if function is called as stand alone function w/o an obj reference this refrence by 
    //defalut returns a reference to the window objbut if strict mode is enabled this will return undefined
    //use bind method

    //every react component has a property called props, wh/is a plain js obj th/includes all the attributes that we set
  };

  render() { 
    
    console.log('props', this.props);
    return (
      <div>
        {this.props.children}
        {/* inside curly brackets u can write any js expression*/}  
        {/*jsx expressions are just like noraml js obj,u can return them from a fucntion, u can pass them to a funvtion, u can also use them as the value of a constant or variable}*/}
        <span className={this.getBadgeClasses()}>{this.formatCount()}  </span>
        <button
          onClick= {() => this.handleIncrement()}
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
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const {value} = this.state
    return value === 0 ? "Zero" : value;
  }
}



export default Counter;
