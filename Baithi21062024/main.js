const pro = document.querySelector("#pro");
const show = () => {
  fetch("http://localhost:3000/books")
    .then((res) => res.json())
    .then((data) => {
      pro.innerHTML = data.map((item, index) => {
        return `
        <tr>
                <td>${index + 1}</td>
                <td>${item.title}</td>
                <td><img src="${
                  item.thumbnail
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
            fetch(`http://localhost:3000/books/${id}`, {
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
