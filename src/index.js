import displayHomeTabContents from "./tabs/home";
import displayMenuTabContents from "./tabs/menu";

const mainElem = document.querySelector('main');

let currentTab = displayHomeTabContents(mainElem);

function clearTabContents(openTab) {
    if (currentTab === 'Home') {
        /* Setting the attribute's value into 'no' removes the background
        image of this element and toggles a selector in main.css file that
        adds a padding into this element */
        mainElem.setAttribute('data-tab', openTab);
    } else {
        /* A method that removes the element's children if no parameter is
        specified. It was said to be a faster approach of removing element's
        children hence I go with it. */
        mainElem.replaceChildren()
    }
}

const tablist = document.querySelector('#tablist');
tablist.addEventListener('click', (e) => {
    if (e.target.textContent !== currentTab) {
        clearTabContents(e.target.textContent);

        switch (e.target.textContent) {
            case 'Home':
                console.log(e.target.textContent);
                currentTab = displayHomeTabContents(mainElem);
                break;
            case 'Menu':
                console.log(e.target.textContent);
                currentTab = displayMenuTabContents(mainElem);
                break;
            case 'Contact':
                console.log(e.target.textContent);
        }

    }
})