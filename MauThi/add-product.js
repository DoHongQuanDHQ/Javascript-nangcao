const name = document.querySelector("#name");
const image = document.querySelector("#image");
const price = document.querySelector("#price");
const addform = document.querySelector("#form-add");

addform.addEventListener("submit", () => {
  const confirmation = confirm("Are you sure you want to add this product?");
  if (confirmation) {
    let newProduct = {
      name: name.value,
      image: image.value,
      price: price.value,
    };
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    }).then(() => (window.location = "./index.html"));
  }
});
