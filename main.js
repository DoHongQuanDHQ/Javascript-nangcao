const pro = document.querySelector("#pro");
const show = () => {
  fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => {
      pro.innerHTML = data.map((item, index) => {
        return `
            <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td><img src="${item.image}" width="100" height="100"></td>
            <td>${item.price}</td>
            <td><a href="./edit-product.html?id=${item.id}">Edit</a></td>
            </tr>
            `;
      });
    });
};
show();
