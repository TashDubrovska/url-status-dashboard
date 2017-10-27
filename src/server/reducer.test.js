const {List} = require('immutable');
const reducer = require('./reducer');

describe ('Reducer', () => {
    it('has an initial state', () => {
        let action  = {type: 'ADD_URL', url: '/test'};
        let nextState = reducer(undefined, action);

        expect(nextState).toEqual(List.of({
            url: '/test',
            status: 'updating'

        }))
    });

    it('handles SET_URLS', () => {
        let initialState = new List();
        let action = {type: 'SET_URLS', urls: ['/test1','/test2']};

        let nextState = reducer(initialState, action);

        expect(nextState).toEqual(List.of({
            url: '/test1',
            status: 'updating'
        },
        {
            url: '/test2',
            status: 'updating'
        }))
    });

    it('handles ADD_URL', () =>{
        let initialState = List.of({
            url: '/test',
            status: 'updating'
        });
        let action  = {type: 'ADD_URL', url: '/test1'};
        let nextState = reducer(initialState, action);

        expect(nextState).toEqual(List.of({
            url: '/test',
            status: 'updating'

        }, {
            url: '/test1',
            status: 'updating'
       }))
    });

    it('handles REMOVE_URL', () => {
        let initialState = List.of({
            url: '/test',
            status: 'updating'
        });

        let action = {type: 'REMOVE_URL', url: '/test'};
        let nextState = reducer(initialState, action);

        expect(nextState.size).toBe(0);
    });


    it('handles UPDATE_STATUS', () => {
        let initialState = List.of({
            url: '/test',
            status: 'updating'
        });

        let action = {type: 'UPDATE_STATUS', url: '/test', status: 'available' }
        let nextState = reducer(initialState, action)

        expect(nextState).toEqual(List.of({
            url: '/test',
            status: 'available'
        }))

    })
});
