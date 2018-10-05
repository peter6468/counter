import React, { Component } from 'react';
import Counter from './counter';

class  Counters  extends Component {
    render() { 
        return (
            <div>
                {/* we get each counter and map it to a counter component, we are setting attributes  */}
                <button 
                    /* */
                    onClick={this.props.onReset}
                    className="btn btn-primary btn-sm -2">Reset</button>
                {this.props.counters.map(counter => (
                    <Counter 
                        key={counter.id} 
                        /* we are not handling that evnet we are bubbling it up to the parent of this component*/
                        onIncrement={this.props.onIncrement }
                        onDelete={this.props.onDelete} 
                        counter={counter}
                    />  
            
                    ))}
            </div>
          );
    }
}
 
export default Counters;