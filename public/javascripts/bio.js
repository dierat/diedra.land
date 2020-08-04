import {artBio, codeBio} from "./bio-info.js";

class BioAvatar extends React.Component {
    render() {
        const mobileSrc = `./images/icons/avatar-0x.jpg`;
        const mobileSrcset = `
            ./images/icons/avatar-4x.jpg 3x,
            ./images/icons/avatar-3x.jpg 2x,
            ./images/icons/avatar-2x.jpg 1x,
            ./images/icons/avatar-1x.jpg 0x,
            `;
        const desktopSrc = `./images/icons/avatar-1x.jpg`;
        const desktopSrcset = `
            ./images/icons/avatar-4x.jpg 4x,
            ./images/icons/avatar-3x.jpg 3x,
            ./images/icons/avatar-2x.jpg 2x,
            ./images/icons/avatar-1x.jpg 1x,
            `;

        return (
            <div
                aria-label={
                    "Avatar for Diedra, styled as if this were the beginning of a chat conversation."
                }
            >
                <img
                    src={mobileSrc}
                    srcSet={mobileSrcset}
                    aria-hidden={true}
                    className={"bio-avatar mobile"}
                />

                <img
                    src={desktopSrc}
                    srcSet={desktopSrcset}
                    aria-hidden={true}
                    className={"bio-avatar desktop"}
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
                <BioAvatar />

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
