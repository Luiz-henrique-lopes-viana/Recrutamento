describe('API GET Request', () => {
  it('Deve encontrar os dados do produto com sucesso', () => {
	cy.request({
	  url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/13',
	  failOnStatusCode: false
	}).then((response) => {
	  expect(response.status).to.eq(200);
	  expect(response.body).to.be.an('object');
	  expect(response.body).to.have.property('productId', 13);
	  expect(response.body).to.have.property('productName', 'Bose SoundLink Around-ear Wireless Headphones II');
	  expect(response.body).to.have.property('price', 279.95);
	  expect(response.body).to.have.property('description', 'Wireless freedom meets best-in-class sound.');
	  expect(response.body).to.have.property('imageUrl', '2300');
	  expect(response.body).to.have.property('attributes').that.is.an('array');
	  expect(response.body).to.have.property('colors').that.is.an('array');
	  expect(response.body).to.have.property('images').that.is.an('array');
	  expect(response.body).to.have.property('productStatus', 'OutOfStock');
	});
  });
});
