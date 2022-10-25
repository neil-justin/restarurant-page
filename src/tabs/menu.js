import chocolateDonutImg from "../assets/doughnut-images/chocolate-doughnut.png";
import pinkDoughnutImg from "../assets/doughnut-images/pink-doughnut.png";
import purpleDoughnut2Img from "../assets/doughnut-images/purple-doughnut-2.png";
import purpleDoughnutImg from "../assets/doughnut-images/purple-doughnut.png";
import whiteChocolateDoughnutImg from "../assets/doughnut-images/white-chocolate-doughnut.png";
import whiteDoughnutImg from "../assets/doughnut-images/white-doughnut.png";

export default function displayMenuTabContents(mainElem) {
    const itemsHeadingElem = document.createElement('h2');
    itemsHeadingElem.textContent = 'Doughnuts';
    mainElem.appendChild(itemsHeadingElem);

    const menuElem = document.createElement('div');
    menuElem.setAttribute('id', 'menu-list');
    mainElem.appendChild(menuElem);

    createItemCards(menuElem)

    return mainElem.dataset.tab;
}

const doughnuts = {
    'Chocolate Doughnut': chocolateDonutImg,
    'Pink Doughnut': pinkDoughnutImg,
    'Purple Doughnut II': purpleDoughnut2Img,
    'Purple Doughnut': purpleDoughnutImg,
    'White Chocolate Doughnut': whiteChocolateDoughnutImg,
    'White Doughnut': whiteDoughnutImg,
}

function createItemCards(div) {
    for (let i = 0; i < Object.keys(doughnuts).length; i++) {
        const itemCardElem = document.createElement('section');
        itemCardElem.setAttribute(`data-item`, i);
        div.appendChild(itemCardElem);

        const itemHyperlinkElem = document.createElement('a');
        itemHyperlinkElem.setAttribute('href', '#');
        itemHyperlinkElem.classList.add('item-link');
        itemCardElem.appendChild(itemHyperlinkElem);

        const itemNameElem = document.createElement('h3');
        itemNameElem.classList.add('item-name');
        itemNameElem.textContent = Object.keys(doughnuts)[i];
        const doughnut = itemNameElem.textContent;
        itemHyperlinkElem.appendChild(itemNameElem);

        const itemImgElem = document.createElement('img');
        itemImgElem.src = `${doughnuts[doughnut]}`;
        itemImgElem.classList.add('item-img');
        itemHyperlinkElem.insertBefore(itemImgElem, itemNameElem);

        const itemPriceElem = document.createElement('p')
        itemPriceElem.classList.add('item-price');
        itemPriceElem.textContent = 'USD 1.25'
        itemHyperlinkElem.appendChild(itemPriceElem);
    }
}