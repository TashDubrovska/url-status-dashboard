const {List} = require('immutable');
const {setUrls, addUrl, removeUrl, updateStatus} = require('./core');

describe ('Application logic', () => {
    it('should set URLs', () => {
        let url = {
            url: '/index',
            status: 'updating'
        };

        let state = new List();
        let entries = ['/index'];
        let nextState = setUrls(state, entries);

        expect(nextState).toEqual(List.of(url));
    });

    it('should add a new URL', () => {
        let initialUrl = {
            url: '/test',
            status: 'unavailable'
        }

        let state = List.of(initialUrl);
        let nextState = addUrl(state, '/index');

        expect(nextState).toEqual(List.of(initialUrl, {
            url: '/index',
            status: 'updating'
        }));
    });

    it('should not add duplicate URLs', () => {
        let url = {
            url: '/index',
            isUp: true
        };

        let state = List.of(url);
        let nextState = addUrl(state, '/index');

        expect(nextState).toEqual(state);
    });

    it('should remove a URL', () => {
        let state = List.of({
            url: '/test',
            isUp: false
        },
        {
            url: '/index',
            isUp: true
        });

        let nextState = removeUrl(state, '/test');

        expect(nextState).toEqual(List.of({
            url: '/index',
            isUp: true
        }))
    });

    it('should update status of a given URL', () => {
        let state = List.of({
            url: '/index',
            status: 'available'
        });

        let nextState = updateStatus(state, '/index', 'updating');

        expect(nextState).toEqual(List.of({
            url: '/index',
            status: 'updating'
        }))
    });
});
