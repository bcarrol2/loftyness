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
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
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
                  options={options}
              />
          </div>
      </div>
  )
}