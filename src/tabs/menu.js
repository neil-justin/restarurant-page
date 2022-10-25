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

        const h3 = document.createElement('h3');
        h3.classList.add('item-name');
        h3.textContent = Object.keys(doughnuts)[i];
        const doughnut = h3.textContent;
        itemHyperlinkElem.appendChild(h3);

        const img = document.createElement('img');
        img.src = `${doughnuts[doughnut]}`;
        img.classList.add('item-img');
        itemHyperlinkElem.insertBefore(img, h3);

        const para = document.createElement('p')
        para.classList.add('item-price');
        para.textContent = 'USD 1.25'
        itemHyperlinkElem.appendChild(para);
    }
}