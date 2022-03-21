let productId = new URL(window.location.href).searchParams.get('id')
panier = JSON.parse(localStorage.getItem("produit"));                     // on recupere les donner dans le localstorage
  let product;                                                            // on declare une variable product
const getProduct = async () => {                                        // on cree une constante pour obtenir les produits sur le site
  await fetch('http://localhost:3000/api/products/')                    // ajout des produits sur le site grace a l'api avec fetch 
  .then(res => res.json())                                              // reponse
  .then(JSON => product = JSON)                                          
  .catch((err) => console.log(err));                                    // pour afficher les erreurs si il y a des erreurs
  console.log(product) 
const elementPanier = document.querySelector("#cart__items");                     // on cree une variable element panier 
if (panier === null) {                                                             // si le panier est vide                             
  let panierVide;                                                                  // on declare une nouvelle variable
  elementPanier.innerHTML = panierVide;                                           // on definit element panier = parent de panier vide
} else {                                                                          // sinon
   let panierAfficher = [];                                                      // on cree un tableau vide pour la page panier
   for (i = 0; i < panier.length; i++) {                                         // on cree une boucle qui sera repeter pour chaque nouveau element
    panierAfficher =
      panierAfficher +
      `
      <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
      <div class="cart__item__img">
        <img src="${product[i].imageUrl}" alt="Photographie d'un canapé">
      </div>
      <div class="cart__item__content">
        <div class="cart__item__content__description">
          <h2>${product[i].name}</h2>
          <p>${panier[i].color}</p>
          <p>${product[i].price} €</p>
        </div>
        <div class="cart__item__content__settings">
          <div class="cart__item__content__settings__quantity">
            <p>Qté : </p>
            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${panier[i].quantity}">
          </div>
          <div class="cart__item__content__settings__delete">
            <p class="deleteItem">Supprimer</p>
          </div>
        </div>
      </div>
    </article>
    `;
  }
  if (i === panier.length)
  {
    elementPanier.innerHTML = panierAfficher
  }
}

}

getProduct();



// modifier quantiter
let itemQuantity = document.querySelector("itemQuantity");

