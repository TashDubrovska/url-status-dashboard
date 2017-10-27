import React from 'react';
import {shallow} from 'enzyme';
import AddUrlOverlay from './add-url-overlay';

describe('Add url overlay', () => {
    it('should be opened if corresponding property is passed true', () => {
        const overlay = shallow(<AddUrlOverlay showOverlay={true} />);

        expect(overlay.find('.overlay').hasClass('visible')).toEqual(true);
    });

    it('should be closed if corresponding property is passed as false', () => {
        const overlay = shallow(<AddUrlOverlay showOverlay={false} />);
        
        expect(overlay.find('.overlay').hasClass('visible')).toEqual(false);
    });

    it('should close overlay when close button is pressed', () => {
        let overlay = shallow(<AddUrlOverlay showOverlay={true} />);

        overlay.find('.close').simulate('click');
        expect(overlay.find('.overlay').hasClass('visible')).toEqual(false);
    });
});
