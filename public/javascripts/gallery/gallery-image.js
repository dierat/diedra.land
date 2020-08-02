const imageHeights = {
    vertical: 800,
    horizontal: 450,
    square: 600,
};

export default class GalleryImage extends React.Component {
    _mounted = false;

    state = {
        loading: true,
    };

    componentDidMount = () => {
        this._mounted = true;
    };

    onImageLoad = () => {
        if (this._mounted) {
            this.setState({loading: false});
        }
    };

    render() {
        const {info, index} = this.props;
        const {loading} = this.state;

        const artElementLoadingImage = `./images/art/${info.name}/${info.name}-0x.gif`;
        const artElementSrc = `./images/art/${info.name}/${info.name}-1x.jpg`;
        const artElementSrcset = `
            ./images/art/${info.name}/${info.name}-4x.jpg 4x,
            ./images/art/${info.name}/${info.name}-3x.jpg 3x,
            ./images/art/${info.name}/${info.name}-2x.jpg 2x,
            ./images/art/${info.name}/${info.name}-1x.jpg 1x,
            `;

        return (
            <div
                aria-label={info.alt}
                className={`art-thumb-wrapper ${info.orientation}`}
                key={`art-thumb-wrapper-${index}`}
                width={600}
                height={imageHeights[info.orientation]}
            >
                {loading && (
                    <img
                        src={artElementLoadingImage}
                        aria-hidden={true}
                        className={`art-thumb art-thumb-loading ${info.orientation}`}
                    />
                )}

                <img
                    src={artElementSrc}
                    srcSet={artElementSrcset}
                    aria-hidden={true}
                    className={`art-thumb ${info.orientation} ${this.state.loading && "hidden"}`}
                    onLoad={this.onImageLoad}
                />
            </div>
        );
    }
}
