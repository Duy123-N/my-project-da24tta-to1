const productDatabase = [
    {id: 1, name: "Hoa Lan", price: 70000, img: "../assets/images/hoalan.jpg"},
    {id: 2, name: "Hoa Cẩm Tú Cầu", price: 30000, img: "../assets/images/camtucau.jpg"},
    {id: 3, name: "Hoa Giấy", price: 100000, img: "../assets/images/hoagiay.jpg"},
    {id: 4, name: "Hoa Bướm", price: 20000, img: "../assets/images/hoabuom.jpg"},
    {id: 5, name: "Hoa Hồng", price: 60000, img: "../assets/images/hoahong.jpg"}
];

function addproduct(name, price, image){

    // Div cha
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class","product-item");

    // Div hình ảnh
    const myDiv1 = document.createElement("div");
    myDiv1.setAttribute("class", "product-image");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", image);
    productImg.setAttribute("alt", name);

    myDiv1.appendChild(productImg);
    myDiv.appendChild(myDiv1);

    // Div thông tin
    const myDiv2 = document.createElement("div");
    myDiv2.setAttribute("class","product-info");

    // Tên hoa
    const productName = document.createElement("p");
    productName.innerText = name;
    myDiv2.appendChild(productName);

    // Giá
    const productPrice = document.createElement("p");
    productPrice.innerText = price + " VNĐ/Chậu";
    myDiv2.appendChild(productPrice);

    myDiv.appendChild(myDiv2);

    // Link
    const mylink = document.createElement("a");
    mylink.href = "#";
    mylink.innerText = `Thông tin chi tiết về ${name}`;

    myDiv.appendChild(mylink);

    // Hiển thị ra body
    document.body.appendChild(myDiv);
}





// Gọi hàm cho từng sản phẩm
productDatabase.forEach(item => {
    addproduct(item.name, item.price, item.img);
});