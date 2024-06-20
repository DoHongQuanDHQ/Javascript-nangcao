const search = new URLSearchParams(window.location.search);
const id = search.get("id");

const name = document.querySelector("#name");
const image = document.querySelector("#image");
const price = document.querySelector("#price");
const editform = document.querySelector("#form-edit");

editform.addEventListener("submit", (e) => {
  e.preventDefault();
  const confirmation = confirm("Are you sure you want to edit this product?");
  if (confirmation) {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        name.value = data.name;
        image.value = data.image;
        price.value = data.price;
      });
    let newProduct = {
      name: name.value,
      image: image.value,
      price: price.value,
    };
    fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    }).then(() => (window.location = "./index.html"));
  }
});
