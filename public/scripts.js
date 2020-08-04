var _createClass = (function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
})();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    }
    return call && (typeof call === "object" || typeof call === "function")
        ? call
        : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError(
            "Super expression must either be null or a function, not " +
                typeof superClass
        );
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true,
        },
    });
    if (superClass)
        Object.setPrototypeOf
            ? Object.setPrototypeOf(subClass, superClass)
            : (subClass.__proto__ = superClass);
}

import {artInfo, codeInfo} from "./gallery/gallery-image-list.js";
import Bio from "./bio.js";
import GalleryImage from "./gallery/gallery-image.js";

var getCurrentPage = function getCurrentPage() {
    var splitPath = window.location.pathname
        .split("/")
        .filter(function(string) {
            return string !== "";
        });

    return {
        // This should be "code", "art", or "blog".
        area: splitPath[0],
        // This should be the id of a project or post, if given.
        focus: splitPath[1] || null,
    };
};

var TopLevelWrapper = (function(_React$Component) {
    _inherits(TopLevelWrapper, _React$Component);

    function TopLevelWrapper() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TopLevelWrapper);

        for (
            var _len = arguments.length, args = Array(_len), _key = 0;
            _key < _len;
            _key++
        ) {
            args[_key] = arguments[_key];
        }

        return (
            (_ret = ((_temp = ((_this = _possibleConstructorReturn(
                this,
                (_ref =
                    TopLevelWrapper.__proto__ ||
                    Object.getPrototypeOf(TopLevelWrapper)).call.apply(
                    _ref,
                    [this].concat(args)
                )
            )),
            _this)),
            (_this.state = {
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
            }),
            (_this._mounted = false),
            (_this.componentDidMount = function() {
                window.addEventListener("resize", function() {
                    return _this.handleMobileMenuToggle(false);
                });
                window.addEventListener(
                    "popstate",
                    _this.handleBrowserBackButtonClick
                );
                _this._mounted = true;
            }),
            (_this.componentWillUnmount = function() {
                _this._mounted = false;
            }),
            (_this.handleBrowserBackButtonClick = function() {
                var currentPage = getCurrentPage();

                if (_this._mounted) {
                    _this.setState({
                        currentPage: currentPage,
                    });

                    _this.handleMobileMenuToggle(false);
                    _this.handleMobileMenuButtonToggle(false);
                }
            }),
            (_this.handleClientNavigation = function(event, newArea) {
                var newFocus =
                    arguments.length > 2 && arguments[2] !== undefined
                        ? arguments[2]
                        : null;

                event.preventDefault();

                var currentPage = _this.state.currentPage;

                if (
                    currentPage.area === newArea &&
                    currentPage.focus === newFocus
                ) {
                    return;
                }

                _this.setState({
                    currentPage: {
                        area: newArea,
                        focus: newFocus,
                    },
                });

                var newLocation =
                    window.location.origin +
                    "/" +
                    newArea +
                    "/" +
                    (newFocus || "");
                history.pushState(null, null, newLocation);

                _this.handleMobileMenuToggle(false);
                _this.handleMobileMenuButtonToggle(false);

                // TODO: Handle focus.
                // TODO: Use aria alert to communicate that the contents of the page have changed.
            }),
            (_this.handleMobileMenuButtonToggle = function(nowFocused) {
                if (_this.state.mobileMenuButtonActive === nowFocused) {
                    return;
                }

                _this.setState({mobileMenuButtonActive: nowFocused});
            }),
            (_this.handleMobileMenuToggle = function(nowOpen) {
                if (_this.state.mobileMenuOpen === nowOpen) {
                    return;
                }

                _this.setState({mobileMenuOpen: nowOpen});

                if (nowOpen) {
                    document.body.classList.add("no-scroll");
                } else {
                    document.body.classList.remove("no-scroll");
                }
            }),
            (_this.handleMobileMenuButtonKeyUp = function(event) {
                if (event.key === " " || event.key === "Enter") {
                    _this.handleMobileMenuToggle(!_this.state.mobileMenuOpen);
                }

                if (event.key === "Tab" && event.shiftKey) {
                    event.preventDefault();

                    if (_this.lastOverlayLink && _this.lastOverlayLink.focus) {
                        _this.lastOverlayLink.focus();
                    }
                }
            }),
            (_this.handleLastOverlayLinkKeyDown = function(event) {
                if (event.key === "Tab" && !event.shiftKey) {
                    event.preventDefault();

                    if (
                        _this.mobileMenuButton &&
                        _this.mobileMenuButton.focus
                    ) {
                        _this.mobileMenuButton.focus();
                    }
                }
            }),
            (_this.renderNavigationLinks = function(isHeader) {
                var currentPage = _this.state.currentPage;

                var linkClassName = isHeader ? "header-link" : "overlay-link";
                var lastLinkRef = isHeader
                    ? null
                    : function(node) {
                          return (_this.lastOverlayLink = node);
                      };

                // TODO: Should these be buttons? They look like links but they don't go anywhere.
                // TODO: Instead of removing a link if we're on that page, show a unresponsive text element instead.
                return React.createElement(
                    "div",
                    {className: linkClassName + "s"},
                    currentPage.area !== "code" &&
                        !currentPage.focus &&
                        React.createElement(
                            "a",
                            {
                                className: linkClassName,
                                href: "",
                                onClick: function onClick(event) {
                                    return _this.handleClientNavigation(
                                        event,
                                        "code"
                                    );
                                },
                            },
                            "Code"
                        ),
                    currentPage.area !== "art" &&
                        !currentPage.focus &&
                        React.createElement(
                            "a",
                            {
                                className: linkClassName,
                                href: "",
                                onClick: function onClick(event) {
                                    return _this.handleClientNavigation(
                                        event,
                                        "art"
                                    );
                                },
                            },
                            "Art"
                        ),
                    React.createElement(
                        "a",
                        {
                            className: linkClassName,
                            href: "http://dierat.deviantart.com/prints/",
                        },
                        "Prints"
                    ),
                    React.createElement(
                        "a",
                        {
                            className: linkClassName,
                            href: "https://www.linkedin.com/in/dierat/",
                        },
                        "LinkedIn"
                    ),
                    React.createElement(
                        "a",
                        {
                            className: linkClassName,
                            href:
                                "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=diedrarater@protonmail.com",
                            onKeyDown: isHeader
                                ? null
                                : _this.handleLastOverlayLinkKeyDown,
                            ref: lastLinkRef,
                        },
                        "Contact"
                    )
                );
            }),
            (_this.renderHeader = function() {
                var _this$state = _this.state,
                    mobileMenuButtonActive = _this$state.mobileMenuButtonActive,
                    mobileMenuOpen = _this$state.mobileMenuOpen;

                return React.createElement(
                    "header",
                    null,
                    React.createElement(
                        "nav",
                        null,
                        React.createElement(
                            "div",
                            {className: "header-name"},
                            React.createElement("img", {
                                "aria-hidden": true,
                                src: "./images/icons/d-signature-icon.png",
                                className: "d-signature-icon",
                            }),
                            React.createElement(
                                "div",
                                {"aria-hidden": true},
                                "iedra Rater"
                            ),
                            React.createElement(
                                "span",
                                {className: "sr-only"},
                                "Diedra Rater"
                            ),
                            React.createElement(
                                "span",
                                {className: "header-profession"},
                                "\xA0\xA0|\xA0\xA0Programmer & Artist"
                            )
                        ),
                        _this.renderNavigationLinks(true),
                        React.createElement(
                            "button",
                            {
                                id: "header-menu-button",
                                ref: function ref(node) {
                                    return (_this.mobileMenuButton = node);
                                },
                                "aria-label": mobileMenuOpen
                                    ? "Close navigation menu"
                                    : "Open navigation menu",
                                onClick: function onClick() {
                                    return _this.handleMobileMenuToggle(
                                        !mobileMenuOpen
                                    );
                                },
                                onKeyUp: _this.handleMobileMenuButtonKeyUp,
                                onMouseEnter: function onMouseEnter() {
                                    return _this.handleMobileMenuButtonToggle(
                                        true
                                    );
                                },
                                onFocus: function onFocus() {
                                    return _this.handleMobileMenuButtonToggle(
                                        true
                                    );
                                },
                                onMouseLeave: function onMouseLeave() {
                                    return _this.handleMobileMenuButtonToggle(
                                        false
                                    );
                                },
                                onBlur: function onBlur() {
                                    return _this.handleMobileMenuButtonToggle(
                                        false
                                    );
                                },
                                "aria-expanded": mobileMenuOpen,
                                className: mobileMenuOpen ? "change" : "",
                            },
                            [1, 2, 3].map(function(index) {
                                var menuButtonBarClassName =
                                    "menu-button-bar-" +
                                    index +
                                    " menu-button-bar";
                                if (mobileMenuButtonActive) {
                                    menuButtonBarClassName += " active";
                                }

                                return React.createElement("div", {
                                    className: menuButtonBarClassName,
                                    key: "menuButtonBar" + index,
                                });
                            }),
                            React.createElement("div", {
                                className: "menu-button-backdrop",
                            })
                        )
                    )
                );
            }),
            (_this.renderGalleryPage = function() {
                var currentPage = _this.state.currentPage;

                var infoList = null;
                if (currentPage.area === "code") {
                    infoList = codeInfo;
                } else if (currentPage.area === "art") {
                    infoList = artInfo;
                } else {
                    // TODO: Should we throw an error?
                    return;
                }

                return React.createElement(
                    "div",
                    {className: "gallery"},
                    infoList.map(function(info, index) {
                        return React.createElement(GalleryImage, {
                            info: info,
                            index: index,
                            key: "gallery-image-" + index,
                            handleClientNavigation:
                                _this.handleClientNavigation,
                            currentArea: currentPage.area,
                        });
                    })
                );
            }),
            (_this.renderFocusPage = function() {
                return;
            }),
            _temp)),
            _possibleConstructorReturn(_this, _ret)
        );
    }

    // Toggles the focus/hover state of the mobile menu button.

    _createClass(TopLevelWrapper, [
        {
            key: "render",
            value: function render() {
                var _state = this.state,
                    currentPage = _state.currentPage,
                    mobileMenuButtonActive = _state.mobileMenuButtonActive,
                    mobileMenuOpen = _state.mobileMenuOpen;

                return React.createElement(
                    React.Fragment,
                    null,
                    this.renderHeader(),
                    React.createElement(
                        "div",
                        {
                            id: "menu-overlay",
                            className: !mobileMenuOpen ? "menu-closed" : "",
                        },
                        mobileMenuOpen && this.renderNavigationLinks(false)
                    ),
                    React.createElement(
                        "div",
                        {id: "main-content"},
                        React.createElement(Bio, {currentPage: currentPage}),
                        currentPage.focus
                            ? this.renderFocusPage()
                            : this.renderGalleryPage()
                    ),
                    React.createElement(
                        "footer",
                        null,
                        React.createElement(
                            "span",
                            {className: "footer-text"},
                            "\xA9 2020 Diedra Rater"
                        ),
                        React.createElement(
                            "span",
                            {className: "footer-separator"},
                            "\xA0\xA0|\xA0\xA0"
                        ),
                        React.createElement(
                            "span",
                            {className: "footer-text"},
                            "All rights reserved"
                        )
                    )
                );
            },
        },
    ]);

    return TopLevelWrapper;
})(React.Component);

var domContainer = document.querySelector("#react-mount-point");
var reactElement = React.createElement;
ReactDOM.render(reactElement(TopLevelWrapper), domContainer);
