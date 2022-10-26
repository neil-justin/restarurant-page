import displayHomeTabContents from "./tabs/home";
import displayMenuTabContents from "./tabs/menu";
import displayContactTabContents from "./tabs/contact";

const mainElem = document.querySelector('main');

let currentTab = displayHomeTabContents(mainElem);

function clearTabContents(openTab) {
    /* Setting the attribute's value removes the background
    image of <main> element when the opened tab is the Home tab. */
    mainElem.setAttribute('data-tab', openTab);

    if (currentTab !== 'Home') {
        /* A method that removes the element's children if no parameter is
        specified. It was said to be a faster approach of removing element's
        children hence I go with it. */
        mainElem.replaceChildren()
    }
}

const tablist = document.querySelector('#tablist');
tablist.addEventListener('click', (e) => {
    if (e.target.textContent !== currentTab) {
        /* Since I add the event listener not on each individual navigation link,
        rather, on their parent (to make use of event delegation), the event
        listener reacts to a click inside the blank area of the parent elemnt
        which in turns bypass the conditional statement above and produce an
        unexpected ui result. In order to prevent that, the conditional statement
        below is needed */
        if (e.target.textContent === 'Home' ||
            e.target.textContent === 'Menu' ||
            e.target.textContent === 'Contact') {

            clearTabContents(e.target.textContent);

            switch (e.target.textContent) {
                case 'Home':
                    currentTab = displayHomeTabContents(mainElem);
                    break;
                case 'Menu':
                    currentTab = displayMenuTabContents(mainElem);
                    break;
                case 'Contact':
                    currentTab = displayContactTabContents(mainElem);
            }

            console.log(currentTab);
        }
    }
})