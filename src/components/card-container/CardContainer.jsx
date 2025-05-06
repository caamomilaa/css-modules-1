const CardContainer = ({ children }) => {
	const containerStyles = `container`;
	return <section className={containerStyles}>{children}</section>;
};
export default CardContainer;
