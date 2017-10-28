import React from 'react';
import {shallow} from 'enzyme';
import UrlStatusList from './url-status-list';

describe('Url status list', () => {
    it('should be not rendered if no urls are passed in', () => {
        const urlList = shallow(<UrlStatusList urls={[]} />);

        expect(urlList.is('.url-list')).toEqual(false);
    });

    it('should render a url if only one is passed in', () => {
        const urlList = shallow(<UrlStatusList urls={[{
            url: '/test',
            status: 'updating'
        }]} />);

        expect(urlList.find('li')).toHaveLength(1);
    });

    it('should render urls if multiple are passed in', () => {
        const urlList = shallow(<UrlStatusList urls={[{
            url: '/test',
            status: 'updating'
        }, {
            url: '/test1',
            status: 'updating'
        }]} />);

        expect(urlList.find('li')).toHaveLength(2);
    });
});
