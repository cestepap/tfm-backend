import Product from '../models/Product';

export const createProduct = async (req, res) => {
    const {name, category, price, imgURL} = req.body;
    const newProduct = new Product( {name, category, price, imgURL});
    const productSaved = await newProduct.save();

    //codigos de estado. estado 201 nuevo recurso se ha creado
    res.status(201).json(productSaved);
};

export const getProducts = async (req, res) => {
	const products = await Product.find()
    res.json(products);

};

export const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.productId);
    res.status(200).json(product);  
};

export const updateProductById = async (req, res) => {

    // el new: true es para que el findByIdAndUpdate devuelva el objeto con los datos ya actualizados
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
        new: true
    })
    console.log(req.body);
    console.log('');
    console.log(updatedProduct);
    res.status(200).json(updatedProduct);
};

export const deleteProductById = async (req, res) => {
    const {productId} = req.params;
    const deletedProduct = await Product.findByIdAndDelete(productId)
    console.log(deletedProduct);
    res.status(204).json(deletedProduct)
};
