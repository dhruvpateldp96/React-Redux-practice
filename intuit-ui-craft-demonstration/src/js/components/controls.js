import React from 'react';

class Controls extends React.Component {
    constructor() {
        super();
        this.state = {
            address: ''
        };
    }

    // Handle input changed
    handleChange(e) {
        this.setState({ address: e.target.value });
    }

    changeLocation(e) {
        e.preventDefault();
        if(this.state.address) {
            this.props.changeLocation(this.state.address);
        }
    }

    render() {
        return <div className='row'>
            <form className='col-xs-12' onSubmit={this.changeLocation.bind(this)}>
                <input value={this.state.address} onChange={this.handleChange.bind(this)} />
                <button type='submit'>Change Location</button>
            </form>
            <div className='col-xs-12'>
                <button type='button' onClick={this.props.refresh}>Refresh</button>

            </div>
        </div>;
    }
}

export default Controls;
