// const cartContent = document.querySelector('.cart-content');
// const baseURLShoppingcart = 'http://localhost:8000/api/shoppingcart';


// const getShoppingcart = () => {
//     fetch(baseURLShoppingcart, { method: 'GET' })
//     .then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log('Products: ', data);
//         cartOverlay(data);
//     });
// }
// getShoppingcart()

// const deleteitem = (id, name, price, image) => {
        

//     let data = {
//         id: id,
//         name: name,
//         price: price,
//         imageUrl: image
//     }

//     fetch ("http://localhost:8000/api/shoppingcart", {method: "DELETE", body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' }})
//     .then(response => {
//         return response.json()
//     }).then(data => {
//         console.log(data)
//         window.alert("Product deleted")
//     })

// }

// const cartOverlay = (products) => {
  
//     for(let i = 0; i < products.length; i++) {

//         let divElem = document.createElement('div');
//         let imageElem = document.createElement('img');
        
//         let h4Elem = document.createElement('h4');
//         let h5Elem = document.createElement('h5');
//         let buttonElem = document.createElement('button');

//         imageElem.setAttribute('src',products[i].imageUrl);
//         h4Elem.innerHTML = products[i].name;
//         h5Elem.innerHTML = products[i].price;
//         buttonElem.innerHTML = 'remove';

//         buttonElem.addEventListener('click', () => {
//             deleteitem(products[i].id, products[i].name, products[i].price, products[i].imageUrl);
//         })
 
//         cartContent.append(divElem);
//         divElem.appendChild(imageElem);
//         divElem.appendChild(buttonElem);
//         divElem.appendChild(h4Elem);
//         divElem.appendChild(h5Elem);
       

//         //Add CSS-classes
//         divElem.classList.add('cart-item');
//         imageElem.classList.add('product-img');
//         buttonElem.classList.add('remove-item');

//     }

// }