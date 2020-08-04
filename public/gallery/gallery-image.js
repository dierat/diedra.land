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

var imageHeights = {
    vertical: 800,
    horizontal: 450,
    square: 600,
};

var GalleryImage = (function(_React$Component) {
    _inherits(GalleryImage, _React$Component);

    function GalleryImage() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GalleryImage);

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
                    GalleryImage.__proto__ ||
                    Object.getPrototypeOf(GalleryImage)).call.apply(
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
            (_this.handleThumbClick = function(event) {
                event.preventDefault();

                var _this$props = _this.props,
                    handleClientNavigation = _this$props.handleClientNavigation,
                    currentArea = _this$props.currentArea,
                    info = _this$props.info;

                _this.props.handleClientNavigation(
                    event,
                    "code",
                    _this.props.info.name
                );
            }),
            (_this.handleThumbKeyUp = function(event) {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault(); // Why isn't this working???
                    _this.handleThumbClick(event);
                }
            }),
            _temp)),
            _possibleConstructorReturn(_this, _ret)
        );
    }

    _createClass(GalleryImage, [
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

    return GalleryImage;
})(React.Component);

export default GalleryImage;
