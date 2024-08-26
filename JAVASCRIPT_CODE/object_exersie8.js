const AmazonProducts = {
	product1: {
		name: 'basketball',
		price: 2095
	},
	product2: {
		name: 'football',
		price: 4000
	}
};

console.log(AmazonProducts.product1);

AmazonProducts.product1.price = 5000;

console.log(AmazonProducts.product1);

AmazonProducts.product1['delivery-time'] = '3 days';

console.log(AmazonProducts.product1);

function comparPrice(product1, product2) {
	if (product1.price < product2.price)
	{
		return (product1.name);
	} else if (product1.price === product2.price) {
		return (`${product1.name} is and ${product2.name} has thesame prices`);
	}
	return (product2.name);
}

const values = comparPrice(AmazonProducts.product1, AmazonProducts.product2);

console.log(values);
