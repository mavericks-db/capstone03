import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import store from './redux/configureStore';

const MockHeader = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </Provider>
);

describe('Test the Header component', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<MockHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
