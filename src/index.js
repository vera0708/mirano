import '@/scss/index.scss';
import { initHeaderFixer } from '@/scripts/headerFixer';
import { initChoices } from '@/scripts/choices';
import { initCart } from '@/scripts/cart';
import { renderProducts } from './scripts/renderProducts';
import { store } from './scripts/Store';
import { fetchProducts } from './scripts/API';
import { initChoicesType } from './scripts/choicesType';
import { filterProducts } from './scripts/filterProducts';

const init = () => {
  initHeaderFixer();
  initChoices();
  initChoicesType();
  initCart();
  filterProducts();
  // fetchProducts();
 /* fetchProducts({ type: 'bouquets', maxPrice: 13500 });
  setTimeout(() => {
    fetchProducts({ type: 'toys' });
  }, 4000);
  setTimeout(() => {
    fetchProducts({ type: 'postcards' });
  }, 8000);*/
  renderProducts();
};

// init();
document.addEventListener('DOMContentLoaded', init);

