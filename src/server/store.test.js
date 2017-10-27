const {List, fromJS} = require('immutable');
const makeStore = require('./store');

describe('Store', () => {
    it('is a Redux store configured with correct reducer', () => {
        let store = makeStore();

        expect(store.getState()).toEqual(List ());

        store.dispatch({
            type: 'ADD_URL',
            url: '/test'
        });

        expect(store.getState()).toEqual(List.of(
            {
                url: '/test',
                status: 'updating'
            }
        ))
    })
});
