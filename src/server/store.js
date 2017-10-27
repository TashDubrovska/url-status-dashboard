const {createStore} = require('redux');
const reducer = require('./reducer');

module.exports = function(){
    return createStore(reducer);
}
