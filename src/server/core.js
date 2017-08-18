const {List} = require('immutable');
const request = require('request-promise');

function setUrls(state, urls){
    for(let i = 0; i < urls.length; i++){
        state = state.push({
            url: urls[i],
            status: 'updating'
        });
    };
    
    return state;
}

function addUrl(state, url){
    if (state.findIndex(i => i.url == url) > -1){
        return state;
    }
    return state.push({
        url,
        status: 'updating'
    });
}

function removeUrl(state, url){
    let indexOfRemoval = state.findIndex(i => i.url == url);
    return state.delete(indexOfRemoval);
}

function updateStatus(state, url, status){
    let indexOfUrl = state.findIndex(i => i.url == url);
    return state.update(indexOfUrl, page => ({
        url: page.url,
        status: status
    }));
}

module.exports = {
    setUrls,
    addUrl,
    removeUrl,
    updateStatus
}
