import React from 'react';
import classNames from 'classnames';

export default class AddUrlOverlay extends React.Component {
    constructor(props){
        super(props);

        this.computeClasses = this.computeClasses.bind(this);
        this.closeOverlay = this.closeOverlay.bind(this);
        
        this.state = {
            overlayClasses: this.computeClasses(this.props.showOverlay) 
        };
    }

    computeClasses(isVisible) {
        return classNames({
            'overlay': true,
            'visible': isVisible
        });
    }

    closeOverlay() {
        this.setState(prevState => ({
            overlayClasses: this.computeClasses(false)
        }));
    }

    render() {
        return (
            <div className={this.state.overlayClasses}>
                <button className='close' onClick={this.closeOverlay}>Close</button>
                <label for='url'>URL</label>
                <input type='text' id='url' name='url' />
                <button>Add</button>
            </div>
        )
    }
}
