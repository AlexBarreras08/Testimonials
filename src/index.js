import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Testimonials from './Testimonials';
import SpringTestimonials from './SpringTestimonials';

const Container = styled.main`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
`;

function App() {
  return (
    <Container>
      <Testimonials />
    </Container>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
