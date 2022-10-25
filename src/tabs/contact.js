export default function displayContactTabContents(mainElem) {
    const contactTabMainHeadingElem = document.createElement('h2');
    contactTabMainHeadingElem.textContent = 'Contact us';
    mainElem.appendChild(contactTabMainHeadingElem);

    const contactInfoContainerElem = document.createElement('div');
    contactInfoContainerElem.setAttribute('id', 'contact-info-container');
    mainElem.appendChild(contactInfoContainerElem);

    const contactNumberContainer = document.createElement('div');
    contactInfoContainerElem.appendChild(contactNumberContainer);

    const contactNumberHeadingElem = document.createElement('h3');
    contactNumberHeadingElem.textContent = 'Dial Number';
    contactNumberHeadingElem.classList.add('contact-info-headings');
    contactNumberContainer.appendChild(contactNumberHeadingElem);

    const contactNumberElem = document.createElement('p');
    contactNumberElem.textContent = '(074) 342-9259';
    contactNumberContainer.appendChild(contactNumberElem);

    const contactAddressContainer = document.createElement('div');
    contactInfoContainerElem.appendChild(contactAddressContainer);

    const addressHeadingElem = document.createElement('h3');
    addressHeadingElem.textContent = 'Address';
    addressHeadingElem.classList.add('contact-info-headings');
    contactAddressContainer.appendChild(addressHeadingElem);

    const addressElem = document.createElement('p');
    addressElem.textContent = 'Pedro Gil St, Ermita, Manila, 1000 Metro Manila';
    contactAddressContainer.appendChild(addressElem);

    return mainElem.dataset.tab;
}