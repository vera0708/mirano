import { fetchProducts } from "./API"
import { ProductCard } from "./ProductCart";

export const renderProducts = async () => {
    const goodsList = document.querySelector('.goods__list');
    const products = await fetchProducts();
    // console.log('data: ', products);
    goodsList.innerHTML = '';
    products.forEach(product => {
        const productCard = ProductCard(product);
        goodsList.append(productCard);
    });
};