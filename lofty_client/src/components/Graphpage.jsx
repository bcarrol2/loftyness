import React from 'react';
import BarChart from 'react-bar-chart';

export default class Graphpage extends React.Component {

    handleBarClick(element, id) {
        console.log(`The bin ${element.text} with id ${id} was clicked`);
    }

    render(){
        let propData = this.props.propData
        console.log(this.props, 'the passed this.props')
        const data = [
            { text: propData.pitch1, value: propData.pitch1 },
            { text: propData.pitch2, value: propData.pitch2 },
            { text: propData.pitch3, value: propData.pitch3 },
            { text: propData.pitch4, value: propData.pitch4 },
            { text: propData.pitch5, value: propData.pitch5 }
        ];
    
        const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    return (
        <div className="bar-graph-container">
                <BarChart 
                    ylabel='Closing Pitch'
                    height={500}
                    width={500}
                    color='white'
                    margin={margin}
                    data={data}
                    onBarClick={this.handleBarClick}
                />
            
        </div>
    )
    }
}