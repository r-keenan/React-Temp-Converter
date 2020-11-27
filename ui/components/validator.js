import React from 'react';

export default class Validator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: [
                {
                    value: 'rankine', text: 'Rankine'
                },
                {
                    value: 'celsius', text: 'Celsius'
                },
                {
                    value: 'fahrenheit', text: 'Fahrenheit'
                },
                {
                    value: 'liters', text: 'Liters'
                },
                {
                    value: 'tablespoons', text: 'Tablespoons'
                },
                {
                    value: 'cubic-inches', text: 'Cubic Inches'
                },
                {
                    value: 'cups', text: 'Cups'
                },
                {
                    value: 'cubic-feet', text: 'Cubic Feet'
                },
                {
                    value: 'gallons', text: 'Gallons'
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="numericalValue">Input Numerical Value</label>
                    <input className="form-control"
                        type="text"
                        id="numericalValue"
                    />
                    <label htmlFor="unitOfMeasure">Input Unit of Measure</label>
                    <select
                        className="form-control"
                        defaultValue="default">
                        {/*the disabled below is to stop it from being selected when selecting from the dropdown*/}
                        <option value="default" disabled>Please select</option>
                        {this.state.options.map((option, key) => {
                            return <option value={option.value} key={key}>{option.text}</option>
                        })}
                    </select>
                </form>
            </div>
        )
    }
}