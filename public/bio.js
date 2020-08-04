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

import {artBio, codeBio} from "./bio-info.js";

var BioAvatar = (function(_React$Component) {
    _inherits(BioAvatar, _React$Component);

    function BioAvatar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, BioAvatar);

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
                    BioAvatar.__proto__ ||
                    Object.getPrototypeOf(BioAvatar)).call.apply(
                    _ref,
                    [this].concat(args)
                )
            )),
            _this)),
            (_this._mounted = false),
            (_this.state = {
                loading: true,
            }),
            (_this.componentDidMount = function() {
                _this._mounted = true;
            }),
            (_this.onImageLoad = function() {
                if (_this._mounted) {
                    _this.setState({loading: false});
                }
            }),
            _temp)),
            _possibleConstructorReturn(_this, _ret)
        );
    }

    _createClass(BioAvatar, [
        {
            key: "render",
            value: function render() {
                var _props = this.props,
                    info = _props.info,
                    index = _props.index;
                var loading = this.state.loading;

                var artElementLoadingImage =
                    "./images/art/" + info.name + "/" + info.name + "-0x.gif";
                var artElementSrc =
                    "./images/art/" + info.name + "/" + info.name + "-1x.jpg";
                var artElementSrcset =
                    "\n            ./images/art/" +
                    info.name +
                    "/" +
                    info.name +
                    "-4x.jpg 4x,\n            ./images/art/" +
                    info.name +
                    "/" +
                    info.name +
                    "-3x.jpg 3x,\n            ./images/art/" +
                    info.name +
                    "/" +
                    info.name +
                    "-2x.jpg 2x,\n            ./images/art/" +
                    info.name +
                    "/" +
                    info.name +
                    "-1x.jpg 1x,\n            ";

                return React.createElement(
                    "div",
                    {
                        "aria-label": info.alt,
                        className: "art-thumb-wrapper " + info.orientation,
                        key: "art-thumb-wrapper-" + index,
                        width: 600,
                        height: imageHeights[info.orientation],
                    },
                    loading &&
                        React.createElement("img", {
                            src: artElementLoadingImage,
                            "aria-hidden": true,
                            className:
                                "art-thumb art-thumb-loading " +
                                info.orientation,
                        }),
                    React.createElement("img", {
                        src: artElementSrc,
                        srcSet: artElementSrcset,
                        "aria-hidden": true,
                        className:
                            "art-thumb " +
                            info.orientation +
                            " " +
                            (this.state.loading && "hidden"),
                        onLoad: this.onImageLoad,
                        tabIndex: 0,
                        onClick: this.handleThumbClick,
                        onKeyUp: this.handleThumbKeyUp,
                    })
                );
            },
        },
    ]);

    return BioAvatar;
})(React.Component);

var Bio = (function(_React$Component2) {
    _inherits(Bio, _React$Component2);

    function Bio() {
        var _ref2;

        var _temp2, _this2, _ret2;

        _classCallCheck(this, Bio);

        for (
            var _len2 = arguments.length, args = Array(_len2), _key2 = 0;
            _key2 < _len2;
            _key2++
        ) {
            args[_key2] = arguments[_key2];
        }

        return (
            (_ret2 = ((_temp2 = ((_this2 = _possibleConstructorReturn(
                this,
                (_ref2 =
                    Bio.__proto__ || Object.getPrototypeOf(Bio)).call.apply(
                    _ref2,
                    [this].concat(args)
                )
            )),
            _this2)),
            (_this2.render = function() {
                var currentPage = _this2.props.currentPage;
                // Should we show the bio anyway? But maybe change it a little.

                if (currentPage.focus) {
                    return;
                }
                var bioSections =
                    currentPage.area === "code" ? codeBio : artBio;

                // TODO: Serve up avatar the same way we do the rest of the gallery.
                return React.createElement(
                    "div",
                    {className: "bio"},
                    React.createElement("img", {
                        className: "bio-avatar",
                        src: "./images/icons/avatar.png",
                        alt:
                            "Avatar for Diedra, styled as if this were the beginning of a chat conversation.",
                    }),
                    React.createElement(
                        "div",
                        {className: "bio-text-wrapper"},
                        bioSections.map(function(bioSection, index) {
                            return React.createElement(
                                "div",
                                {
                                    className: "bio-text-section",
                                    key: "bioSection-" + index,
                                },
                                bioSection.map(function(bioMessage, index) {
                                    return React.createElement(
                                        "div",
                                        {
                                            className: "bio-text-msg",
                                            key: "bioMessage-" + index,
                                        },
                                        bioMessage
                                    );
                                })
                            );
                        })
                    )
                );
            }),
            _temp2)),
            _possibleConstructorReturn(_this2, _ret2)
        );
    }

    return Bio;
})(React.Component);

export default Bio;
