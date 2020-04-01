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

    handleChange = pitch => {
        const url = "http://localhost:3000/pitches/create";

        const body = {
            pitch
        };

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(window.location.reload())
            .catch(error => console.log(error.message));
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
            { value: '1', label: "I'm jealous! I would live here!" },
            { value: '2', label: "One of the best decisions you'll ever make!" },
            { value: '3', label: "Ready to move forward? I can send over the contract right now." },
            { value: '4', label: "Your family is guaranteed to love it!" },
            { value: '5', label: "Come onnnnnnnnnnnnnn" },
        ];
    return (
        <div>
            <div className="color-legend-container">
                <div id="color-row">
                    <div id="legend" style={{ backgroundColor: 'lightgreen' }}> 
                    </div>
                    <p id="row-text">"I'm jealous! I would live here!"</p>
                </div>
                <div id="color-row">
                    <div id="legend" style={{ backgroundColor: 'lightskyblue' }}> 
                    </div>
                    <p id="row-text">"One of the best decisions you'll ever make!"</p>
                </div>
                <div id="color-row">
                    <div id="legend" style={{ backgroundColor: 'violet' }}> 
                    </div>
                    <p id="row-text">"Ready to move forward? I can send over the contract right now."</p>
                </div>
                <div id="color-row">
                    <div id="legend" style={{ backgroundColor: 'lightsalmon' }}> 
                    </div>
                    <p id="row-text">"Your family is guaranteed to love it!"</p>
                </div>
                <div id="color-row">
                    <div id="legend" style={{ backgroundColor: 'rgb(255, 255, 156)' }}> 
                    </div>
                    <p id="row-text">"Come onnnnnnnnnnnnnn"</p>
                </div>
                <p className="tips-text">Tips?</p>
                <div className="tips">
                    <ul>
                        <li>Generally most sales are done on wednesday</li>
                        <li>Most sales from the week prior for us were on friday
                            <ul>
                                <li>Possibly because many people just got paid</li>
                            </ul>
                        </li>
                        <li>With the most successful closing pitch being "Come onnnnnnnnnnnnnn"
                            <ul>
                                <li>Probably because people are in a lighter mood on friday</li>
                                <li>Also many people have eaten after 2pm and studies show people are 
                                    more likely to say yes after eating.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <Graphpage propData={this.state.pitches} />
            <div className="select-form-container" style={{marginTop: '20px'}}>
                <Select
                    placeholder="What closing pitch did you use?"
                    options={options}
                    onChange={this.handleChange}
                />
            </div>
        </div>
    )
  }
}