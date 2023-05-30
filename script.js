import { config } from "./config.js";
const key = config.CLIENT_ID;
const url = `https://api.unsplash.com/photos/?client_id=${key}`;
const cardWrapper = document.querySelector(".card-wrapper");

const getData = async() => {
    const result = await fetch(
        `https://api.unsplash.com/photos/?client_id=${key}`
    );
    const data = await result.json();
    const card = data
        .map((item) => {
            return `
<div class="card" data-image="photography">
    <div class="card-image">
        <img src=${item.urls.full} alt="photography">
    </div>
    <div class="card-title">
        <p>${item.alt_description}</p>
    </div>
</div>
`;
        })
        .join("");
    cardWrapper.innerHTML = card;
};

getData();