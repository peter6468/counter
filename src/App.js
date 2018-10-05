import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';
import './App.css';

//mounting phase
class App extends Component {

  state = {  
    counters: [
        { id: 1, value: 0},
        { id: 2, value: 0},
        { id: 3, value: 0},
        { id: 4, value: 0}
        
    ]
  };

  //we need to call the constructor of the parent class using super
  //this constructor is only called once when an instance of a class is created
  //this is a gr8 opportunity for initializing the properties in that instance for
  //ex 1 common use case is to set this date based on the props we receive from the
  //outsid. for ex we can set this.state
  constructor() {
    super();
    console.log('Aop-Constructor'); 
  }

  //this method is called after our component is rendered into the dom
  //perfect place to make Ajax calls to get data from the server
  componentDidMount() {
    //Ajax call
    //this.setState({})
    console.log('App=Mounted');
  }
  
  handleIncrement = counter => {
    //spread operator clones this,state,counters, so we're cloning this array
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
    console.log(this.state.counters[index]);
     
  };
  
  handleReset = () => {
    const counters =  this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({ counters });
  };
  
  //eventhandler its a new method
  handleDelete = (counterId) => {
    console.log('Event Handler Claeed, counterId ');
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log('App- Rendered');
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value >0).length}
         />
        <main className="container">
        <Counters 
           /*these are the properties of the prop obj*/
          counters={this.state.counters}
          onReset={this.handleReset} 
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete }
        />
        </main>
       </React.Fragment>
    );
  }
}

export default App;

//MOUNT: when an instance of a component is created+inserted into the dom there
//are a few special methods we can add to our componets+react will automatically
//call these methods wh/are known as lifecycle hooks
  //hooks allow us to hook into certain moments during the lifecycle of a component
  //+do something + the mounting phase we have 3 lifecycle hooks : contructor,
  //render, componentDidMount
  //react call these methods in order

//2nd lifecycle phase is UPDATE: this happens when the state or the props of
//a component get changed in this phase we have t lifecycle hooks: render and componentDidUpdate

//3rd lifecycle UNMOUNT contains componentWillUnmount, its when a component is removed
//from the Dom such as when we delete acounter in this ex
