'use strict';

import artInfo from "./gallery-image-list.js";

class TopLevelWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        // TODO: Update page title when currentPage changes.
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
            <React.Fragment>
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
            </React.Fragment>
        );
    }
}

const domContainer = document.querySelector('#react-mount-point');
const reactElement = React.createElement;
ReactDOM.render(reactElement(TopLevelWrapper), domContainer);