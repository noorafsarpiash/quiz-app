const MyBtn = document.querySelector(".MyBtn button");
const infoBox = document.querySelector(".info_box");

MyBtn.onclick = () => {
    infoBox.classList.add("activeInfo");
}