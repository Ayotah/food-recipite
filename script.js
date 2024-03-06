const products = [
    {
      id: 1,
      name: "ekwang",
      price: 50000,
      category: "soup",
      image:
      <image src="./ekwang.jpg"/>,
      // description:"https://www.africanbites.com/ekwang-ekpang-nkukwo/"
    },
    {
      id: 2,
      name: "DJ",
      price: 55000,
      category: "stew",
      image:
      <image src="./DJ.jpg"/>,
    },
    {
      id: 3,
      name: "Jelof rice",
      category: "stew",
      image:
      <image src="./jelof rice.jpg"/>,
    },
    {
      id: 4,
      name: "Coco",
      category: "traditional",
      image:
      <image src="./coco.jpg"/>,
    },
    {
      id: 5,
      name: "Ndole",
      category: "soup",
      image: <image src="./ndole.jpg"/>,
    },
    {
      id: 6,
      name: "Okro",
      category: "soup",
      image:<image src="./okro.jpg"/>,
    },
    {
      id: 7,
      name: "Eru",
      category: "traditional",
      image: <image src="./eru.jpg"/>,
    },
    {
      id: 8,
      name: "Koki",
      category: "stew",
      image:
      <image src="./koki.jpg"/>,
    },
    {
      id: 9,
      name: "Sanga",
      category: "traditional",
      image:<image src="./sanga.jpg"/>
        ,
    },
    {
      id: 10,
      name: "Achu",
      category: "traditional",
      image:<image src ="./ach.jpg"/>,
    },
]



  const productsContainer = document.querySelector(".products");
  const searchInput = document.querySelector(".search-bar");
  const categoriesContainer = document.querySelector(".cats");


  
const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts.map(
  (product) => ` <div class="product">
  <img src="${product.image}" alt="">
  <h3 class="product-name">${product.name}</h3>
  <p class="product-cat">${product.category}</p>
  <button class="buy-btn">${product.description}</button> `
  ).join("");
}

// maping through the buttons 

const setCategories = () => {
  const categoriesList = products.map(product => product.category);

  const cats = ["All", ...categoriesList.filter((cat, index) => categoriesList.indexOf(cat) === index)];

  console.log(cats);

  categoriesContainer.innerHTML = cats.map(cat => `<span class="cat">${cat}</span>`).join("")
}



document.addEventListener("DOMContentLoaded", () => {
  displayProducts(products);
  setCategories();

  searchInput.onkeyup = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm.length > 0) {
      displayProducts(products.filter(product => product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1));


      if(products.filter(product => product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1).length === 0) {
        productsContainer.innerHTML = `<div class="error"> Product not found</div>`
      }

    } else {
      displayProducts(products);
    }
  }

  categoriesContainer.onclick = (e) => {
    const selectedCat = e.target.textContent;
    if (selectedCat === "All") {
      displayProducts(products);
    } else {
      displayProducts(products.filter((product) => product.category === selectedCat))
    }
  }
});
 