import { fetchProducts } from "./API";
import { callbackWithPreload } from "./preload";

export const initSearchProducts = () => {
    const headerForm = document.querySelector('.header__form');
    const goodsSection = document.querySelector('.goods');
    const goodTitle = document.querySelector('.goods__title');    

    headerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(headerForm);

        const searchQuery = formData.get('search').trim();

        if (searchQuery) {
            goodTitle.textContent = `Результат поиска "${searchQuery}"`;
            // fetchProducts({ search: searchQuery });
            callbackWithPreload(goodsSection, fetchProducts, { search: searchQuery });
        }
    });
}