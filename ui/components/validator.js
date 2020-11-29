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
            targetUnitOfMeasure: "",
            studentResponse: 0
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
        this.validate = this.validate.bind(this);
        this.grade = this.grade.bind(this);
    }

    numericalValueChange(e) {
        if (!e.target.value) {
            this.setState({numericalValue: 0});
            return;
        }

        this.setState({
            numericalValue: parseFloat(e.target.value).toFixed(2)
        });
        this.validate();
    }

    studentResponseChange(e){
        this.setState({studentResponse : parseFloat(e.target.value).toFixed(2)});
        this.validate();
    }
    unitOfMeasureChange(e){
        {/* this.buildOptionsList is the callback function that will be called when the unitOfMeasure is changed*/}
        this.setState({ unitBeingMeasured : e.target.value}, this.buildOptionsList);
        this.validate();
    }
    targetUnitOfMeasureChange(e){
        this.setState({targetUnitOfMeasureChange : e.target.value}, this.buildOptionsList);
        this.validate();
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

    validate() {
        /*This implies that these statement are all true*/{
        if(this.state.unitBeingMeasured && this.state.targetUnitOfMeasure && this.state.studentResponse && this.state.numericalValue){
            this.setState({showGrade: true});
            this.grade();
        }
        else {
            this.setState({ showGrade: false});
        }
    }
}

    grade() {
        let value;

        switch(this.state.unitBeingMeasured){
            case "fahrenheit":
                value = parseFloat(this.convertFahrenheit(this.state.numericalValue, this.state.targetUnitOfMeasure)).toFixed(2);
                break;
            case "celsius":
                value = parseFloat(this.convertCelsius(this.state.numericalValue, this.state.targetUnitOfMeasure)).toFixed(2);
                break;
            case "kelvin":
                value = this.convertKelvin(this.state.numericalValue, this.state.targetUnitOfMeasure).toFixed(2);
                break;
            case "rankine":
                value = this.convertRankine(this.state.numericalValue, this.state.targetUnitOfMeasure).toFixed(2);
                break;
            case "liters":
                value = this.convertLiters(this.state.numericalValue, this.state.targetUnitOfMeasure).toFixed(2);
                break;
            case "tablespoons":
                value = this.convertTablespoons(this.state.numericalValue, this.state.targetUnitOfMeasure).toFixed(2);
                break;
            case "cups":
                value = this.convertCups(this.state.numericalValue, this.state.targetUnitOfMeasure).toFixed(2);
                break;
            case "cubic-inches":
                value = this.convertCubicInches(this.state.numericalValue, this.state.targetUnitOfMeasure).toFixed(2);
                break;
            case "cubic-feet":
                value = this.convertCubicFeet(this.state.numericalValue, this.state.targetUnitOfMeasure).toFixed(2);
                break;
            case "gallons":
                value = this.convertCubicFeet(this.state.numericalValue, this.state.targetUnitOfMeasure).toFixed(2);
                break;
        }
        if (value === this.state.studentResponse) {
            this.setState({valid: true, showGrade: true});
        } else {
            this.setState({valid: false, showGrade: true});
        }
    }

    convertFahrenheit(input, output) {
        switch(output) {
            case "rankine":
                return parseFloat((input * 1.0) - 459.67).toFixed(2);
            case "kelvin":
                return parseFloat(((input - 32) / 1.8) + 273.15).toFixed(2);
            case "celsius":
                return parseFloat((input - 32) / 1.8).toFixed(2);
            default:
                return;
        }
    }

    convertCelsius(input, output) {
        switch(output) {
            case "rankine":
                return parseFloat((input * 9/5) + 491.67).toFixed(2);
            case "kelvin":
                return parseFloat(input + 273.15).toFixed(2);
            case "fahrenheit":
                return parseFloat((input * 1.8) + 32).toFixed(2);
            default:
                return;
        }
    }

    convertKelvin(input, output){
        switch(output) {
            case "rankine":
                return parseFloat((input * 1.8)).toFixed(2);
            case "fahrenheit":
                return parseFloat(((input * 273.15) * 9/5) + 32).toFixed(2);
            case "celsius":
                return parseFloat((input - 273.15)).toFixed(2);
            default:
                return;
        }
    }

    convertRankine(input, output){
        switch(output) {
            case "fahrenheit":
                return parseFloat((input - 459.67)).toFixed(2);
            case "kelvin":
                return parseFloat(input * 5/9).toFixed(2);
            case "celsius":
                return parseFloat((input - 491.67) * 5/9).toFixed(2);
            default:
                return;
        }
    }

    convertLiters(input, output){
        switch(output) {
            case "tablespoons":
                return parseFloat(input * 67.628).toFixed(2);
            case "cubic-inches":
                return parseFloat(input * 61.024).toFixed(2);
            case "cups":
                return parseFloat(input * 4.227).toFixed(2);
            case "cubic-feet":
                return parseFloat(input / 28.317).toFixed(2);
            case "gallons":
                return parseFloat(input / 3.785).toFixed(2);
            default:
                return;
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
                        onBlur={this.numericalValueChange}
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
                        {this.state.optionsTarget.map((option, key) => {
                            {/*This is used to capitalize the first letter. similiar to Title() for Python, but it only works on first word. 
                            charAt(0).toUpperCase() + option.slice(1) */}
                            return <option value={option} key={key}>{option.charAt(0).toUpperCase() + option.slice(1)}</option>
                        })}
                    </select>

                    <label htmlFor="studentResponse">Student Response</label>
                    <input 
                        className="form-control" 
                        onChange={this.studentResponseChange}
                        onBlur={this.studentResponseChange}
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