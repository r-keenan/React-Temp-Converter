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
            numericalValue: 0,
            showGrade: false,
            valid : false,
            unitBeingMeasured: "",
            targetUnitOfMeasure: ""
        };
        this.temps = [
            'rankine',
            'celsius',
            'fahrenheit',
            'kelvin'
        ]

        this.volumes = [
            'liters',
            'tablespoons',
            'cubic-inches',
            'cups',
            'cubic-feet',
            'gallons'
        ]
        //This binds the function to the state and key values. It causes the numericalValueChange 
        this.numericalValueChange = this.numericalValueChange.bind(this);
        this.studentResponseChange = this.studentResponseChange.bind(this);
        this.unitOfMeasureChange = this.unitOfMeasureChange.bind(this);
        this.targetUnitOfMeasureChange = this.targetUnitOfMeasureChange.bind(this);
        this.buildOptionsList = this.buildOptionsList.bind(this);
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
        {/* this.buildOptionsList is the callback function that will be called when the unitOfMeasure is changed*/}
        this.setState({ unitBeingMeasured : e.target.value}, this.buildOptionsList);
    }
    targetUnitOfMeasureChange(e){
        this.setState({targetUnitOfMeasureChange : e.target.value}, this.buildOptionsList);
    }

    buildOptionsList() {
        switch(this.state.unitBeingMeasured) {
            case "fahrenheit":
            case "celsius":
            case "kelvin":
            case "rankine":
                this.setState({
                    optionsTarget: this.temps.filter(e => e !== this.state.unitBeingMeasured)
                });
                break;
            {/*The logic for the default below is that if we are not filtering for temps, then we are filtering for volumes. */}
            default:
                this.setState ({
                    optionsTarget: this.volumes.filter(e => e !== this.state.unitBeingMeasured)
                });
        }
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
                    <select 
                        className="form-control" 
                        defaultValue="default"
                        onChange={this.targetUnitOfMeasureChange}
                    >
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
                    
                    <hr/>

                    {/*You have to use turnaries instead of if/else statements in JSX.*/}
                    {this.state.showGrade ? this.state.valid ? <h2 className="correct">Correct!</h2> : <h2 className='incorrect'>Incorrect</h2> : ""}

            </div>
        )
    }
}