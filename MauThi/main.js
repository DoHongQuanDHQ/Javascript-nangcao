const pro = document.querySelector("#pro");
const show = () => {
  fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => {
      pro.innerHTML = data.map((item, index) => {
        return `
            <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td><img src="${item.image}" width="100" height="100"></td>
            <td>${item.price}</td>
            <td><a href="./edit-product.html?id=${
              item.id
            }"><button class="btn-edit">Edit</button></a>
             <button class="btn-remove"data-id="${item.id}">Remove</button></td>
            </tr>
            `;
      });
    })
    .then(() => {
      const btnRemove = document.querySelectorAll(".btn-remove");
      console.log(btnRemove);
      for (let btn of btnRemove) {
        btn.addEventListener("click", () => {
          const confirmation = confirm(
            "Bạn có muốn xóa không?"
          );
          if (confirmation) {
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
show();
