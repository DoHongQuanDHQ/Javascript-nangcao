const title = document.querySelector("#name");
const thumbnail = document.querySelector("#image");
const price = document.querySelector("#price");
const addform = document.querySelector("#form-add");

addform.addEventListener("submit", () => {
  if (confirm("Them san pham thanh cong")) {
    let newProduct = {
      title: title.value,
      thumbnail: thumbnail.value,
      price: price.value,
    };
    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    }).then(() => (window.location = "./index.html"));
  }
});
