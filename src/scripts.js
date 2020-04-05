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
        currentPage: "gallery",
        mobileMenuOpen: false,
        // "active" in this case means focused/hovered.
        mobileMenuButtonActive: false,
    };

    componentDidMount = () => {
        window.addEventListener("resize", () => this.handleMobileMenuToggle(false))
    };

    handleClientNavigation = (event, newPage) => {
        event.preventDefault();

        if (newPage === this.state.currentPage) {
            return;
        }

        this.setState({currentPage: newPage});
        // history.pushState(null, null, `${window.location.pathname}/${newPage}`);
        this.handleMobileMenuToggle(false);
        this.handleMobileMenuButtonToggle(false);

        // TODO: Handle focus.
    };

    // Toggles the focus/hover state of the mobile menu button.
    handleMobileMenuButtonToggle = (nowFocused) => {
        if (this.state.mobileMenuButtonActive === nowFocused) {
            return;
        }

        this.setState({mobileMenuButtonActive: nowFocused});
    }

    handleMobileMenuToggle = (nowOpen) => {
        if (this.state.mobileMenuOpen === nowOpen) {
            return;
        }

        this.setState({mobileMenuOpen: nowOpen});

        if (nowOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    };

    handleMobileMenuButtonKeyUp = (event) => {
        if (event.key === " " || event.key === "Enter") {
            this.handleMobileMenuToggle(!this.state.mobileMenuOpen);
        }

        if (event.key === "Tab" && event.shiftKey) {
            event.preventDefault();

            if (this.lastOverlayLink && this.lastOverlayLink.focus) {
                this.lastOverlayLink.focus();
            }
        }
    };

    handleLastOverlayLinkKeyDown = (event) => {
        if (event.key === "Tab" && !event.shiftKey) {
            event.preventDefault();

            if (this.mobileMenuButton && this.mobileMenuButton.focus) {
                this.mobileMenuButton.focus();
            }
        }
    };

    renderNavigationLinks = (isHeader) => {
        const {currentPage} = this.state;
        const linkClassName = isHeader ? "header-link" : "overlay-link";
        const lastLinkRef = isHeader ? null : (node) => this.lastOverlayLink = node;

        return (
            <div className={`${linkClassName}s`}>
                {currentPage !== "gallery" && (
                    <a className={linkClassName} href="" onClick={(event) => this.handleClientNavigation(event, "gallery")}>Gallery</a>
                )}
                {currentPage !== "blog" && (
                    <a className={linkClassName} href="/blog" onClick={(event) => this.handleClientNavigation(event, "blog")}>Blog</a>
                )}
                <a className={linkClassName} href="http://dierat.deviantart.com/prints/">Prints</a>
                <a className={linkClassName} href="https://www.linkedin.com/in/dierat/">LinkedIn</a>
                <a
                    className={linkClassName}
                    href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=diedrarater@protonmail.com"
                    onKeyDown={isHeader ? null : this.handleLastOverlayLinkKeyDown}
                    ref={lastLinkRef}
                >
                    Contact
                </a>
            </div>
        );
    };

    render() {
        const {currentPage, mobileMenuButtonActive, mobileMenuOpen} = this.state;

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

                        {this.renderNavigationLinks(true)}

                        <button
                            id="header-menu-button"
                            ref={(node) => this.mobileMenuButton = node}
                            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                            onClick={() => this.handleMobileMenuToggle(!mobileMenuOpen)}
                            onKeyUp={this.handleMobileMenuButtonKeyUp}
                            onMouseEnter={() => this.handleMobileMenuButtonToggle(true)}
                            onFocus={() => this.handleMobileMenuButtonToggle(true)}
                            onMouseLeave={() => this.handleMobileMenuButtonToggle(false)}
                            onBlur={() => this.handleMobileMenuButtonToggle(false)}
                            aria-expanded={mobileMenuOpen}
                            className={mobileMenuOpen ? "change" : ""}
                        >
                            {[1, 2, 3].map((index) => {
                                let menuButtonBarClassName = `menu-button-bar-${index} menu-button-bar`;
                                if (mobileMenuButtonActive) {
                                    menuButtonBarClassName += " active";
                                }

                                return (
                                    <div
                                        className={menuButtonBarClassName}
                                        key={`menuButtonBar${index}`}
                                    >
                                    </div>
                                );
                            })}

                            <div className="menu-button-backdrop"></div>
                        </button>
                    </nav>
                </header>

                <div id="menu-overlay" className={!mobileMenuOpen ? "menu-closed" : ""}>
                    {mobileMenuOpen && this.renderNavigationLinks(false)}
                </div>

                <div id="main-content">
                    {currentPage === "gallery" &&
                        artInfo.map((info, index) => {
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
                        })
                    }

                    {currentPage === "blog" &&
                        <div>I AM A BLOG FEAR ME</div>
                    }
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
