import '@/scss/index.scss';
import { initHeaderFixer } from '@/scripts/headerFixer';
import { initChoices } from '@/scripts/choices';
import { initCart } from '@/scripts/cart';
import { renderProducts } from './scripts/renderProducts';
import { store } from './scripts/Store';
import { fetchProducts } from './scripts/API';
import { initChoicesType } from './scripts/choicesType';

const init = () => {
  initHeaderFixer();
  initChoices();
  initChoicesType();
  initCart();
  fetchProducts({ type: 'bouquets' });
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

