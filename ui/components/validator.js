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
            ],
            optionsTarget: [],
            numericalValue: 0
        };
        //This binds the function to the state and key values. It causes the numericalValueChange 
        this.numericalValueChange = this.numericalValueChange.bind(this);
        this.studentResponseChange = this.studentResponseChange.bind(this);
        this.unitOfMeasureChange = this.unitOfMeasureChange.bind(this);
    }

    numericalValueChange(e) {
        if (!e.target.value) {
            this.setState({numericalValue: 0});
            return;
        }

        this.setState({
            numericalValue: parseFloat(e.target.value).toFixed(2)
        })
    }

    studentResponseChange(e){
        alert(e.target.value)
    }
    unitOfMeasureChange(e){
        alert(e.target.value)
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="numericalValue">Input Numerical Value</label>
                    <input className="form-control"
                        type="text"
                        id="numericalValue"
                        onChange={this.numericalValueChange}
                    />
                    <label htmlFor="unitOfMeasure">Input Unit of Measure</label>
                    <select
                        className="form-control"
                        defaultValue="default"
                        onChange={this.unitOfMeasureChange}
                        >
                        {/*the disabled below is to stop it from being selected when selecting from the dropdown*/}
                        <option value="default" disabled>Please Select</option>
                        {this.state.options.map((option, key) => {
                            return <option value={option.value} key={key}>{option.text}</option>
                        })}
                    </select>

                    <label htmlFor="targetOfMeasure">Target Unit of Measure</label>
                    <select className="form-control" defaultValue="default">
                        <option value="default">Please Select</option>
                    </select>

                    <label htmlFor="studentResponse">Student Response</label>
                    <input 
                        className="form-control" 
                        onChange={this.studentResponseChange}
                        type="text"
                        id="studentResponse"
                    />


                </form>
            </div>
        )
    }
}