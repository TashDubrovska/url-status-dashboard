const server = require('socket.io');
const makeStore = require('./store');

let store = makeStore();
let io = new server().attach(8090);

store.subscribe(
    () => io.emit('state', store.getState().toJS())
);

io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));
});
