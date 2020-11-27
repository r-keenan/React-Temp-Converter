import React from 'react';
import Nav from '../components/nav';
import Validator from '../components/validator';


export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h1 className="mt-5">Temperature Converter</h1>
                            <Validator />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}