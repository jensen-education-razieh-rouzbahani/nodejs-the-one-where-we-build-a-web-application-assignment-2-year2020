//  variables

const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cart = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
// const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const displayProducts = document.querySelector('.display-products');
const baseURLProducts = 'http://localhost:8000/api/products';
const baseURLShoppingcart = 'http://localhost:8000/api/shoppingcart';
let postData;


// getting the products

const get = () => {
    fetch(baseURLProducts, { method: 'GET' })
    .then((response) => {
        return response.json();
    }).then((data) => {
        console.log('Products: ', data);
        displayProducts(data);
    });
}

get();


// display products 

const displayProduct = (products) => {
    let result = '';
        products.forEach(product => {
            result += `
            <!-- single product -->
            <!-- <article class="product">
                <div class="img-container">
                    <img src= ${product.image} alt="product" 
                    class="product-img">
                    <button class="bag-btn" data-id= ${product.id}>
                        <i class="fas fa-shopping-cart"></i>
                        add to bag
                    </button>
                </div>
                <h3>${product.title}</h3>
                <h4>${product.price}</h4>
            </article> -->
            <!-- end of single product -->
            `;
        });

        displayProducts.innerHTML = result;
}

window.onload = get(displayProduct);


//  add product to the shopping cart

const insertProductInCart = (id, name, price, image) => {
    let data = {
        id: id,
        name: name,
        price: price,
        imageUrl: image
    }
    fetch (baseURLShoppingcart, {method: "POST", body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' }})
    .then(response => {
        return response.json()
    }).then(data => {
        // console.log(data);
        window.alert("Product added")
    })
}

// get product from products
// display cart item
// show the cart
// cart items


