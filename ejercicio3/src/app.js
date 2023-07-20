const express = require("express");
const ProductManager = require('./productManager');

const pM = new ProductManager;

const arrayProducts = async () => {  
  try {
    const products = await pM.getProducts();
    products.splice(0, 1);
    return products;
    
  } catch (error) {
    console.log(error);
  }
}

const port = 8080;

const app = express();

 app.get("/products", async (req, res) => {
  try {
    const products = await arrayProducts();
    const { limit } = req.query;
    const productFilter = products.slice(0, limit || 10);
    res.json({ message: productFilter });
    
  } catch (error) {
    console.log(error);
  }
});

app.get( '/products/:id', async ( req, res ) => {
  try {
    const products = await arrayProducts();
    const { id } = req.params;
    const product = products.find(p => p.id === Number(id));
    if(product) {
      return res.json({ message: product });
    }
    res.json({ message: 'El producto no existe.'})
    
  } catch (error) {
    console.log(error);
  }
})

app.listen( port, () => {
  console.log( `Server running at port ${port}` )
});
