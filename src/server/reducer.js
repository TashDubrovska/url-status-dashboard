const core = require('./core')

module.exports = function(state, action){
    switch(action.type){
        case 'SET_URLS':
            return core.setUrls(state, action.urls);
        case 'ADD_URL':
            return core.addUrl(state, action.url)
        case 'REMOVE_URL':
            return core.removeUrl(state, action.url)
         case 'UPDATE_STATUS':
            return core.updateStatus(state, action.url, action.status)
    }
    return state;
}