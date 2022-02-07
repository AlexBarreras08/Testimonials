import React, { useState, useCallback } from 'react';
import { useTransition, animated, config } from 'react-spring';
import styled, { css } from 'styled-components';

const Container = styled.section`
  display: grid;
  grid-template-columns: 30px 1fr 30px;
  grid-template-rows: 1fr 1fr;
  height: 200px;
`;

const Blockquote = styled.blockquote`
  grid-row: 1;
  grid-column: 2 / 3;
`;

const Cite = styled.cite`
  grid-row: 2;
  grid-column: 2 / 3;
`;

const arrow = css`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const LeftArrow = styled.button`
  grid-row: span 2;
  grid-column: 1;
  ${arrow}
`;

const RightArrow = styled.button`
  grid-row: span 2;
  grid-column: 3;
  ${arrow}
`;

const quotes = [
  {
    key: 1,
    message:
      'Lorem ipsum dolor sit amet, id eam munere recteque, per at ridens dictas. Te graecis scripserit cotidieque sed, vel labore praesent maluisset eu, mel nostrud intellegebat at. Ad mel epicurei voluptaria interesset, natum persius voluptatibus et nec, pri ubique animal dignissim et. Quodsi accusam sea cu. Prima probatus mnesarchum has ne.',
    client: 'Person'
  },
  {
    key: 2,
    message:
      'Ei vim modo albucius voluptaria, an civibus oporteat sit, iriure animal te nam. Cu est esse inciderint. Nam eu regione philosophia definitiones, sonet noluisse cu pri. An aliquid mnesarchum sadipscing sed, vis oratio postulant ad. Everti propriae indoctum no qui.',
    client: 'People'
  },
  {
    key: 3,
    message:
      'No vim reque probatus. Et wisi suscipit luptatum has. Ut duo facete docendi commune. Tale animal complectitur pro et, an natum idque vel.',
    client: 'Nosrep'
  }
];

const SpringTestimonials = () => {
  const length = quotes.length;
  const [index, set] = useState(0);
  const transitions = useTransition(quotes[index], item => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  });

  const nextQuote = useCallback(() => set(state => (state + 1) % length), []);
  const previousQuote = useCallback(
    () => set(state => (state - 1 + length) % length),
    []
  );

  return transitions.map(({ item, props, key }) => (
    <Container>
      <LeftArrow onClick={previousQuote}>{'<'}</LeftArrow>
      <animated.div key={key} style={props}>
        <Blockquote>{item.message}</Blockquote>
        <Cite>{item.client}</Cite>
      </animated.div>
      <RightArrow onClick={nextQuote}>{'>'}</RightArrow>
    </Container>
  ));
};

export default SpringTestimonials;
