import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search');
  const productCards = document.querySelectorAll('.product-card');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  searchInput.addEventListener('input', (e) => {
    const searchQuery = e.target.value.toLowerCase().trim();

    productCards.forEach(card => {
      const productName = card.getAttribute('data-name').toLowerCase();

      if (productName.includes(searchQuery)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });

  addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const btn = e.target;

      if (btn.classList.contains('in-cart')) {
        btn.classList.remove('in-cart');
        btn.textContent = 'Добавить в корзину';
      } else {
        btn.classList.add('in-cart');
        btn.textContent = 'В корзине';
      }
    });
  });
});
