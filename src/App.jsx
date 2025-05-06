// todos los componentes se exportan

import CardContainer from './components/card-container/CardContainer';
import CardComponent from './components/card/CardComponent';

const App = () => {
	return (
		<CardContainer>
			<CardComponent
				// padding='card'
				bgStyle='sedans'
				buttonColor='first'
				// aqui voy a poner el color, ya que es un estilo especifico, los valores del card genericos, van en el global
				src='/assets/images/Group 2.svg'
				title='SEDANS'
				text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
			/>
			<CardComponent
				bgStyle='suvs'
				buttonColor='second'
				src='/assets/images/Group 3.svg'
				title='SUVs'
				text='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
			/>
			<CardComponent
				bgStyle='luxury'
				buttonColor='third'
				src='/assets/images/Group 4.svg'
				title='LUXURY'
				text='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. '
			/>
		</CardContainer>
	);
};

export default App;
