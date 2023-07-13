class ProductManager {
    #products = [];
    #idProduct = 0;
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock){
        if(!title || !description || !price || !thumbnail || !code || !stock) {
            console.log('Todos los campos son obligatorios');
            return;
        };

        if(this.#products.find(p => p.code === code)) {
            console.log('El código ingresado ya existe.');
            return;
        }

        const product = {
            id: ++this.#idProduct,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        this.#products.push(product);
    }

    getProducts() {
        console.log(this.#products);
    }

    getProductById(id) {
        const product = this.#products.find(p => p.id === id);
        if(product) {
            console.log('Producto encontrado: ', product);
        } else {
            console.log(`El producto con id ${id} no ha sido encontrado.`);
        }
    }
}

const productManager = new ProductManager();


console.log('================================');
console.log(productManager.getProducts());
console.log('================================');
productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
console.log(productManager.getProducts());
console.log('================================');
productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
console.log('================================');
productManager.getProductById(1);
console.log('================================');
productManager.getProductById(20);
console.log('================================');


