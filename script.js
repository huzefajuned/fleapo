/**
 *  import icons from social_icons folder.
 */
const searchIcon = "./images/social_icon/search.png";
const userIcon = "./images/social_icon/user.png";
const heartIcon = "./images/social_icon/heart.png";
const shoppingBagIcon = "./images/social_icon/shopping-bag.png";

/**
 * import images for CollectionsCards from  collectionsCard folder.
 */
const image1 = "./images/collectionsCard/1.png";
const image2 = "./images/collectionsCard/2.png";
const image3 = "./images/collectionsCard/3.png";

/**
 * import images for WhatWedo from  WhatWedo folder.
 */
const weDoImg1 = "./images/whatWeDo/1.png";
const weDoImg2 = "./images/whatWeDo/2.png";
const weDoImg3 = "./images/whatWeDo/1.png";
const weDoImg4 = "./images/whatWeDo/2.png";
const weDoImg5 = "./images/whatWeDo/1.png";
const weDoImg6 = "./images/whatWeDo/2.png";

/**
 *  Close menu icon
 */
const closeHamburgerImg = "./images/close.png";

/**
 * import images from offers folder.
 */

const offer1 = "./images/offers/offer1.png";
const offer2 = "./images/offers/offer2.png";
const offer3 = "./images/offers/offer3.png";
const offer4 = "./images/offers/offer4.png";

/**
 * import toys Collections from toysCollection folder.
 */

const toy1 = "./images/toysCollection/toy1.png";
const toy2 = "./images/toysCollection/toy2.png";
const toy3 = "./images/toysCollection/toy3.png";
const toy4 = "./images/toysCollection/toy4.png";

/**
 * import  CustomersOponions images from CustomersOponions folder.
 */

const opinion2 = "./images/customersOpinions/image2.png";
const opinion3 = "./images/customersOpinions/image3.png";

/**
 * Offers data
 */
const offers = [
  "Hai bisogno di aiuto?",
  "Ottieni subito uno sconto del 10%:Iscriviti alla newsletter",
  "Informazioni di consegna",
];

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

/**
 * navlinks data
 */

const navlinks = [
  {
    id: 1,
    title: "Home",
    type: "link",
    containerClass: "heroContainer",
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
    containerClass: "collections",
  },
  {
    id: 1,
    title: "Marchi",
    type: "link",
    containerClass: "whatWeDo",
  },
  {
    id: 1,
    title: "Carte Regalo",
    type: "link",
    containerClass: "mostWantedToysContainer",
  },
  {
    id: 1,
    title: "Chi siamo",
    type: "link",
    containerClass: "footerContainer",
  },
  {
    id: 1,
    title: "",
    type: "icons",
    // icons are images .png
    icons: [searchIcon, userIcon, heartIcon, shoppingBagIcon],
  },
];

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

/**
 * whatWeDo Data
 */

const weDo = [
  {
    id: 3222,
    icon: weDoImg1,
    title: "Spedizioni sicure",
    subTitle:
      "Offriamo consegne rapide per garantirti che il tuo peluche arrivi a destinazione in perfette condizioni.",
  },
  {
    id: 5222,
    icon: weDoImg2,
    title: "Materiali di qualità",
    subTitle:
      "Siamo impegnati a utilizzare materiali di qualità per i nostri peluche, per garantirti un prodotto che durerà nel tempo.",
  },
  {
    id: 322,
    icon: weDoImg3,
    title: "Spedizioni sicure",
    subTitle:
      "Offriamo consegne rapide per garantirti che il tuo peluche arrivi a destinazione in perfette condizioni.",
  },
  {
    id: 3272,
    icon: weDoImg4,
    title: "Servizio eccellente",
    subTitle:
      "La nostra assistenza clienti è a tua disposizione per rispondere a tutte le tue domande e risolvere qualsiasi problema.",
  },
  {
    id: 9822,
    icon: weDoImg2,
    title: "Spedizioni sicure",
    subTitle:
      "Offriamo consegne rapide per garantirti che il tuo peluche arrivi a destinazione in perfette condizioni.",
  },
  {
    id: 98922,
    icon: weDoImg4,
    title: "Spedizioni sicure",
    subTitle:
      "Offriamo consegne rapide per garantirti che il tuo peluche arrivi a destinazione in perfette condizioni.",
  },
  {
    id: 33334,
    icon: weDoImg2,
    title: "Spedizioni sicure",
    subTitle:
      "Offriamo consegne rapide per garantirti che il tuo peluche arrivi a destinazione in perfette condizioni.",
  },
  {
    id: 1212,
    icon: weDoImg4,
    title: "Spedizioni sicure",
    subTitle:
      "Offriamo consegne rapide per garantirti che il tuo peluche arrivi a destinazione in perfette condizioni.",
  },
];

// toysCollection data
const toysCollection = [
  {
    id: 3423,
    image: toy1,
    title: "Jumbo - 10.5 Elefante",
    rating: "3.5",
    price: "$24",
  },
  {
    id: 1435,
    image: toy2,
    title: "Clover - 10.5 Lepre",
    rating: "3.5",
    price: "$25",
  },
  {
    id: 1353,
    image: toy3,
    title: "Blaze - 13.5 Drago",
    rating: "3.5",
    price: "$20",
  },
  {
    id: 4183,
    image: toy4,
    title: "Aria- 11.5 Farfalla",
    rating: "3.5",
    price: "$30",
  },
];

// customersOponions data
const customersOponions = [
  {
    id: 6523,
    image: opinion2,
    title: "Regala un sorriso con la nostra Gift Card",
    description:
      "Dai un'occhiata alle nostre offerte speciali! Troverai sconti imperdibili su alcuni dei nostri peluche più popolari. Ma affrettati, le offerte sono per tempo limitato!",
    buttonText: "Le offerte speciali della settimana",
  },
  {
    id: 9523,
    image: opinion3,
    title: "Personalizza il tuo peluche con noi",
    description:
      "Vuoi rendere il tuo peluche ancora più speciale? Personalizzalo con il nome o la data! Offriamo un servizio di personalizzazione per molti dei nostri peluche, rendendoli unici e indimenticabili.",
    buttonText: "Scopri di più",
  },
];

/**
 * opinions For Customers  Data
 */

const opinionsForCustomers = [
  {
    id: 9222,
    avatar:
      "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611716.jpg?w=740&t=st=1722407398~exp=1722407998~hmac=0760772bba280a8137a2bb03f89d1c2426216902793ee372df2f729ed44c20a0",
    message:
      "Non sono soddisfatto di questo peluche. Il materiale sembra economico e la cucitura è piuttosto approssimativa",
    name: "Claudio Boldi",
    type: "Operaio, genitore",
  },
  {
    id: 9432,
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1722407445~exp=1722408045~hmac=044e72760e93462746def288c3a5f71bf05e90a7e748852a0a18c46920698c5a",
    message:
      "“Questo peluche è fantastico! La qualità del materiale è eccezionale e la sua morbidezza lo rende perfetto per abbracciare”",
    name: "Maria Cipollari",
    type: "Casalinga, mamma",
  },
  {
    id: 43222,
    avatar:
      "https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-95040.jpg?w=740",
    message:
      "Il peluche stesso è di alta qualità, con dettagli ben curati e una consistenza morbida e soffice. Consiglio vivamente questo negozio!",
    name: "Jessica Merla",
    type: "Pensionata, nonna",
  },
  {
    id: 12222,
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1722407569~exp=1722408169~hmac=0771945361a65543c23722631e0c4a149bc11ee7be1d756469c4cc9b93b44d8c",
    message:
      "Non sono soddisfatto di questo peluche. Il materiale sembra economico e la cucitura è piuttosto approssimativa",
    name: "Claudio Boldi",
    type: "Operaio, genitore",
  },
  {
    id: 87222,
    avatar:
      "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611716.jpg?w=740&t=st=1722407398~exp=1722407998~hmac=0760772bba280a8137a2bb03f89d1c2426216902793ee372df2f729ed44c20a0",
    message:
      "Non sono soddisfatto di questo peluche. Il materiale sembra economico e la cucitura è piuttosto approssimativa",
    name: "Claudio Boldi",
    type: "Operaio, genitore",
  },
  {
    id: 12432,
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1722407445~exp=1722408045~hmac=044e72760e93462746def288c3a5f71bf05e90a7e748852a0a18c46920698c5a",
    message:
      "“Questo peluche è fantastico! La qualità del materiale è eccezionale e la sua morbidezza lo rende perfetto per abbracciare”",
    name: "Maria Cipollari",
    type: "Casalinga, mamma",
  },
  {
    id: 92222,
    avatar:
      "https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-95040.jpg?w=740",
    message:
      "Il peluche stesso è di alta qualità, con dettagli ben curati e una consistenza morbida e soffice. Consiglio vivamente questo negozio!",
    name: "Jessica Merla",
    type: "Pensionata, nonna",
  },

  {
    id: 21222,
    avatar:
      "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611716.jpg?w=740&t=st=1722407398~exp=1722407998~hmac=0760772bba280a8137a2bb03f89d1c2426216902793ee372df2f729ed44c20a0",
    message:
      "Non sono soddisfatto di questo peluche. Il materiale sembra economico e la cucitura è piuttosto approssimativa",
    name: "Claudio Boldi",
    type: "Operaio, genitore",
  },
  {
    id: 87222,
    avatar:
      "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611716.jpg?w=740&t=st=1722407398~exp=1722407998~hmac=0760772bba280a8137a2bb03f89d1c2426216902793ee372df2f729ed44c20a0",
    message:
      "Non sono soddisfatto di questo peluche. Il materiale sembra economico e la cucitura è piuttosto approssimativa",
    name: "Claudio Boldi",
    type: "Operaio, genitore",
  },
];

/**
 * footer links data
 */

const footerLinks = [
  {
    "Per aiutare": [
      "Consegna",
      "Ritorno",
      "Domande frequenti",
      "Pagamento sicuro",
      "Privacy e sicurezza",
    ],
  },
  {
    "Chi siamo": [
      "La nostra storia",
      "Sicurezza e idonetà",
      "Generali T $ C",
      "Commercio equo",
      "Mappa del sito",
    ],
  },
  {
    Commercio: [
      "Rivenditori esterni",
      "Diventa un rivenditoore",
      "Fiere e Convegni",
      "Termini e condizioni",
      "Pubbliche relazioni",
    ],
  },
  {
    Supporto: [
      "Il mio conto",
      "Spedizione",
      "Contattaci",
      "Spedizione estiva",
      "Richiamare",
    ],
  },
  {
    Social: ["Instagram", "Facebook", "Twitter", "You Tube ", "Pinteres"],
  },
];

/**
 * smooth scrooling @param  1. className 
 */

function smoothScroll(elementClass) {
  const element = document.querySelector(`.${elementClass}`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 *  Rendering  Offers UI.
 */

const offersDiv = document.querySelector(".offers");
const offersContainer = document.createElement("div");
offersContainer.id = "offersCard";

offers.forEach((offer) => {
  const offerElement = document.createElement("p");
  offerElement.textContent = offer;
  offerElement.id = "offersChild";
  offersContainer.appendChild(offerElement);
});

offersDiv.appendChild(offersContainer);

/**
 *  1.Creating navbar Dynamically., 2.Render navlinks , 3. Get the navlinks container
 */

const navlinksDiv = document.querySelector(".navlinks");
navlinks.forEach((link) => {
  let element;

  if (link.type === "link") {
    element = document.createElement("a");
    // element.href = "";
    element.textContent = link.title;
    element.className = "nav-item";
    element.addEventListener("click", () =>
      smoothScroll(link?.containerClass || "")
    );
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

// Rendering  collectionsCard UI.
const collectionsCardContainer = document.querySelector(
  ".collectionsCardContainer"
);

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

/**
 * Opening || Clsosing menus
 */
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

/**
 * 1. Rendering spring offers UI.
 */
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

/**
 * 1. Rendering whatWeDoCarousalContainer.
 */

const whatWeDoCarousalContainer = document.querySelector(
  ".whatWeDoCarousalContainer"
);

const carousalDots = document.querySelector(".carousalDots");
const carousalContainer = document.querySelector(".carousalContainer");

/**
 *  @param itemsPerPage  minimum cards per page will shown.
 *  @param currentPage   tracking the current page { initially 0}
 */
const itemsPerPage = 3;
let currentPage = 0;

/**
 * 1.Creating carousel with carousel  items cards.
 * renderCarousel accepts   { @param  1. container 2. datObj
 */
function renderCarousel(container, dataObj) {
  container.innerHTML = "";
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const itemsToDisplay = dataObj.slice(start, end);

  // avatar, message, name, type
  itemsToDisplay.forEach((card) => {
    const carouselCard = document.createElement("div");
    carouselCard.className = "carouselCard";
    carouselCard.innerHTML = `
      <img src="${card.icon || card.avatar}" alt="${card.title}">
      <h2>${card.title || card.message}</h2>
      <p>${card.subTitle || card.name}</p>
      <span>${card.type || ""}</span>
    `;
    container.appendChild(carouselCard);
  });
}

/**
 * 1.Create carousel dots.
 *  renderDots accepts   { @param  1. dots 2. datObj
 */

function renderDots(dots, dataObj, fn) {
  dots.innerHTML = ""; // Clear existing dots
  const numberOfPages = Math.ceil(dataObj.length / itemsPerPage);

  for (let i = 0; i < numberOfPages; i++) {
    const dot = document.createElement("div");
    dot.className = "carousalDot";
    dot.dataset.index = i;

    // Set active class for the current page
    if (i === currentPage) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
      currentPage = i;
      fn();
    });

    dots.appendChild(dot);
  }
}

// Update carousel and dots
function updateCarousel() {
  renderCarousel(carousalContainer, weDo);
  renderDots(carousalDots, weDo, updateCarousel);
}

// Initial render
updateCarousel();

/**
 * 1. Rendering mostWantedToysCollection UI.
 */
const mostWantedToysCollection = document.querySelector(
  ".mostWantedToysCollection"
);

toysCollection.forEach((offer) => {
  const toysCollectionCard = document.createElement("div");
  /**
   * used same class  {  springOffersCard }
   * both are same UI.
   * re-used the css for both..
   */
  toysCollectionCard.className = "springOffersCard";

  toysCollectionCard.innerHTML = `
    <img src="${offer?.image}" alt="${offer?.title}">
    <div class="title">${offer?.title}</div>
    <div class="rating">Rating: ${offer?.rating}★</div>
    <div class="price">${offer?.price}</div>
  `;

  mostWantedToysCollection.appendChild(toysCollectionCard);
});

/**
 * 1. Rendering customers Opinion UI.
 */
const customerOpinionContainer = document.querySelector(".opinionsInner");

customersOponions.forEach((opinion) => {
  const opinionCard = document.createElement("div");
  opinionCard.className = "opinionCard";

  opinionCard.innerHTML = `
    <img src="${opinion.image}" alt="${opinion.title}">
    <div class="cardContent">
      <h2>${opinion.title}</h2>
      <p>${opinion.description}</p>
      <p>${opinion.buttonText}></p>
    </div>
  `;

  customerOpinionContainer.appendChild(opinionCard);
});

/**
 * 1. Rendering opinionsForCustomersContainer.
 */

const opinionsForCustomersContainer = document.querySelector(
  ".opinionsForCustomersContainer"
);

const opinionDots = document.querySelector(".opinionDots");
const opinionCardContainer = document.querySelector(".opinionCardContainer");
// Update carousel and dots
function updateOpinionCarousel() {
  renderCarousel(opinionCardContainer, opinionsForCustomers);
  renderDots(opinionDots, opinionsForCustomers, updateOpinionCarousel);
}

// Initial render
updateOpinionCarousel();

/**
 * 1. Rendering footerLinks UI.
 */

function renderFooterLinks(links) {
  const footer = document.querySelector(".footerLinksContainer");

  links.forEach((linkGroup) => {
    const heading = Object.keys(linkGroup)[0];
    const linkArray = linkGroup[heading];

    const section = document.createElement("div");
    section.className = "footer-section";

    const title = document.createElement("h3");
    title.textContent = heading;
    section.appendChild(title);

    const list = document.createElement("ul");
    linkArray.forEach((item) => {
      const listItem = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.href = "#";
      anchor.textContent = item;
      listItem.appendChild(anchor);
      list.appendChild(listItem);
    });

    section.appendChild(list);
    footer.appendChild(section);
  });
}

// Initial render
renderFooterLinks(footerLinks);
