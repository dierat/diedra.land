"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { artInfo, codeInfo } from "./gallery/gallery-image-list.js";

var getCurrentPageName = function getCurrentPageName() {
    return window.location.pathname.split("").filter(function (string) {
        return string !== "/";
    }).join("");
};

var GalleryImage = function (_React$Component) {
    _inherits(GalleryImage, _React$Component);

    function GalleryImage() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GalleryImage);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GalleryImage.__proto__ || Object.getPrototypeOf(GalleryImage)).call.apply(_ref, [this].concat(args))), _this), _this._mounted = false, _this.state = {
            loading: true
        }, _this.componentDidMount = function () {
            _this._mounted = true;
        }, _this.onImageLoad = function () {
            if (_this._mounted) {
                _this.setState({ loading: false });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(GalleryImage, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                info = _props.info,
                index = _props.index;
            var loading = this.state.loading;


            var artElementLoadingImage = "./images/art/" + info.name + "/" + info.name + "-0x.gif";
            var artElementSrc = "./images/art/" + info.name + "/" + info.name + "-1x.jpg";
            var artElementSrcset = "\n            ./images/art/" + info.name + "/" + info.name + "-4x.jpg 4x,\n            ./images/art/" + info.name + "/" + info.name + "-3x.jpg 3x,\n            ./images/art/" + info.name + "/" + info.name + "-2x.jpg 2x,\n            ./images/art/" + info.name + "/" + info.name + "-1x.jpg 1x,\n            ";

            return React.createElement(
                "div",
                {
                    "aria-label": info.alt,
                    className: "art-thumb-wrapper " + info.orientation,
                    key: "art-thumb-wrapper-" + index
                },
                loading && React.createElement("img", {
                    src: artElementLoadingImage,
                    "aria-hidden": true,
                    className: "art-thumb art-thumb-loading " + info.orientation
                }),
                React.createElement("img", {
                    src: artElementSrc,
                    srcSet: artElementSrcset,
                    "aria-hidden": true,
                    className: "art-thumb " + info.orientation + " " + (this.state.loading && "hidden"),
                    onLoad: this.onImageLoad
                })
            );
        }
    }]);

    return GalleryImage;
}(React.Component);

var TopLevelWrapper = function (_React$Component2) {
    _inherits(TopLevelWrapper, _React$Component2);

    function TopLevelWrapper() {
        var _ref2;

        var _temp2, _this2, _ret2;

        _classCallCheck(this, TopLevelWrapper);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = TopLevelWrapper.__proto__ || Object.getPrototypeOf(TopLevelWrapper)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {
            // TODO: Update page title bsed on currentPage?
            currentPage: getCurrentPageName(),
            mobileMenuOpen: false,
            // "active" in this case means focused/hovered.
            mobileMenuButtonActive: false
        }, _this2.componentDidMount = function () {
            window.addEventListener("resize", function () {
                return _this2.handleMobileMenuToggle(false);
            });
        }, _this2.handleClientNavigation = function (event, newPage) {
            event.preventDefault();

            if (newPage === _this2.state.currentPage) {
                return;
            }

            _this2.setState({ currentPage: newPage });
            history.pushState(null, null, window.location.origin + "/" + newPage + "/");
            _this2.handleMobileMenuToggle(false);
            _this2.handleMobileMenuButtonToggle(false);

            // TODO: Handle focus.
            // TODO: Use aria alert to communicate that the contents of the page have changed.
        }, _this2.handleMobileMenuButtonToggle = function (nowFocused) {
            if (_this2.state.mobileMenuButtonActive === nowFocused) {
                return;
            }

            _this2.setState({ mobileMenuButtonActive: nowFocused });
        }, _this2.handleMobileMenuToggle = function (nowOpen) {
            if (_this2.state.mobileMenuOpen === nowOpen) {
                return;
            }

            _this2.setState({ mobileMenuOpen: nowOpen });

            if (nowOpen) {
                document.body.classList.add("no-scroll");
            } else {
                document.body.classList.remove("no-scroll");
            }
        }, _this2.handleMobileMenuButtonKeyUp = function (event) {
            if (event.key === " " || event.key === "Enter") {
                _this2.handleMobileMenuToggle(!_this2.state.mobileMenuOpen);
            }

            if (event.key === "Tab" && event.shiftKey) {
                event.preventDefault();

                if (_this2.lastOverlayLink && _this2.lastOverlayLink.focus) {
                    _this2.lastOverlayLink.focus();
                }
            }
        }, _this2.handleLastOverlayLinkKeyDown = function (event) {
            if (event.key === "Tab" && !event.shiftKey) {
                event.preventDefault();

                if (_this2.mobileMenuButton && _this2.mobileMenuButton.focus) {
                    _this2.mobileMenuButton.focus();
                }
            }
        }, _this2.renderNavigationLinks = function (isHeader) {
            var currentPage = _this2.state.currentPage;

            var linkClassName = isHeader ? "header-link" : "overlay-link";
            var lastLinkRef = isHeader ? null : function (node) {
                return _this2.lastOverlayLink = node;
            };

            return React.createElement(
                "div",
                { className: linkClassName + "s" },
                currentPage !== "code" && React.createElement(
                    "a",
                    {
                        className: linkClassName,
                        href: "",
                        onClick: function onClick(event) {
                            return _this2.handleClientNavigation(event, "code");
                        }
                    },
                    "Code"
                ),
                currentPage !== "art" && React.createElement(
                    "a",
                    {
                        className: linkClassName,
                        href: "",
                        onClick: function onClick(event) {
                            return _this2.handleClientNavigation(event, "art");
                        }
                    },
                    "Art"
                ),
                React.createElement(
                    "a",
                    {
                        className: linkClassName,
                        href: "http://dierat.deviantart.com/prints/"
                    },
                    "Prints"
                ),
                React.createElement(
                    "a",
                    {
                        className: linkClassName,
                        href: "https://www.linkedin.com/in/dierat/"
                    },
                    "LinkedIn"
                ),
                React.createElement(
                    "a",
                    {
                        className: linkClassName,
                        href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=diedrarater@protonmail.com",
                        onKeyDown: isHeader ? null : _this2.handleLastOverlayLinkKeyDown,
                        ref: lastLinkRef
                    },
                    "Contact"
                )
            );
        }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    // Toggles the focus/hover state of the mobile menu button.


    _createClass(TopLevelWrapper, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                currentPage = _state.currentPage,
                mobileMenuButtonActive = _state.mobileMenuButtonActive,
                mobileMenuOpen = _state.mobileMenuOpen;


            return React.createElement(
                React.Fragment,
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
                            React.createElement("img", {
                                "aria-hidden": true,
                                src: "./images/icons/d-signature-icon.png",
                                className: "d-signature-icon"
                            }),
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
                                "\xA0\xA0|\xA0\xA0Programmer & Artist"
                            )
                        ),
                        this.renderNavigationLinks(true),
                        React.createElement(
                            "button",
                            {
                                id: "header-menu-button",
                                ref: function ref(node) {
                                    return _this3.mobileMenuButton = node;
                                },
                                "aria-label": mobileMenuOpen ? "Close navigation menu" : "Open navigation menu",
                                onClick: function onClick() {
                                    return _this3.handleMobileMenuToggle(!mobileMenuOpen);
                                },
                                onKeyUp: this.handleMobileMenuButtonKeyUp,
                                onMouseEnter: function onMouseEnter() {
                                    return _this3.handleMobileMenuButtonToggle(true);
                                },
                                onFocus: function onFocus() {
                                    return _this3.handleMobileMenuButtonToggle(true);
                                },
                                onMouseLeave: function onMouseLeave() {
                                    return _this3.handleMobileMenuButtonToggle(false);
                                },
                                onBlur: function onBlur() {
                                    return _this3.handleMobileMenuButtonToggle(false);
                                },
                                "aria-expanded": mobileMenuOpen,
                                className: mobileMenuOpen ? "change" : ""
                            },
                            [1, 2, 3].map(function (index) {
                                var menuButtonBarClassName = "menu-button-bar-" + index + " menu-button-bar";
                                if (mobileMenuButtonActive) {
                                    menuButtonBarClassName += " active";
                                }

                                return React.createElement("div", {
                                    className: menuButtonBarClassName,
                                    key: "menuButtonBar" + index
                                });
                            }),
                            React.createElement("div", { className: "menu-button-backdrop" })
                        )
                    )
                ),
                React.createElement(
                    "div",
                    {
                        id: "menu-overlay",
                        className: !mobileMenuOpen ? "menu-closed" : ""
                    },
                    mobileMenuOpen && this.renderNavigationLinks(false)
                ),
                React.createElement(
                    "div",
                    { id: "main-content" },
                    currentPage === "code" && codeInfo.map(function (info, index) {
                        return React.createElement(GalleryImage, {
                            info: info,
                            index: index,
                            key: "gallery-image-" + index
                        });
                    }),
                    currentPage === "art" && artInfo.map(function (info, index) {
                        return React.createElement(GalleryImage, {
                            info: info,
                            index: index,
                            key: "gallery-image-" + index
                        });
                    }),
                    currentPage === "blog" && React.createElement(
                        "div",
                        null,
                        "I AM A BLOG FEAR ME"
                    )
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

var domContainer = document.querySelector("#react-mount-point");
var reactElement = React.createElement;
ReactDOM.render(reactElement(TopLevelWrapper), domContainer);