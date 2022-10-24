export default function displayHomeTabContents() {
    const main = document.querySelector('main');
    
    /* add this attribute in order to enable the property of the
    main[data-has-background-image='yes'] selector in '../styles/main.css' */
    main.setAttribute('data-has-background-image', 'yes');

    return 'Home';
}