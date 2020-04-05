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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var artInfo = [{
    name: "nine-of-swords",
    orientation: "vertical",
    alt: "Digital drawing of a woman in a night gown floating in space with a seascape behind her. Below her is a beach with 4 swords, hilt-up sticking out of the sand. Above her is another ocean's surface in which she is reflected. 5 swords, blade-up, stick out of the water. Behind her is a dark sea with stormy clouds reflected in both ocean surfaces, above and below her. Her expression is melancholic."
}, {
    name: "dragoness",
    orientation: "vertical",
    alt: "Digital drawing of a woman wearing a green and red silk dress and a red and green horned headdress. In the background is a large stained glass window with an image of a unicorn and a red dragon."
}, {
    name: "trapped-faerie",
    orientation: "vertical",
    alt: "Digital drawing of a faerie caught in webs looking out a window."
}, {
    name: "kenny-portrait",
    orientation: "vertical",
    alt: "Digital drawing of a black and white portrait of Kenny MacKenzie from the Kenny MacKenzie Trio in a suit with his arms crossed."
}, {
    name: "alice",
    orientation: "vertical",
    alt: "Digital drawing of a black and white portrait of a woman with glasses and long, straight, dark hair."
}, {
    name: "lamb-study",
    orientation: "vertical",
    alt: "Digital drawing of a lamb standing in a field of grass."
}, {
    name: "maja",
    orientation: "vertical",
    alt: "Digital black and white drawing of a woman standing in front of a barn."
}, {
    name: "bracelets-still-life",
    orientation: "horizontal",
    alt: "Digital drawing of three metal bracelets under a bright light."
}, {
    name: "lemon-and-pitcher",
    orientation: "vertical",
    alt: "Digital drawing of a metal pitcher and a lemon sitting on some half-transparent cloth."
}, {
    name: "pumpkin-study",
    orientation: "horizontal",
    alt: "Digital drawing of a fat orange pumpkin."
}, {
    name: "hands-study",
    orientation: "horizontal",
    alt: "Digital drawing of a person seated cross-legged on a floor, wearing a skirt, with their hands in a meditative pose resting on the figure's knees. The person's shoulders and head are off-screen. The image is black and white."
}, {
    name: "mobster-bach",
    orientation: "square",
    alt: "Digital drawing of composer Johann Sebastian Bach as an Italian mobster. He's wearing a suit and holding a gun in one hand and a cigar in the other. The image is a parody of the portrait by Elias Gottlob Haussmann"
}, {
    name: "the-lutenist",
    orientation: "vertical",
    alt: "Digital drawing of a centaur playing a lute on the edge of a cliff with a hillside landscape in the back."
}, {
    name: "sky-and-sea",
    orientation: "vertical",
    alt: "Digital drawing of two women in a lake. One woman has hair that is part clouds and has a tattoo on her back with two swallows. She is seated on a log above the water. The other woman is standing in the water, her hair looks like a waterfall, and she has a back tattoo featuring two koi fish. She is reaching out to the first woman, who does not reach out back."
}];

var reactElement = React.createElement;

var TopLevelWrapper = function (_React$Component) {
    _inherits(TopLevelWrapper, _React$Component);

    function TopLevelWrapper(props) {
        _classCallCheck(this, TopLevelWrapper);

        var _this = _possibleConstructorReturn(this, (TopLevelWrapper.__proto__ || Object.getPrototypeOf(TopLevelWrapper)).call(this, props));

        _this.state = {
            mobileMenuOpen: false
        };
        return _this;
    }

    _createClass(TopLevelWrapper, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var menuButtonBarClassName = "";

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "header",
                    null,
                    React.createElement(
                        "nav",
                        null,
                        React.createElement(
                            "div",
                            { className: "header-name" },
                            React.createElement("img", { "aria-hidden": true, src: "./images/icons/d-signature-icon.png", className: "d-signature-icon" }),
                            React.createElement(
                                "div",
                                { "aria-hidden": true },
                                "iedra Rater"
                            ),
                            React.createElement(
                                "span",
                                { className: "sr-only" },
                                "Diedra Rater"
                            ),
                            React.createElement(
                                "span",
                                { className: "header-profession" },
                                "\xA0\xA0|\xA0\xA0Artist & Programmer"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "header-links" },
                            React.createElement(
                                "a",
                                { className: "header-link", href: "http://dierat.deviantart.com/prints/" },
                                "Prints"
                            ),
                            React.createElement(
                                "a",
                                { className: "header-link", href: "https://www.linkedin.com/in/dierat/" },
                                "LinkedIn"
                            ),
                            React.createElement(
                                "a",
                                { className: "header-link", href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=diedrarater@protonmail.com" },
                                "Contact"
                            )
                        ),
                        React.createElement(
                            "button",
                            {
                                id: "header-menu-button",
                                "aria-label": "Navigation menu button.",
                                onClick: function onClick() {
                                    return _this2.setState({ mobileMenuOpen: !_this2.state.mobileMenuOpen });
                                },
                                "aria-expanded": this.state.mobileMenuOpen
                            },
                            React.createElement("div", { className: "menu-button-bar-1 menu-button-bar" }),
                            React.createElement("div", { className: "menu-button-bar-2 menu-button-bar" }),
                            React.createElement("div", { className: "menu-button-bar-3 menu-button-bar" }),
                            React.createElement("div", { className: "menu-button-backdrop" })
                        )
                    )
                ),
                this.state.mobileMenuOpen && React.createElement(
                    "div",
                    { id: "menu-overlay", className: "menu-closed" },
                    React.createElement(
                        "div",
                        { className: "overlay-links" },
                        React.createElement(
                            "a",
                            { className: "overlay-link", href: "http://dierat.deviantart.com/prints/" },
                            "Prints"
                        ),
                        React.createElement(
                            "a",
                            { className: "overlay-link", href: "https://www.linkedin.com/in/dierat/" },
                            "LinkedIn"
                        ),
                        React.createElement(
                            "a",
                            { className: "overlay-link", id: "last-overlay-link", href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=diedrarater@protonmail.com" },
                            "Contact"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { id: "main-content" },
                    artInfo.map(function (info, index) {
                        var artElementSrc = "./images/art/" + info.name + "/" + info.name + "-1x.jpg";
                        var artElementSrcset = "\n                            ./images/art/" + info.name + "/" + info.name + "-4x.jpg 4x,\n                            ./images/art/" + info.name + "/" + info.name + "-3x.jpg 3x,\n                            ./images/art/" + info.name + "/" + info.name + "-2x.jpg 2x,\n                            ./images/art/" + info.name + "/" + info.name + "-1x.jpg 1x,\n                            ";

                        return React.createElement(
                            "div",
                            { className: "art-thumb-wrapper " + info.orientation, key: "art-thumb-wrapper-" + index },
                            React.createElement("img", { src: artElementSrc, srcSet: artElementSrcset, alt: info.alt, className: "art-thumb " + info.orientation })
                        );
                    })
                ),
                React.createElement(
                    "footer",
                    null,
                    React.createElement(
                        "span",
                        { className: "footer-text" },
                        "\xA9 2020 Diedra Rater"
                    ),
                    React.createElement(
                        "span",
                        { className: "footer-separator" },
                        "\xA0\xA0|\xA0\xA0"
                    ),
                    React.createElement(
                        "span",
                        { className: "footer-text" },
                        "All rights reserved"
                    )
                )
            );
        }
    }]);

    return TopLevelWrapper;
}(React.Component);

var domContainer = document.querySelector('#react-mount-point');
ReactDOM.render(reactElement(TopLevelWrapper), domContainer);

/**
 * Handling the menu overlay.
 */
var toggleMenuButtonBarsActive = function toggleMenuButtonBarsActive(newState) {
    var headerMenuButton = document.getElementById("header-menu-button");
    var barElements = Array.from(document.getElementsByClassName("menu-button-bar"));

    var testElementClassList = barElements[0].classList;

    if (newState === "active" && testElementClassList.contains("active") || newState === "inactive" && document.activeElement === headerMenuButton) {
        // Don't toggle if we're already in the right state.
        return;
    }

    barElements.forEach(function (barElement, index) {
        barElement.classList.toggle("active");
    });
};

var headerMenuButton = document.getElementById("header-menu-button");
var focusEvents = ["focus", "mouseenter"];
var unFocusEvents = ["blur", "mouseleave"];
focusEvents.forEach(function (eventName, index) {
    headerMenuButton.addEventListener(eventName, function () {
        return toggleMenuButtonBarsActive("active");
    });
});
unFocusEvents.forEach(function (eventName, index) {
    headerMenuButton.addEventListener(eventName, function () {
        return toggleMenuButtonBarsActive("inactive");
    });
});

var closeMenuOverlay = function closeMenuOverlay() {
    var menuOverlay = document.getElementById("menu-overlay");

    if (menuOverlay.classList.contains("menu-closed")) {
        return;
    }

    var hamburgerButton = document.getElementById("header-menu-button");

    menuOverlay.classList.add("menu-closed");
    document.body.classList.remove("no-scroll");
    hamburgerButton.classList.toggle("change");
};

var toggleMenuOverlay = function toggleMenuOverlay() {
    var menuOverlay = document.getElementById("menu-overlay");
    var body = document.body;

    if (menuOverlay.classList.contains("menu-closed")) {
        var hamburgerButton = document.getElementById("header-menu-button");

        menuOverlay.classList.remove("menu-closed");
        document.body.classList.add("no-scroll");
        hamburgerButton.classList.toggle("change");
    } else {
        closeMenuOverlay();
    }
};

var menuButton = document.getElementById("header-menu-button");
var lastOverlayLink = document.getElementById("last-overlay-link");

menuButton.addEventListener("click", toggleMenuOverlay);
menuButton.addEventListener("keydown", function (event) {
    var menuOverlay = document.getElementById("menu-overlay");
    if (!menuOverlay.classList.contains("menu-closed") && event.key === "Tab" && event.shiftKey) {
        event.preventDefault();
        lastOverlayLink.focus();
    }
});

lastOverlayLink.addEventListener("keydown", function (event) {
    if (event.key === "Tab" && !event.shiftKey) {
        event.preventDefault();
        menuButton.focus();
    }
});

window.addEventListener("resize", function () {
    return closeMenuOverlay();
});