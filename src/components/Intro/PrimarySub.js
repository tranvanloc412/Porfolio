import React, {Component} from 'react';

import './PrimarySub.css';

class PrimarySub extends Component {
    state = {
        index: null
    };

    onMouseEnterHandler = (index) => {
        this.setState({index: index});
    };

    render () {
        const wordsArr = this.props.text.split(" ");
        const sub = [];

        wordsArr.map((word, index) => {
            sub.push(
                  <div
                    key={index}
                    onMouseEnter={() => this.onMouseEnterHandler(index)}
                    className={`Sub${this.state.index === index ? " top" : ""}`}>
                    {word}
                  </div> 
            )
            return [];
        });
        return (
            <div>
                {sub}
            </div>
        );
    };
};
    
export default PrimarySub;