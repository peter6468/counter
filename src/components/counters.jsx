import React, { Component } from 'react';
import Counter from './counter';

class  Counters  extends Component {
    render() { 
        const { onReset, counters, onDelete, onIncrement } = this.props;

        return (
            <div>
                {/* we get each counter and map it to a counter component, we are setting attributes  */}
                <button 
                    /* */
                    onClick={onReset}
                    className="btn btn-primary btn-sm -2">Reset</button>
                {this.props.counters.map(counter => (
                    <Counter 
                        key={counter.id} 
                        /* we are not handling that evnet we are bubbling it up to the parent of this component*/
                        onIncrement={onIncrement }
                        onDelete={onDelete} 
                        counter={counter}
                    />  
            
                    ))}
            </div>
          );
    }
}
 
export default Counters;