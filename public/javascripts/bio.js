import {artBio, codeBio} from "./bio-info.js";

class BioAvatar extends React.Component {
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
                    className={`art-thumb ${info.orientation} ${this.state
                        .loading && "hidden"}`}
                    onLoad={this.onImageLoad}
                    tabIndex={0}
                    onClick={this.handleThumbClick}
                    onKeyUp={this.handleThumbKeyUp}
                />
            </div>
        );
    }
}

export default class Bio extends React.Component {
    render = () => {
        const {currentPage} = this.props;
        // Should we show the bio anyway? But maybe change it a little.
        if (currentPage.focus) {
            return;
        }
        const bioSections = currentPage.area === "code" ? codeBio : artBio;

        // TODO: Serve up avatar the same way we do the rest of the gallery.
        return (
            <div className="bio">
                <img
                    className="bio-avatar"
                    src="./images/icons/avatar.png"
                    alt="Avatar for Diedra, styled as if this were the beginning of a chat conversation."
                />
                <div className="bio-text-wrapper">
                    {bioSections.map((bioSection, index) => {
                        return (
                            <div
                                className="bio-text-section"
                                key={`bioSection-${index}`}
                            >
                                {bioSection.map((bioMessage, index) => {
                                    return (
                                        <div
                                            className="bio-text-msg"
                                            key={`bioMessage-${index}`}
                                        >
                                            {bioMessage}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };
}
