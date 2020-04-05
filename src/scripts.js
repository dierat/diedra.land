'use strict';

/**
 * Setting up the gallery.
 *
 * Image sizes
 * 1x:
 * 600 x 800 (vertical)
 * 600 x 450 (horizontal)
 * 600 x 600 (square)
 *
 * 2x:
 * 1200 x 1600 (vertical)
 * 1200 x 900 (horizontal)
 * 1200 x 1200 (square)
 *
 * 3x:
 * 1800 x 2400 (vertical)
 * 1800 x 1350 (horizontal)
 * 1800 x 1800 (square)
 *
 * 4x:
 * 2400 x 3200 (vertical)
 * 2400 x 1800 (horizontal)
 * 2400 x 2400 (square)
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
        alt: "Digital drawing of a black and white portrait of Kenny MacKenzie from the Kenny MacKenzie Trio in a suit with his arms crossed.",
    },
    {
        name: "alice",
        orientation: "vertical",
        alt: "Digital drawing of a black and white portrait of a woman with glasses and long, straight, dark hair.",
    },
    {
        name: "lamb-study",
        orientation: "vertical",
        alt: "Digital drawing of a lamb standing in a field of grass.",
    },
    {
        name: "maja",
        orientation: "vertical",
        alt: "Digital black and white drawing of a woman standing in front of a barn.",
    },
    {
        name: "bracelets-still-life",
        orientation: "horizontal",
        alt: "Digital drawing of three metal bracelets under a bright light.",
    },
    {
        name: "lemon-and-pitcher",
        orientation: "vertical",
        alt: "Digital drawing of a metal pitcher and a lemon sitting on some half-transparent cloth.",
    },
    {
        name: "pumpkin-study",
        orientation: "horizontal",
        alt: "Digital drawing of a fat orange pumpkin.",
    },
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
    {
        name: "the-lutenist",
        orientation: "vertical",
        alt: "Digital drawing of a centaur playing a lute on the edge of a cliff with a hillside landscape in the back.",
    },
    {
        name: "sky-and-sea",
        orientation: "vertical",
        alt: "Digital drawing of two women in a lake. One woman has hair that is part clouds and has a tattoo on her back with two swallows. She is seated on a log above the water. The other woman is standing in the water, her hair looks like a waterfall, and she has a back tattoo featuring two koi fish. She is reaching out to the first woman, who does not reach out back.",
    },
];

const reactElement = React.createElement;

class TopLevelWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
      mobileMenuOpen: false,
  };

  render() {
    const menuButtonBarClassName = "";

    return (
      <div>
          <header>
              <nav>
                  <div className="header-name">
                      <img aria-hidden src="./images/icons/d-signature-icon.png" className="d-signature-icon" />
                      <div aria-hidden>iedra Rater</div>

                      <span className="sr-only">Diedra Rater</span>

                      <span className="header-profession">&nbsp;&nbsp;|&nbsp;&nbsp;Artist & Programmer</span>
                  </div>

                  <div className="header-links">
                      <a className="header-link" href="http://dierat.deviantart.com/prints/">Prints</a>
                      <a className="header-link" href="https://www.linkedin.com/in/dierat/">LinkedIn</a>
                      <a className="header-link" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=diedrarater@protonmail.com">Contact</a>
                  </div>

                  <button
                      id="header-menu-button"
                      aria-label="Navigation menu button."
                      onClick={() => this.setState({mobileMenuOpen: !this.state.mobileMenuOpen})}
                      aria-expanded={this.state.mobileMenuOpen}
                  >
                      <div className="menu-button-bar-1 menu-button-bar"></div>
                      <div className="menu-button-bar-2 menu-button-bar"></div>
                      <div className="menu-button-bar-3 menu-button-bar"></div>
                      <div className="menu-button-backdrop"></div>
                  </button>
              </nav>
          </header>

          {this.state.mobileMenuOpen && (
              <div id="menu-overlay" className="menu-closed">
                  <div className="overlay-links">
                      <a className="overlay-link" href="http://dierat.deviantart.com/prints/">Prints</a>
                      <a className="overlay-link" href="https://www.linkedin.com/in/dierat/">LinkedIn</a>
                      <a className="overlay-link" id="last-overlay-link" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=diedrarater@protonmail.com">Contact</a>
                  </div>
              </div>
          )}

          <div id="main-content">
              {artInfo.map((info, index) => {
                  const artElementSrc = `./images/art/${info.name}/${info.name}-1x.jpg`;
                  const artElementSrcset = `
                      ./images/art/${info.name}/${info.name}-4x.jpg 4x,
                      ./images/art/${info.name}/${info.name}-3x.jpg 3x,
                      ./images/art/${info.name}/${info.name}-2x.jpg 2x,
                      ./images/art/${info.name}/${info.name}-1x.jpg 1x,
                  `;

                  return (
                      <div className={`art-thumb-wrapper ${info.orientation}`} key={`art-thumb-wrapper-${index}`}>
                        <img src={artElementSrc} srcSet={artElementSrcset} alt={info.alt} className={`art-thumb ${info.orientation}`} />
                      </div>
                  );
              })}
          </div>

          <footer>
              <span className="footer-text">© 2020 Diedra Rater</span>
              <span className="footer-separator">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              <span className="footer-text">All rights reserved</span>
          </footer>
      </div>
    );
  }
}

const domContainer = document.querySelector('#react-mount-point');
ReactDOM.render(reactElement(TopLevelWrapper), domContainer);


















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
};

const toggleMenuOverlay = () => {
    const menuOverlay = document.getElementById("menu-overlay");
    const body = document.body;

    if (menuOverlay.classList.contains("menu-closed")) {
        const hamburgerButton = document.getElementById("header-menu-button");

        menuOverlay.classList.remove("menu-closed");
        document.body.classList.add("no-scroll");
        hamburgerButton.classList.toggle("change");
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
