import React from 'react';
import BarChart from 'react-bar-chart';

export default class Graphpage extends React.Component {
    constructor(){
        super()

        this.state = {
            pitches: []
        }
    }

    handleBarClick(element, id) {
        console.log(`The bin ${element.text} with id ${id} was clicked`);
    }

    handleChange(e){
        e.preventDefault();
        const url = "http://localhost:3000/pitches/create";
        
    }

    render(){
        console.log(this.props, 'the passed this.props')
        const datas = [
            { text: 'Give us a try...', value: this.props.datata.pitch1 },
            { text: 'Have something to lose...', value: this.props.datata.pitch2 },
            { text: 'Ready to move forward...', value: this.props.datata.pitch3 },
            { text: 'When do we begin...', value: this.props.datata.pitch4 },
            { text: 'Come onnnnnn', value: this.props.datata.pitch5 }
        ];
    
        const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    return (
        <div className="bar-graph-container">
                <BarChart 
                    ylabel='Closing Pitch'
                    height={500}
                    width={1175}
                    margin={margin}
                    data={datas}
                    onBarClick={this.handleBarClick}/>
                />
            
        </div>
    )
    }
}