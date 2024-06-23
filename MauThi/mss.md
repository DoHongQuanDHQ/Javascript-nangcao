<!-- const pro = document.querySelector("#pro");
const show = () => {
  fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => {
      pro.innerHTML = data.map((item, index) => {
        return `
        <tr>
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td><img src="${
                  item.image
                }" alt="" width="100" height="100"></td>
                <td>${item.price}</td>
                <td>
                <a href="./product-edit.html?id=${
                  item.id
                }"><button class="btn-edit">Edit</button></a>
                <button class="btn-remove" data-id="${item.id}">Remove</button>
                </td>
        </tr>
        `;
      });
    })
    .then(() => {
      const btnRemove = document.querySelectorAll(".btn-remove");
      for (let btn of btnRemove) {
        btn.addEventListener("click", () => {
          if (confirm("Ban co muon xoa khong")) {
            let id = btn.dataset.id;
            fetch(`http://localhost:3000/products/${id}`, {
              method: "DELETE",
            }).then(() => {
              show();
            });
          }
        });
      }
    });
};
show(); -->

<!-- Add -->
<!-- const name = document.querySelector("#name");
const image = document.querySelector("#image");
const price = document.querySelector("#price");
const addform = document.querySelector("#form-add");

addform.addEventListener("submit", () => {
  if (confirm("Them san pham thanh cong")) {
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
}); -->
