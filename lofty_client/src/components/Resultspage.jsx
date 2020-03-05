import React from 'react';
import Select from 'react-select';
import { Chart } from 'react-charts'

export function Resultspage() {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
      },
      {
        label: 'Series 2',
        data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
      },
      {
        label: 'Series 3',
        data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
      }
    ],
    []
  )

    const options = [
        { value: '1', label: "Why don't you give it/ us a try?" },
        { value: '2', label: "What do you have to lose?" },
        { value: '3', label: "Ready to move forward? I can send over the contract right now." },
        { value: '4', label: "When can we begin [implementation, training, etc.]?" },
        { value: '5', label: "Come onnnnnnnnnnnnnn" },
    ];

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  return (
      <div>
          <div className="results-graph-container" style={{ marginTop: '20px' }}>
              <Chart data={data} axes={axes} />
          </div>
          <div className="select-form-container" style={{marginTop: '20px'}}>
              <Select
                  placeholder="What closing pitch did you use?"
                  options={options}
              />
          </div>
      </div>
  )
}