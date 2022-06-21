import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Details';
import store from './redux/configureStore';

const MockFooter = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  </Provider>
);

describe('Test the footer component', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<MockFooter />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders footer', () => {
    render(<MockFooter />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  test('renders link', () => {
    render(<MockFooter />);
    const linkElement = screen.getByRole('link', {
      name: /mavericks\-db/i,
    });
    expect(linkElement).toBeInTheDocument();
  });
});
