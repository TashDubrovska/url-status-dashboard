const {List, Map} = require('immutable');
const {setUrls, addUrl, removeUrl} = require('./core');

describe ('Application logic', () => {
    it('should set URLs', () => {
        let url = {
            ulr: '/index',
            isUp: true
        };

        let state = List();
        let entries = List.of(url);
        let nextState = setUrls(state, entries);

        expect(nextState).toEqual(List.of(url));
    });

    it('should add a new URL', () => {
        let initialUrl = {
            url: '/test',
            isUp: false
        }
        let url = {
            url: '/index',
            isUp: true
        };

        let state = List.of(initialUrl);
        let nextState = addUrl(state, url);

        expect(nextState).toEqual(List.of(initialUrl, url));
    });

    it('should not add duplicate URLs', () => {
        let url = {
            url: '/index',
            isUp: true
        };

        let state = List.of(url);
        let nextState = addUrl(state, url);

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
});
