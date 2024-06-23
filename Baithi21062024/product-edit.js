const search = new URLSearchParams(window.location.search);
const id = search.get("id");

const title = document.querySelector("#name");
const thumbnail = document.querySelector("#image");
const price = document.querySelector("#price");
const editform = document.querySelector("#form-edit");

editform.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(`http://localhost:3000/books/${id}`)
    .then((res) => res.json())
    .then((data) => {
      title.value = data.title;
      thumbnail.value = data.thumbnail;
      price.value = data.price;
    });
  let newProduct = {
    name: title.value,
    image: thumbnail.value,
    price: price.value,
  };
  fetch(`http://localhost:3000/books/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  }).then(() => (window.location = "./index.html"));
});
