import React from 'react';
import styled, { css } from 'styled-components';
import posed, { PoseGroup } from 'react-pose';

const AnimatedContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 150
  },
  exit: {
    opacity: 0
  }
});

const QuoteContainer = styled(AnimatedContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 35em;
`;

const Container = styled.section`
  display: grid;
  grid-template-columns: 30px 1fr 30px;
  height: 100%;
  justify-items: center;
  box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.2);
  border-radius: 4px;
`;

const Blockquote = styled.blockquote`
  line-height: 1.5em;
  font-style: italic;
`;

const Cite = styled.cite`
  color: gray;
  align-self: flex-end;
  font-style: normal;
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

class Testimonials extends React.Component {
  state = {
    quotes: [
      {
        message:
          'Soy de fuera y confío mucho en su servicio y su atención oportuna son una empresa bastante confiable y con un fuerte compromiso con sus clientes',
        client: 'Carlos'
      },
      {
        message:
          'Muy buen servicio, se adaptan rápido a tus necesidades y son muy amables y rápidos para responder. Del 1 al 10 un 11 y además de todo eso muy bonito el arreglo. Nos encanto la verdad muy recomendado',
        client: 'Delia'
      },
      {
        message:
          'Excelente trato y servicio. Todo en tiempo y forma. Totalmente recomendados',
        client: 'Lore'
      },

      {
        message:
          'Agradezco de todo corazón la paciencia que tuvieron al ayudarme y responder cada pregunta, volvería a comprar en definitiva sin dudarlo, muchas gracias',
        client: 'Flor'
      },

      {
        message:
          'Muy fácil la realización de compra, muy atentos muchas gracias por el servicio 100% recomendado desde Tijuana, Baja California',
        client: 'Daniel'
      },

      {
        message:
          'Las flores están hermosas y me encantó que avisaran por SMS cuando estaban por entregarlo. Sin duda volveré a pedir flores con ustedes. LOS MEJORES DE CD. OBREGÓN',
        client: 'Raul'
      },

      {
        message:
          'Poder enviar flores desde Estados Unidos a México así de fácil fue padrísimo!!! Muchas gracias',
        client: 'Karen'
      }
    ],
    currentIndex: 0
  };

  previousQuote = () =>
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % prevState.quotes.length
    }));

  nextQuote = () =>
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + prevState.quotes.length) %
        prevState.quotes.length
    }));

  componentDidMount() {
    this.interval = setInterval(() => {
      this.nextQuote();
    }, 8000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { quotes, currentIndex } = this.state;
    const currentQuote = quotes[currentIndex];

    return (
      <Container>
        <LeftArrow onClick={this.previousQuote}>{'<'}</LeftArrow>
        <PoseGroup>
          <QuoteContainer key={currentQuote.client}>
            <Blockquote>{currentQuote.message}</Blockquote>
            <Cite>- {currentQuote.client}</Cite>
          </QuoteContainer>
        </PoseGroup>
        <RightArrow onClick={this.nextQuote}>{'>'}</RightArrow>
      </Container>
    );
  }
}

export default Testimonials;
