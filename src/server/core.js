const {List} = require('immutable');

function setUrls(state, urls){
    return state.concat(urls);
}

function addUrl(state, url){
    if (state.findIndex(i => i.url == url.url) > -1){
        return state;
    }
    return state.push(url);
}

function removeUrl(state, url){
    let indexOfRemoval = state.findIndex(i => i.url == url);
    return state.delete(indexOfRemoval);
}

module.exports = {
    setUrls,
    addUrl,
    removeUrl
}
