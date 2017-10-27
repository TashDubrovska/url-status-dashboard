import enzyme from 'enzyme';
import Adapter from'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};
