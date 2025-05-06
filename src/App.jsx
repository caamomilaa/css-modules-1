// todos los componentes se exportan

import CardContainer from "./components/card-container/CardContainer";
import CardComponent from "./components/card/CardComponent";

const App = () => {
	return (<>
	<CardContainer>
		<CardComponent title='Sedans' text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'/>
		<CardComponent title='SUVs' text='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'/>
		<CardComponent title='Luxury' text='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. '/>
	</CardContainer>
	</>)
};

export default App;
