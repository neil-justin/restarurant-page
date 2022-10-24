import displayHomeTabContents from "./tabs/home";

let currentTab = displayHomeTabContents();

function clearTabContents(mainTag) {
    if (currentTab === 'Home') {
        /* Setting the attribute's value into 'no' removes the background
        image of this element and toggles a selector in main.css file that
        adds a padding into this element */
        mainTag.setAttribute('data-has-background-image', 'no');
    } else {
        /* A method that removes the element's children if no parameter is
        specified. It was said to be a faster approach of removing element's
        children hence I go with it. */
        mainTag.replaceChildren()
    }
}

const tablist = document.querySelector('#tablist');
tablist.addEventListener('click', (e) => {
    const main = document.querySelector('main');

    if (e.target.textContent !== currentTab) {
        clearTabContents(main);

        switch (e.target.textContent) {
            case 'Home':
                console.log(e.target.textContent);
                break;
            case 'Menu':
                console.log(e.target.textContent);
                break;
            case 'Contact':
                console.log(e.target.textContent);
        }
    }
})