import React from 'react';
import Graphpage from './Graphpage';
import Select from 'react-select';

export default class Resultspage extends React.Component {
    constructor(){
        super()

        this.state = {
            pitches: []
        }
    }

    componentDidMount(){
        this.getData()
    }

    getData() {
        const url = "http://localhost:3000/pitches/index";
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("There was an error getting the data");
            })
            .then(response => this.setState({ pitches: response }))
            .catch(() => this.props.history.push("/pitches"));
    }

    render(){
        const options = [
            { value: '1', label: "Why don't you give it/ us a try?" },
            { value: '2', label: "What do you have to lose?" },
            { value: '3', label: "Ready to move forward? I can send over the contract right now." },
            { value: '4', label: "When can we begin [implementation, training, etc.]?" },
            { value: '5', label: "Come onnnnnnnnnnnnnn" },
        ];
    return (
        <div>
            <Graphpage datata={this.state.pitches} />
            <div className="select-form-container" style={{marginTop: '20px'}}>
                <Select
                    placeholder="What closing pitch did you use?"
                    options={options}
                />
            </div>
        </div>
    )
  }
}