const currencyFormat = (number = 0) => {
	
	const options = { style: 'currency', currency: 'USD' };

    const result = new Intl.NumberFormat('en-US', options).format(number);

	return result;
};

export default currencyFormat;