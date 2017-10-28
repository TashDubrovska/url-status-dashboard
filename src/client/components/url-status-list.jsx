import React from 'react';

export default class UrlStatusList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            urls: this.props.urls
        }
    }

    render() {
        let urls = this.state.urls.slice();
        const listItems = urls.map((url) => 
            <li>
                URL: {url.url}
                Status: {url.status}
            </li>
        );

        return listItems.length > 0 ? <ul classNames='url-list'>{listItems}</ul> : '';
    }
} 


