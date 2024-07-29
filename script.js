
/**
 *  import icons from social_icons folder
 */
const searchIcon = "./images/social_icon/search.png";
const userIcon = "./images/social_icon/user.png";
const heartIcon = "./images/social_icon/heart.png";
const shoppingBagIcon = "./images/social_icon/shopping-bag.png";



/**
 * Offers data
 */
const offers = ['Hai bisogno di aiuto?', 'Ottieni subito uno sconto del 10%:Iscriviti alla newsletter', 'Informazioni di consegna']


// Creating  Offers UI Dynamically.
const offersDiv = document.getElementsByClassName('offers')[0];
const offersContainer = document.createElement('div');
offersContainer.id = 'offersCard'
// Iterate over the offers array and create elements for each offer
offers.forEach(offer => {
    const offerElement = document.createElement('p');
    offerElement.textContent = offer;
    offerElement.id = 'offersChild'
    offersContainer.appendChild(offerElement);
});

// Append the offersContainer to the offersDiv
offersDiv.appendChild(offersContainer);


/**
 * navlinks data
 */

const navlinks = [{
    id: 1,
    title: "Home",
    type: 'link'
}, {
    id: 1,
    title: "Category",
    type: 'dropdown',
    items : ['About', 'Demo', 'Contact', 'Career']

}, {
    id: 1,
    title: "Novita",
    type: 'link'
}, {
    id: 1,
    title: "Marchi",
    type: 'link'
}, {
    id: 1,
    title: "Carte Regalo",
    type: 'link'
}, {
    id: 1,
    title: "Chi siamo",
    type: 'link'
}
    , {
    id: 1,
    title: "",
    type: 'icons',
    // icons are images .png
    icons: [searchIcon, userIcon, heartIcon, shoppingBagIcon]
}]

// Creating navbar Dynamically..

// // Get the navlinks container
const navlinksDiv = document.querySelector('.navlinks');

// // Render navlinks
navlinks.forEach(link => {
    let element;

    if (link.type === 'link') {
        element = document.createElement('a');
        element.href = '#';
        element.textContent = link.title;
        element.className = 'nav-item';
    } else if (link.type === 'dropdown') {
        element = document.createElement('div');
        element.className = 'nav-dropdown';
        const title = document.createElement('span');
        title.className = 'nav-item';
        title.textContent = link.title;
        element.appendChild(title);

        const dropdownContent = document.createElement('div');
        dropdownContent.className = 'dropdown-content';

        link.items.forEach(item => {
            const dropdownItem = document.createElement('a');
            dropdownItem.href = '#';
            dropdownItem.textContent = item;
            dropdownContent.appendChild(dropdownItem);
        });

        element.appendChild(dropdownContent);
    } else if (link.type === 'icons') {
        element = document.createElement('div');
        element.className = 'nav-icons';

        link.icons.forEach(icon => {
            const img = document.createElement('img');
            img.src = icon;
            element.appendChild(img);
        });
    }

    if (element) {
        navlinksDiv.appendChild(element);
    }
})