/**
 * Setting up the gallery.
 */
const artInfo = [
    {
        name: "nine-of-swords",
        orientation: "vertical",
        alt: "Digital drawing of a woman in a night gown floating in space with a seascape behind her. Below her is a beach with 4 swords, hilt-up sticking out of the sand. Above her is another ocean's surface in which she is reflected. 5 swords, blade-up, stick out of the water. Behind her is a dark sea with stormy clouds reflected in both ocean surfaces, above and below her. Her expression is melancholic.",
    },
    {
        name: "dragoness",
        orientation: "vertical",
        alt: "Digital drawing of a woman wearing a green and red silk dress and a red and green horned headdress. In the background is a large stained glass window with an image of a unicorn and a red dragon.",
    },
    {
        name: "trapped-faerie",
        orientation: "vertical",
        alt: "Digital drawing of a faerie caught in webs looking out a window.",
    },
    {
        name: "kenny-portrait",
        orientation: "vertical",
        alt: "Digital drawing of a black and white portrait of Kenny MacKenzie from the Kenny MacKenzie Trio",
    },
    // {
    //     name: "lamb-study",
    //     orientation: "vertical",
    //     alt: "Digital drawing of ",
    // },
    // {
    //     name: "gun-study",
    //     orientation: "horizontal",
    //     alt: "Digital drawing of ",
    // },
    // {
    //     name: "pumpkin-study",
    //     orientation: "horizontal",
    //     alt: "Digital drawing of ",
    // },
    {
        name: "hands-study",
        orientation: "horizontal",
        alt: "Digital drawing of a person seated cross-legged on a floor, wearing a skirt, with their hands in a meditative pose resting on the figure's knees. The person's shoulders and head are off-screen. The image is black and white.",
    },
    {
        name: "mobster-bach",
        orientation: "square",
        alt: "Digital drawing of composer Johann Sebastian Bach as an Italian mobster. He's wearing a suit and holding a gun in one hand and a cigar in the other. The image is a parody of the portrait by Elias Gottlob Haussmann",
    },
    // {
    //     name: "red-dream",
    //     orientation: "vertical",
    //     alt: "Digital drawing of ",
    // },
    // {
    //     name: "the-lutenist",
    //     orientation: "vertical",
    //     alt: "Digital drawing of ",
    // },
    {
        name: "sky-and-sea",
        orientation: "vertical",
        alt: "Digital drawing of two women in a lake. One woman has hair that is part clouds and has a tattoo on her back with two swallows. She is seated on a log above the water. The other woman is standing in the water, her hair looks like a waterfall, and she has a back tattoo featuring two koi fish. She is reaching out to the first woman, who does not reach out back.",
    },
];

const mainContent = document.getElementById("main-content");

artInfo.forEach((info, index) => {
    const artWrapperElement = document.createElement("DIV");
    artWrapperElement.classList.add("art-thumb-wrapper");
    artWrapperElement.classList.add(info.orientation);

    const artElement = document.createElement("IMG");
    artElement.src = `./images/art/${info.name}/${info.name}-1x.png`;
    artElement.srcset = `
        ./images/art/${info.name}/${info.name}-4x.png 4x,
        ./images/art/${info.name}/${info.name}-3x.png 3x,
        ./images/art/${info.name}/${info.name}-2x.png 2x,
        ./images/art/${info.name}/${info.name}-1x.png 1x,
    `;
    artElement.alt = info.alt;
    artElement.classList.add("art-thumb");
    artElement.classList.add(info.orientation);

    artWrapperElement.appendChild(artElement);
    mainContent.appendChild(artWrapperElement);
});

/**
 * Handling the menu overlay.
 */
const toggleMenuButtonBarsActive = (newState) => {
    const headerMenuButton = document.getElementById("header-menu-button");
    const barElements = Array.from(document.getElementsByClassName("menu-button-bar"));

    const testElementClassList = barElements[0].classList;

    if (newState === "active" && testElementClassList.contains("active") ||
        newState === "inactive" && document.activeElement === headerMenuButton
    ) {
        // Don't toggle if we're already in the right state.
        return;
    }

    barElements.forEach((barElement, index) => {
        barElement.classList.toggle("active");
    });

};

const headerMenuButton = document.getElementById("header-menu-button");
const focusEvents = ["focus", "mouseenter"];
const unFocusEvents = ["blur", "mouseleave"];
focusEvents.forEach((eventName, index) => {
    headerMenuButton.addEventListener(eventName, () => toggleMenuButtonBarsActive("active"))
});
unFocusEvents.forEach((eventName, index) => {
    headerMenuButton.addEventListener(eventName, () => toggleMenuButtonBarsActive("inactive"))
});

const closeMenuOverlay = () => {
    const menuOverlay = document.getElementById("menu-overlay");

    if (menuOverlay.classList.contains("menu-closed")) {
        return;
    }

    const hamburgerButton = document.getElementById("header-menu-button");

    menuOverlay.classList.add("menu-closed");
    document.body.classList.remove("no-scroll");
    hamburgerButton.classList.toggle("change");
    // TODO: Toggle aria-expanded value.
};

const toggleMenuOverlay = () => {
    const menuOverlay = document.getElementById("menu-overlay");
    const body = document.body;

    if (menuOverlay.classList.contains("menu-closed")) {
        const hamburgerButton = document.getElementById("header-menu-button");

        menuOverlay.classList.remove("menu-closed");
        document.body.classList.add("no-scroll");
        hamburgerButton.classList.toggle("change");
        // TODO: Toggle aria-expanded value.
    } else {
        closeMenuOverlay();
    }
};

const menuButton = document.getElementById("header-menu-button");
const lastOverlayLink = document.getElementById("last-overlay-link");

menuButton.addEventListener("click", toggleMenuOverlay);
menuButton.addEventListener("keydown", (event) => {
    const menuOverlay = document.getElementById("menu-overlay");
    if (!menuOverlay.classList.contains("menu-closed") && event.key === "Tab" && event.shiftKey) {
        event.preventDefault();
        lastOverlayLink.focus();
    }
});

lastOverlayLink.addEventListener("keydown", (event) => {
    if (event.key === "Tab" && !event.shiftKey) {
        event.preventDefault();
        menuButton.focus();
    }
});

window.addEventListener("resize", () => closeMenuOverlay())
