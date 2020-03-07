import React from 'react';
import Graphpage from './Graphpage';
import Select from 'react-select';
import { CookiesProvider } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.info("You can click on the bars in the graph for more info!", {
    position: toast.POSITION.BOTTOM_CENTER,
    className: 'toaster',
    hideProgressBar: true
});

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
        console.log(pitch, 'the pitches coming in')
        const url = "http://localhost:3000/pitches/create";

        const body = {
            pitch
        };

        // const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
            method: "POST",
            headers: {
                // "X-CSRF-Token": token,
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

    notify = () => toast("Wow so easy !");
    

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
            <CookiesProvider>
            <div className="color-legend-container">
                <div id="color-row">
                    <div id="legend" style={{ backgroundColor: 'lightgreen' }}> 
                    </div>
                    <p id="row-text">"Why don't you give it/ us a try?"</p>
                </div>
                <div id="color-row">
                    <div id="legend" style={{ backgroundColor: 'lightskyblue' }}> 
                    </div>
                    <p id="row-text">"What do you have to lose?"</p>
                </div>
                <div id="color-row">
                    <div id="legend" style={{ backgroundColor: 'violet' }}> 
                    </div>
                    <p id="row-text">"Ready to move forward? I can send over the contract right now."</p>
                </div>
                <div id="color-row">
                    <div id="legend" style={{ backgroundColor: 'lightsalmon' }}> 
                    </div>
                    <p id="row-text">"When can we begin [implementation, training, etc.]?"</p>
                </div>
                <div id="color-row">
                    <div id="legend" style={{ backgroundColor: 'rgb(255, 255, 156)' }}> 
                    </div>
                    <p id="row-text">"Come onnnnnnnnnnnnnn"</p>
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
            <ToastContainer />
            </CookiesProvider>
        </div>
    )
  }
}