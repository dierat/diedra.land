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
        _classCallCheck(this, BioAvatar);

        return _possibleConstructorReturn(
            this,
            (BioAvatar.__proto__ || Object.getPrototypeOf(BioAvatar))
                .apply(this, arguments)
        );
    }

    _createClass(BioAvatar, [
        {
            key: "render",
            value: function render() {
                var mobileSrc = "./images/icons/avatar-0x.jpg";
                var mobileSrcset =
                    "\n            ./images/icons/avatar-4x.jpg 3x,\n            ./images/icons/avatar-3x.jpg 2x,\n            ./images/icons/avatar-2x.jpg 1x,\n            ./images/icons/avatar-1x.jpg 0x,\n            ";
                var desktopSrc = "./images/icons/avatar-1x.jpg";
                var desktopSrcset =
                    "\n            ./images/icons/avatar-4x.jpg 4x,\n            ./images/icons/avatar-3x.jpg 3x,\n            ./images/icons/avatar-2x.jpg 2x,\n            ./images/icons/avatar-1x.jpg 1x,\n            ";

                return React.createElement(
                    "div",
                    {
                        "aria-label":
                            "Avatar for Diedra, styled as if this were the beginning of a chat conversation.",
                    },
                    React.createElement("img", {
                        src: mobileSrc,
                        srcSet: mobileSrcset,
                        "aria-hidden": true,
                        className: "bio-avatar mobile",
                    }),
                    React.createElement("img", {
                        src: desktopSrc,
                        srcSet: desktopSrcset,
                        "aria-hidden": true,
                        className: "bio-avatar desktop",
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
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, Bio);

        for (
            var _len = arguments.length, args = Array(_len), _key = 0;
            _key < _len;
            _key++
        ) {
            args[_key] = arguments[_key];
        }

        return (
            (_ret = ((_temp = ((_this2 = _possibleConstructorReturn(
                this,
                (_ref = Bio.__proto__ || Object.getPrototypeOf(Bio)).call.apply(
                    _ref,
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
                    React.createElement(BioAvatar, null),
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
            _temp)),
            _possibleConstructorReturn(_this2, _ret)
        );
    }

    return Bio;
})(React.Component);

export default Bio;
