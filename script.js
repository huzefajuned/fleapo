/**
 *  import icons from social_icons folder.
 */
const searchIcon = "./images/social_icon/search.png";
const userIcon = "./images/social_icon/user.png";
const heartIcon = "./images/social_icon/heart.png";
const shoppingBagIcon = "./images/social_icon/shopping-bag.png";

/**
 * import images for CollectionsCards from  CollectionsCard_Images folder.
 */

const image1 = "./images/CollectionsCard_Images/1.png";
const image2 = "./images/CollectionsCard_Images/2.png";
const image3 = "./images/CollectionsCard_Images/3.png";

/**
 * Offers data
 */
const offers = [
  "Hai bisogno di aiuto?",
  "Ottieni subito uno sconto del 10%:Iscriviti alla newsletter",
  "Informazioni di consegna",
];

// Close menu icon
const closeHamburgerImg = "./images/close.png";

/**
 * import images from offers folder.
 */

const offer1 = "./images/offers/offer1.png";
const offer2 = "./images/offers/offer2.png";
const offer3 = "./images/offers/offer3.png";
const offer4 = "./images/offers/offer4.png";

// springOffers data
const springOffers = [
  {
    id: 123,
    image: offer1,
    title: "Gigi - 12.5 Giraffa",
    rating: "3.5",
    price: "$24",
  },
  {
    id: 143,
    image: offer2,
    title: "Bunny - 10.5 Coniglio",
    rating: "3.5",
    price: "$25",
  },
  {
    id: 133,
    image: offer3,
    title: "Trixy - 8.5 Tricerapoto",
    rating: "3.5",
    price: "$20",
  },
  {
    id: 183,
    image: offer4,
    title: "Teddy - 10.5 Orso",
    rating: "3.5",
    price: "$30",
  },
];

// Rendering  Offers UI.
const offersDiv = document.querySelector(".offers");
const offersContainer = document.createElement("div");
offersContainer.id = "offersCard";
// Iterate over the offers array and create elements for each offer
offers.forEach((offer) => {
  const offerElement = document.createElement("p");
  offerElement.textContent = offer;
  offerElement.id = "offersChild";
  offersContainer.appendChild(offerElement);
});

// Append the offersContainer to the offersDiv
offersDiv.appendChild(offersContainer);

/**
 * navlinks data
 */

const navlinks = [
  {
    id: 1,
    title: "Home",
    type: "link",
  },
  {
    id: 1,
    title: "Category",
    type: "dropdown",
    items: ["About", "Demo", "Contact", "Career"],
  },
  {
    id: 1,
    title: "Novita",
    type: "link",
  },
  {
    id: 1,
    title: "Marchi",
    type: "link",
  },
  {
    id: 1,
    title: "Carte Regalo",
    type: "link",
  },
  {
    id: 1,
    title: "Chi siamo",
    type: "link",
  },
  {
    id: 1,
    title: "",
    type: "icons",
    // icons are images .png
    icons: [searchIcon, userIcon, heartIcon, shoppingBagIcon],
  },
];

// Creating navbar Dynamically..

// // Get the navlinks container
const navlinksDiv = document.querySelector(".navlinks");

// // Render navlinks
navlinks.forEach((link) => {
  let element;

  if (link.type === "link") {
    element = document.createElement("a");
    element.href = "#";
    element.textContent = link.title;
    element.className = "nav-item";
  } else if (link.type === "dropdown") {
    element = document.createElement("div");
    element.className = "nav-dropdown";
    const title = document.createElement("span");
    title.className = "nav-item";
    title.textContent = link.title;
    element.appendChild(title);

    const dropdownContent = document.createElement("div");
    dropdownContent.className = "dropdown-content";

    link.items.forEach((item) => {
      const dropdownItem = document.createElement("a");
      dropdownItem.href = "#";
      dropdownItem.textContent = item;
      dropdownContent.appendChild(dropdownItem);
    });

    element.appendChild(dropdownContent);
  } else if (link.type === "icons") {
    element = document.createElement("div");
    element.className = "nav-icons";

    link.icons.forEach((icon) => {
      const img = document.createElement("img");
      img.src = icon;
      element.appendChild(img);
    });
  }

  if (element) {
    navlinksDiv.appendChild(element);
  }
});

/**
 * CollectionsCards Data
 */

const collections = [
  {
    id: 12,
    image: image1,
    title: "Fantasy Friends ",
    description:
      "Collezione di peluche mitici e fantastici: Perfetti per sognare ad occhi aperti.",
  },
  {
    id: 13,
    image: image2,
    title: "Vintage Treasures ",
    description:
      "Collezione retrò, peluche tradizionali e storici, per un tocco di nostalgia.",
  },
  {
    id: 14,
    image: image3,
    title: "Wild Adventures",
    description:
      "In Questa collezione troverai peluche di animali esotici per tutti tipi di avventure .",
  },
];

const collectionsCardContainer = document.querySelector(
  ".collectionsCardContainer"
);

// Rendering  collectionsCard UI.

collections.forEach((collection) => {
  const card = document.createElement("div");
  card.classList.add("collectionCard");

  card.innerHTML = `
    <img src="${collection.image}" alt="${collection.title}" class="collectionCardImage">
    <div class="collectionCardContent">
      <h3 class="collectionCardTitle">${collection.title}</h3>
      <p class="collectionCardDescription">${collection.description}</p>
    </div>
  `;

  collectionsCardContainer.appendChild(card);
});

// Open menu and close  menu.
const hamburgerImg = document.querySelector(".hamburgerImg");
hamburgerImg.addEventListener("click", () => {
  const navlinks = document.querySelector(".navlinks");

  if (!document.querySelector(".closeHamburger")) {
    const closeMenu = document.createElement("img");
    closeMenu.src = closeHamburgerImg;
    closeMenu.className = "closeHamburger";
    navlinks.appendChild(closeMenu);

    // Add event listener to close button
    closeMenu.addEventListener("click", () => {
      navlinks.classList.remove("show");
      setTimeout(() => {
        navlinks.style.display = "none";
      }, 400);
      closeMenu.remove();
    });
  }

  navlinks.style.display = "flex";
  setTimeout(() => {
    navlinks.classList.add("show");
  }, 10);
});

//// Rendering spring offers UI.
const springOffersContainer = document.querySelector(".springOffersContainer");

springOffers.forEach((offer) => {
  const springCard = document.createElement("div");
  springCard.className = "springOffersCard";

  springCard.innerHTML = `
    <img src="${offer?.image}" alt="${offer?.title}">
    <div class="title">${offer?.title}</div>
    <div class="rating">Rating: ${offer?.rating}★</div>
    <div class="price">${offer?.price}</div>
  `;

  springOffersContainer.appendChild(springCard);
});
