import React from 'react';
import UrlStatusList from './components/url-status-list.jsx';
import AddUrlOverlay from './components/add-url-overlay.jsx';

export default class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            urls: this.props.urls,
            isOverlayOpen: false
        }

        this.openOverlay = this.openOverlay.bind(this);
    };

    openOverlay() {
        this.setState({
            urls: this.state.urls,
            isOverlayOpen: true
        });
    };

    render(){
        return (
            <main>
                <h1>Status checker</h1>
                <button onClick={this.openOverlay}>Add url</button>
                <AddUrlOverlay showOverlay={this.state.isOverlayOpen} />
                <UrlStatusList urls={this.state.urls} />
            </main>
        );
    };
}
