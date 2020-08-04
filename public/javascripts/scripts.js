import {artInfo, codeInfo} from "./gallery/gallery-image-list.js";
import Bio from "./bio.js";
import GalleryImage from "./gallery/gallery-image.js";

const getCurrentPage = () => {
    const splitPath = window.location.pathname
        .split("/")
        .filter(string => string !== "");

    return {
        // This should be "code", "art", or "blog".
        area: splitPath[0],
        // This should be the id of a project or post, if given.
        focus: splitPath[1] || null,
    };
};

class TopLevelWrapper extends React.Component {
    state = {
        // TODO: Update page title bsed on currentPage?
        // currentPage will have the following structure:
        // {
        //     area: This should be "code", "art", or "blog".
        //     focus: This should be the id of a project or post, if given.
        // };
        currentPage: getCurrentPage(),
        mobileMenuOpen: false,
        // "active" in this case means focused/hovered.
        mobileMenuButtonActive: false,
    };

    _mounted = false;

    componentDidMount = () => {
        window.addEventListener("resize", () =>
            this.handleMobileMenuToggle(false)
        );
        window.addEventListener("popstate", this.handleBrowserBackButtonClick);
        this._mounted = true;
    };

    componentWillUnmount = () => {
        this._mounted = false;
    };

    handleBrowserBackButtonClick = () => {
        const currentPage = getCurrentPage();

        if (this._mounted) {
            this.setState({
                currentPage,
            });

            this.handleMobileMenuToggle(false);
            this.handleMobileMenuButtonToggle(false);
        }
    };

    handleClientNavigation = (event, newArea, newFocus = null) => {
        event.preventDefault();

        const {currentPage} = this.state;

        if (currentPage.area === newArea && currentPage.focus === newFocus) {
            return;
        }

        this.setState({
            currentPage: {
                area: newArea,
                focus: newFocus,
            },
        });

        const newLocation = `${window.location.origin}/${newArea}/${newFocus ||
            ""}`;
        history.pushState(null, null, newLocation);

        this.handleMobileMenuToggle(false);
        this.handleMobileMenuButtonToggle(false);

        // TODO: Handle focus.
        // TODO: Use aria alert to communicate that the contents of the page have changed.
    };

    // Toggles the focus/hover state of the mobile menu button.
    handleMobileMenuButtonToggle = nowFocused => {
        if (this.state.mobileMenuButtonActive === nowFocused) {
            return;
        }

        this.setState({mobileMenuButtonActive: nowFocused});
    };

    handleMobileMenuToggle = nowOpen => {
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

    handleMobileMenuButtonKeyUp = event => {
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

    handleLastOverlayLinkKeyDown = event => {
        if (event.key === "Tab" && !event.shiftKey) {
            event.preventDefault();

            if (this.mobileMenuButton && this.mobileMenuButton.focus) {
                this.mobileMenuButton.focus();
            }
        }
    };

    renderNavigationLinks = isHeader => {
        const {currentPage} = this.state;
        const linkClassName = isHeader ? "header-link" : "overlay-link";
        const lastLinkRef = isHeader
            ? null
            : node => (this.lastOverlayLink = node);

        // TODO: Should these be buttons? They look like links but they don't go anywhere.
        // TODO: Instead of removing a link if we're on that page, show a unresponsive text element instead.
        return (
            <div className={`${linkClassName}s`}>
                {currentPage.area !== "code" &&
                !currentPage.focus && (
                    <a
                        className={linkClassName}
                        href=""
                        onClick={event =>
                            this.handleClientNavigation(event, "code")}
                    >
                        Code
                    </a>
                )}
                {currentPage.area !== "art" &&
                !currentPage.focus && (
                    <a
                        className={linkClassName}
                        href=""
                        onClick={event =>
                            this.handleClientNavigation(event, "art")}
                    >
                        Art
                    </a>
                )}
                {/** currentPage.area !== "blog" && !currentPage.focus && (
                    <a
                        className={linkClassName}
                        href="/blog"
                        onClick={event =>
                            this.handleClientNavigation(event, "blog")}
                    >
                        Blog
                    </a>
                ) **/}
                <a
                    className={linkClassName}
                    href="http://dierat.deviantart.com/prints/"
                >
                    Prints
                </a>
                <a
                    className={linkClassName}
                    href="https://www.linkedin.com/in/dierat/"
                >
                    LinkedIn
                </a>
                <a
                    className={linkClassName}
                    href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=diedrarater@protonmail.com"
                    onKeyDown={
                        isHeader ? null : this.handleLastOverlayLinkKeyDown
                    }
                    ref={lastLinkRef}
                >
                    Contact
                </a>
            </div>
        );
    };

    renderHeader = () => {
        const {mobileMenuButtonActive, mobileMenuOpen} = this.state;

        return (
            <header>
                <nav>
                    <div className="header-name">
                        <img
                            aria-hidden
                            src="./images/icons/d-signature-icon.png"
                            className="d-signature-icon"
                        />
                        <div aria-hidden>iedra Rater</div>

                        <span className="sr-only">Diedra Rater</span>

                        <span className="header-profession">
                            &nbsp;&nbsp;|&nbsp;&nbsp;Programmer & Artist
                        </span>
                    </div>

                    {this.renderNavigationLinks(true)}

                    <button
                        id="header-menu-button"
                        ref={node => (this.mobileMenuButton = node)}
                        aria-label={
                            mobileMenuOpen ? (
                                "Close navigation menu"
                            ) : (
                                "Open navigation menu"
                            )
                        }
                        onClick={() =>
                            this.handleMobileMenuToggle(!mobileMenuOpen)}
                        onKeyUp={this.handleMobileMenuButtonKeyUp}
                        onMouseEnter={() =>
                            this.handleMobileMenuButtonToggle(true)}
                        onFocus={() => this.handleMobileMenuButtonToggle(true)}
                        onMouseLeave={() =>
                            this.handleMobileMenuButtonToggle(false)}
                        onBlur={() => this.handleMobileMenuButtonToggle(false)}
                        aria-expanded={mobileMenuOpen}
                        className={mobileMenuOpen ? "change" : ""}
                    >
                        {[1, 2, 3].map(index => {
                            let menuButtonBarClassName = `menu-button-bar-${index} menu-button-bar`;
                            if (mobileMenuButtonActive) {
                                menuButtonBarClassName += " active";
                            }

                            return (
                                <div
                                    className={menuButtonBarClassName}
                                    key={`menuButtonBar${index}`}
                                />
                            );
                        })}

                        <div className="menu-button-backdrop" />
                    </button>
                </nav>
            </header>
        );
    };

    renderGalleryPage = () => {
        const {currentPage} = this.state;

        let infoList = null;
        if (currentPage.area === "code") {
            infoList = codeInfo;
        } else if (currentPage.area === "art") {
            infoList = artInfo;
        } else {
            // TODO: Should we throw an error?
            return;
        }

        return (
            <div className="gallery">
                {infoList.map((info, index) => (
                    <GalleryImage
                        info={info}
                        index={index}
                        key={`gallery-image-${index}`}
                        handleClientNavigation={this.handleClientNavigation}
                        currentArea={currentPage.area}
                    />
                ))}
            </div>
        );
    };

    renderFocusPage = () => {
        return;
    };

    render() {
        const {
            currentPage,
            mobileMenuButtonActive,
            mobileMenuOpen,
        } = this.state;

        return (
            <React.Fragment>
                {this.renderHeader()}

                <div
                    id="menu-overlay"
                    className={!mobileMenuOpen ? "menu-closed" : ""}
                >
                    {mobileMenuOpen && this.renderNavigationLinks(false)}
                </div>

                <div id="main-content">
                    <Bio currentPage={currentPage} />

                    {currentPage.focus ? (
                        this.renderFocusPage()
                    ) : (
                        this.renderGalleryPage()
                    )}
                </div>

                <footer>
                    <span className="footer-text">© 2020 Diedra Rater</span>
                    <span className="footer-separator">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                    </span>
                    <span className="footer-text">All rights reserved</span>
                </footer>
            </React.Fragment>
        );
    }
}

const domContainer = document.querySelector("#react-mount-point");
const reactElement = React.createElement;
ReactDOM.render(reactElement(TopLevelWrapper), domContainer);
