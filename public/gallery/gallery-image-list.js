/**
 * Setting up the gallery.
 *
 * Image sizes
 * 0x (saved as a gif):
 * 100 x 133 (vertical)
 * 100 x 75 (horizontal)
 * 100 x 100 (square)
 *
 * 1x (from here down is saved as jpg):
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
var artInfo = [
    {
        name: "nine-of-swords",
        orientation: "vertical",
        alt:
            "Digital drawing of a woman in a night gown floating in space with a seascape behind her. Below her is a beach with 4 swords, hilt-up sticking out of the sand. Above her is another ocean's surface in which she is reflected. 5 swords, blade-up, stick out of the water. Behind her is a dark sea with stormy clouds reflected in both ocean surfaces, above and below her. Her expression is melancholic.",
    },
    {
        name: "dragoness",
        orientation: "vertical",
        alt:
            "Digital drawing of a woman wearing a green and red silk dress and a red and green horned headdress. In the background is a large stained glass window with an image of a unicorn and a red dragon.",
    },
    {
        name: "trapped-faerie",
        orientation: "vertical",
        alt: "Digital drawing of a faerie caught in webs looking out a window.",
    },
    {
        name: "kenny-portrait",
        orientation: "vertical",
        alt:
            "Digital drawing of a black and white portrait of Kenny MacKenzie from the Kenny MacKenzie Trio in a suit with his arms crossed.",
    },
    {
        name: "alice",
        orientation: "vertical",
        alt:
            "Digital drawing of a black and white portrait of a woman with glasses and long, straight, dark hair.",
    },
    {
        name: "lamb-study",
        orientation: "vertical",
        alt: "Digital drawing of a lamb standing in a field of grass.",
    },
    {
        name: "maja",
        orientation: "vertical",
        alt:
            "Digital black and white drawing of a woman standing in front of a barn.",
    },
    {
        name: "bracelets-still-life",
        orientation: "horizontal",
        alt: "Digital drawing of three metal bracelets under a bright light.",
    },
    {
        name: "lemon-and-pitcher",
        orientation: "vertical",
        alt:
            "Digital drawing of a metal pitcher and a lemon sitting on some half-transparent cloth.",
    },
    {
        name: "pigeon-study",
        orientation: "square",
        alt:
            "Digital black and white drawing of a pigeon walking on a railing with trees in the background.",
    },
    {
        name: "pumpkin-study",
        orientation: "horizontal",
        alt: "Digital drawing of a fat orange pumpkin.",
    },
    {
        name: "hands-study",
        orientation: "horizontal",
        alt:
            "Digital drawing of a person seated cross-legged on a floor, wearing a skirt, with their hands in a meditative pose resting on the figure's knees. The person's shoulders and head are off-screen. The image is black and white.",
    },
    {
        name: "mobster-bach",
        orientation: "square",
        alt:
            "Digital drawing of composer Johann Sebastian Bach as an Italian mobster. He's wearing a suit and holding a gun in one hand and a cigar in the other. The image is a parody of the portrait by Elias Gottlob Haussmann",
    },
    {
        name: "the-lutenist",
        orientation: "vertical",
        alt:
            "Digital drawing of a centaur playing a lute on the edge of a cliff with a hillside landscape in the back.",
    },
    {
        name: "sky-and-sea",
        orientation: "vertical",
        alt:
            "Digital drawing of two women in a lake. One woman has hair that is part clouds and has a tattoo on her back with two swallows. She is seated on a log above the water. The other woman is standing in the water, her hair looks like a waterfall, and she has a back tattoo featuring two koi fish. She is reaching out to the first woman, who does not reach out back.",
    },
];

var codeInfo = [
    {
        name: "lohp",
        orientation: "horizontal",
        alt:
            "Screenshot of an old version of the Khan Academy homepage. The background image on the page is an illustration of a mountainous landscape during an eclipse.",
    },
];

export {artInfo, codeInfo};
