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

let cart = [];

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

//Coletar informações do botão de adicionar ao carrinho
menu.addEventListener("click", function(event) {
    //console.log(event.target);
    let parentButton = event.target.closest(".add-to-cart-btn");

    if(parentButton) {
        const name = parentButton.getAttribute("data-name");
        const price = parseFloat(parentButton.getAttribute("data-price"));

        addToCart(name, price);

    }
});

//Funçao para adicionar ao carrinho
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);

    if(existingItem) {
        //Se o item já existe, apenas incrementa a quantidade
        existingItem.quantity += 1;
    }
    else {
        cart.push({
            name,
            price,
            quantity: 1
        });
    }

    

    updateCartModal();

}

//atualizar o carrinho
function updateCartModal() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.classList.add('flex', 'justify-between', 'items-center', 'mb-2');
        itemElement.innerHTML = `
            <p>${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantity}</p>
            <button class="bg-red-500 text-black px-2 py-1 rounded remove-cart-item" data-index="${index}">
                Remover
            </button>
        `;
        cartItemsContainer.appendChild(itemElement);
        total += item.price * item.quantity;
    });

    cartTotal.innerText = `Total: R$ ${total.toFixed(2)}`;
    cartCount.innerText = cart.length;

    // Adiciona evento para remover item
    document.querySelectorAll('.remove-cart-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = parseInt(this.getAttribute('data-index'));
            cart.splice(idx, 1);
            updateCartModal();
        });
    });
}