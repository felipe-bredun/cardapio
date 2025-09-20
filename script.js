const menu = document.getElementById('menu');
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const cartCount = document.getElementById('cart-count');
const closeModalBtn = document.getElementById('close-modal-btn');
const addressInput = document.getElementById('address');
const addressWarn = document.getElementById('address-warn');


// Abrir modal do carrinho
cartBtn.addEventListener('click', function() {
    cartModal.style.display = 'flex';
});

// Fechar modal do carrinho quando clicar fora do conteúdo do modal
cartModal.addEventListener('click', function(event) {
    if(event.target === cartModal) {
        cartModal.style.display = 'none';
    }
})

// Fechar modal do carrinho quando clicar no botão "Fechar"
closeModalBtn.addEventListener('click', function() {
    cartModal.style.display = 'none';
});
