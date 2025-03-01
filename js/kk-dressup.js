(function() {
const canvas = document.getElementById("kk-dressup-canvas");
const ctx = canvas.getContext("2d");

const frameWidth = 200;
const frameHeight = 200;

const selectionWidth = 60;
const selectionHeight = 60;
const spacerHeight = 10;

const allParts = {
    arms0: {
        name: "arms0",
        slot: "arms",
        layer: 1,
        src_x: 0,
        src_y: 0,
        src_w: 0,
        src_h: 0,
        off_x: 0,
        off_y: 0
    },
    arms2: {
        name: "arms2",
        slot: "arms",
        layer: 1,
        src_x: 206,
        src_y: 266,
        src_w: 70,
        src_h: 44,
        off_x: 62,
        off_y: 71,
        choiceIndex: 1
    },
    armsShishou: {
        name: "armsShishou",
        slot: "arms",
        layer: 1,
        src_x: 551,
        src_y: 336,
        src_w: 72,
        src_h: 45,
        off_x: 61,
        off_y: 70,
        choiceIndex: 20
    },
    base: {
        name: "base",
        slot: "base",
        layer: 0,
        src_x: 0,
        src_y: 200,
        src_w: 73,
        src_h: 200,
        off_x: 60,
        off_y: 0
    },
    legs0: {
        name: "bottom0",
        slot: "legs",
        layer: 4,
        src_x: 0,
        src_y: 0,
        src_w: 0,
        src_h: 0,
        off_x: 0,
        off_y: 0
    },
    bottom1: {
        name: "bottom1",
        slot: "legs",
        layer: 4,
        src_x: 127,
        src_y: 268,
        src_w: 54,
        src_h: 93,
        off_x: 70,
        off_y: 106,
        choiceIndex: 15
    },
    bottom2: {
        name: "bottom2",
        slot: "legs",
        layer: 4,
        src_x: 374,
        src_y: 200,
        src_w: 46,
        src_h: 78,
        off_x: 73,
        off_y: 111,
        choiceIndex: 19
    },
    bottomMono: {
        name: "bottomMono",
        slot: "legs",
        layer: 4,
        src_x: 420,
        src_y: 265,
        src_w: 39,
        src_h: 72,
        off_x: 79,
        off_y: 121,
        choiceIndex: 31
    },
    bottomShishou: {
        name: "bottomShishou",
        slot: "legs",
        layer: 4,
        src_x: 623,
        src_y: 200,
        src_w: 47,
        src_h: 96,
        off_x: 73,
        off_y: 98,
        choiceIndex: 23
    },
    bottomShishou2: {
        name: "bottomShishou2",
        slot: "legs",
        layer: 6,
        src_x: 551,
        src_y: 200,
        src_w: 65,
        src_h: 100,
        off_x: 64,
        off_y: 88,
        choiceIndex: 14
    },
    face0: {
        name: "face0",
        slot: "face",
        layer: 1,
        src_x: 0,
        src_y: 0,
        src_w: 0,
        src_h: 0,
        off_x: 0,
        off_y: 0
    },
    eyepatch: {
        name: "eyepatch",
        slot: "face",
        layer: 1,
        src_x: 127,
        src_y: 371,
        src_w: 23,
        src_h: 14,
        off_x: 84,
        off_y: 30,
        choiceIndex: 21
    },
    facepaintMono: {
        name: "facepaintMono",
        slot: "face",
        layer: 1,
        src_x: 374,
        src_y: 349,
        src_w: 4,
        src_h: 5,
        off_x: 99,
        off_y: 43,
        choiceIndex: 25
    },
    frecklesShishou: {
        name: "frecklesShishou",
        slot: "face",
        layer: 1,
        src_x: 551,
        src_y: 381,
        src_w: 11,
        src_h: 4,
        off_x: 89,
        off_y: 40,
        choiceIndex: 33
    },
    hair1: {
        name: "hair1",
        slot: "hair",
        layer: 2,
        src_x: 73,
        src_y: 200,
        src_w: 54,
        src_h: 62,
        off_x: 66,
        off_y: 0,
        choiceIndex: 3
    },
    hair2: {
        name: "hair2",
        slot: "hair",
        layer: 2,
        src_x: 315,
        src_y: 200,
        src_w: 59,
        src_h: 66,
        off_x: 65,
        off_y: 4,
        choiceIndex: 10
    },
    hairMono: {
        name: "hairMono",
        slot: "hair",
        layer: 2,
        src_x: 420,
        src_y: 200,
        src_w: 56,
        src_h: 65,
        off_x: 67,
        off_y: 5,
        choiceIndex: 28
    },
    hairShishou: {
        name: "hairShishou",
        slot: "hair",
        layer: 2,
        src_x: 551,
        src_y: 300,
        src_w: 43,
        src_h: 36,
        off_x: 73,
        off_y: 15,
        choiceIndex: 17
    },
    halo0: {
        name: "halo0",
        slot: "halo",
        layer: -2,
        src_x: 0,
        src_y: 0,
        src_w: 0,
        src_h: 0,
        off_x: 0,
        off_y: 0
    },
    halo1: {
        name: "halo1",
        slot: "halo",
        layer: -2,
        src_x: 73,
        src_y: 358,
        src_w: 32,
        src_h: 25,
        off_x: 79,
        off_y: 0,
        choiceIndex: 9
    },
    halo2: {
        name: "halo2",
        slot: "halo",
        layer: -2,
        src_x: 127,
        src_y: 361,
        src_w: 27,
        src_h: 10,
        off_x: 82,
        off_y: 2,
        choiceIndex: 18
    },
    hat0: {
        name: "hat0",
        slot: "hat",
        layer: 1,
        src_x: 0,
        src_y: 0,
        src_w: 0,
        src_h: 0,
        off_x: 0,
        off_y: 0
    },
    hat2: {
        name: "hat2",
        slot: "hat",
        layer: 1,
        src_x: 154,
        src_y: 361,
        src_w: 32,
        src_h: 14,
        off_x: 80,
        off_y: 5,
        choiceIndex: 24
    },
    hand0: {
        name: "hand0",
        slot: "hand",
        layer: 0,
        src_x: 0,
        src_y: 0,
        src_w: 0,
        src_h: 0,
        off_x: 0,
        off_y: 0
    },
    hand2: {
        name: "hand2",
        slot: "hand",
        layer: 10,
        src_x: 245,
        src_y: 310,
        src_w: 22,
        src_h: 34,
        off_x: 56,
        off_y: 98,
        choiceIndex: 7
    },
    handMono: {
        name: "handMono",
        slot: "hand",
        layer: 1,
        src_x: 315,
        src_y: 379,
        src_w: 68,
        src_h: 4,
        off_x: 62,
        off_y: 115,
        choiceIndex: 25
    },
    chest_accessory0: {
        name: "chest0",
        slot: "chest_accessory",
        layer: 8,
        src_x: 0,
        src_y: 0,
        src_w: 0,
        src_h: 0,
        off_x: 0,
        off_y: 0
    },
    ivbags: {
        name: "ivbags",
        slot: "chest_accessory",
        layer: 8,
        src_x: 315,
        src_y: 331,
        src_w: 41,
        src_h: 48,
        off_x: 78,
        off_y: 51,
        choiceIndex: 16
    },
    shoes0: {
        name: "shoes0",
        slot: "shoes",
        layer: 5,
        src_x: 0,
        src_y: 0,
        src_w: 0,
        src_h: 0,
        off_x: 0,
        off_y: 0
    },
    shoes2: {
        name: "shoes2",
        slot: "shoes",
        layer: 5,
        src_x: 374,
        src_y: 278,
        src_w: 38,
        src_h: 71,
        off_x: 95,
        off_y: 122,
        choiceIndex: 22
    },
    shoesMono: {
        name: "shoesMono",
        slot: "shoes",
        layer: 5,
        src_x: 420,
        src_y: 337,
        src_w: 51,
        src_h: 34,
        off_x: 72,
        off_y: 166,
        choiceIndex: 2
    },
    top0: {
        name: "top0",
        slot: "top",
        layer: 7,
        src_x: 0,
        src_y: 0,
        src_w: 0,
        src_h: 0,
        off_x: 0,
        off_y: 0
    },
    top1: {
        name: "top1",
        slot: "top",
        layer: 7,
        src_x: 127,
        src_y: 200,
        src_w: 79,
        src_h: 68,
        off_x: 56,
        off_y: 51,
        choiceIndex: 12
    },
    top2: {
        name: "top2",
        slot: "top",
        layer: 7,
        src_x: 315,
        src_y: 266,
        src_w: 41,
        src_h: 65,
        off_x: 76,
        off_y: 48,
        choiceIndex: 13
    },
    topMono: {
        name: "topMono",
        slot: "top",
        layer: 7,
        src_x: 476,
        src_y: 200,
        src_w: 75,
        src_h: 78,
        off_x: 60,
        off_y: 56,
        choiceIndex: 5
    },
    topShishou: {
        name: "topShishou",
        slot: "top",
        layer: 7,
        src_x: 623,
        src_y: 356,
        src_w: 51,
        src_h: 37,
        off_x: 70,
        off_y: 50,
        choiceIndex: 29
    },
    underwear1: {
        name: "underwear1",
        slot: "underwear",
        layer: 3,
        src_x: 73,
        src_y: 262,
        src_w: 52,
        src_h: 96,
        off_x: 70,
        off_y: 53,
        choiceIndex: 6
    },
    underwear2: {
        name: "underwear2",
        slot: "underwear",
        layer: 3,
        src_x: 206,
        src_y: 310,
        src_w: 39,
        src_h: 58,
        off_x: 78,
        off_y: 53,
        choiceIndex: 4
    },
    underwearMono: {
        name: "underwearMono",
        slot: "underwear",
        layer: 3,
        src_x: 476,
        src_y: 278,
        src_w: 37,
        src_h: 111,
        off_x: 78,
        off_y: 51,
        choiceIndex: 8
    },
    underwearShishou: {
        name: "underwearShishou",
        slot: "underwear",
        layer: 3,
        src_x: 623,
        src_y: 296,
        src_w: 26,
        src_h: 60,
        off_x: 82,
        off_y: 52,
        choiceIndex: 26
    },
    underwearShishou2: {
        name: "underwearShishou2",
        slot: "underwear",
        layer: 3,
        src_x: 513,
        src_y: 278,
        src_w: 35,
        src_h: 51,
        off_x: 79,
        off_y: 70,
        choiceIndex: 11
    },
    back0: {
        name: "wings0",
        slot: "back",
        layer: -1,
        src_x: 0,
        src_y: 0,
        src_w: 0,
        src_h: 0,
        off_x: 0,
        off_y: 0
    },
    wings1: {
        name: "wings1",
        slot: "back",
        layer: -1,
        src_x: 206,
        src_y: 200,
        src_w: 109,
        src_h: 44,
        off_x: 42,
        off_y: 50,
        choiceIndex: 27
    },
    wings2: {
        name: "wings2",
        slot: "back",
        layer: -1,
        src_x: 206,
        src_y: 244,
        src_w: 69,
        src_h: 22,
        off_x: 62,
        off_y: 50,
        choiceIndex: 30
    },
    tailShishou: {
        name: "tailShishou",
        slot: "back",
        layer: -1,
        src_x: 670,
        src_y: 200,
        src_w: 38,
        src_h: 34,
        off_x: 103,
        off_y: 110,
        choiceIndex: 32
    }
}
let invisiblePartNames = Object.keys(allParts).filter(x => x.includes("0"))
let visiblePartNames = Object.keys(allParts).filter(x => !x.includes("0") && x != "base")
let parts = [allParts.base, allParts.bottom1, allParts.hair1, allParts.halo1, allParts.top1, allParts.underwear1, allParts.wings1];
//let parts = [allParts.base, allParts.arms2, allParts.bottom2, allParts.eyepatch, allParts.hair2, allParts.halo2, allParts.hat2, allParts.ivbags, allParts.shoes2, allParts.top2, allParts.underwear2, allParts.wings2];
//let parts = [allParts.base, allParts.armsMono, allParts.bottomMono, allParts.facepaintMono, allParts.hairMono, allParts.shoesMono, allParts.topMono, allParts.underwearMono];
//let parts = [allParts.base, allParts.hairShishou, allParts.underwearShishou2, allParts.bottomShishou2, allParts.tailShishou];
//let parts = [allParts.base, allParts.armsShishou, allParts.bottomShishou, allParts.frecklesShishou, allParts.hairShishou, allParts.topShishou, allParts.underwearShishou, allParts.tailShishou]

const img = new Image();
img.onload = function() {
    const w_ratio = canvas.width/(frameWidth+selectionWidth);
    const h_ratio = canvas.height/(frameHeight+selectionHeight);

    let currentBgId = 0
    let bagOfBgIds = [1,2,3];

    function randomBg() {
        if (bagOfBgIds.length === 0) {
            bagOfBgIds = [0,1,2,3];
        }
        
        let randomIndex = getRandomInt(0, bagOfBgIds.length);
        currentBgId = bagOfBgIds.splice(randomIndex,1)[0];
        draw();
    }
    function drawBackground(bgId) {
        ctx.drawImage(img, bgId*frameWidth, 0, frameWidth, frameHeight, 0, 0, frameWidth*w_ratio, frameHeight*h_ratio);
    };

    function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBackground(currentBgId);
        parts.sort((a, b) => a.layer - b.layer);
        parts.forEach(part => {
            ctx.drawImage(img, part.src_x, part.src_y, part.src_w, part.src_h, part.off_x*w_ratio, part.off_y*h_ratio, part.src_w*w_ratio, part.src_h*h_ratio);
        });
    };

    function addPart(partName) {
        let newPart = allParts[partName];
        parts = parts.filter(part => part.slot != newPart.slot, this).concat(newPart)
        draw();
    }

    draw();

    let remainingPartNames = [];

    function resetRemaining() {
        usedPartNames = parts.map(x => x.name);
        remainingPartNames = visiblePartNames.filter(x => !usedPartNames.includes(x));
    }

    //copied from mdn docs
    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }

    function pullRandomPart(chanceOfRemoval) {
        if (remainingPartNames.length === 0) {
            resetRemaining();
            randomBg();
        }

        let usedSlots = parts.filter(x => !x.name.includes("0")).map(x => x.slot).filter(x => x != "underwear" && x != "hair" && x != "base");

        if (chanceOfRemoval && usedSlots.length > 0 && Math.random() > 0.5) {
            let randomIndex = getRandomInt(0, usedSlots.length);
            return usedSlots[randomIndex] + "0";
        } else {
            let randomIndex = getRandomInt(0, remainingPartNames.length);
            return remainingPartNames.splice(randomIndex,1)[0];
        }
    }

    function useRandomPart() {
        addPart(pullRandomPart());
    }

    let choiceNames = [];

    function randomChoices() {
        choiceNames = [
            pullRandomPart(false),
            pullRandomPart(false),
            pullRandomPart(true)
        ];
        for (let i = 0; i < 3; i++) {
            drawChoice(i);
        }
    }

    function selectionRect(index) {
        return {
            x: 200*w_ratio,
            y: index * (selectionHeight + spacerHeight) * h_ratio,
            w: selectionWidth*w_ratio,
            h: selectionHeight * h_ratio
        };
    }

    let selectionRects = [
        selectionRect(0),
        selectionRect(1),
        selectionRect(2)
    ];

    function drawChoice(index) {
        let choiceName = choiceNames[index];
        let choiceIndex;
        let cancel = choiceName.includes("0");
        let part = allParts[choiceName];
        if (cancel) {
            maybePart = parts.find(x => x.slot == allParts[choiceName].slot);
            if (maybePart) {
                part = maybePart; 
            }
        }
        if (part.hasOwnProperty('choiceIndex')) {
            choiceIndex = part.choiceIndex;
        } else {
            choiceIndex = 0;
        }
        let src_col = Math.floor(choiceIndex / 3);
        let src_row = choiceIndex % 3;
        let rect = selectionRects[index];
        ctx.drawImage(img, 0, 400, selectionWidth, selectionHeight, rect.x, rect.y, rect.w, rect.h);
        ctx.drawImage(img, src_col*selectionWidth, 400+src_row*selectionHeight, selectionWidth, selectionHeight, rect.x, rect.y, rect.w, rect.h);
        if (cancel) {
            ctx.drawImage(img, 740, 520  , selectionWidth, selectionHeight, rect.x, rect.y, rect.w, rect.h);
        }
        ctx.font = "10px serif";
        ctx.textBaseline = "top";
        ctx.fillText(choiceName, rect.x+4, rect.y + 4);
    }

    // setInterval(useRandomPart, 1000);
    randomChoices();

    function insideRect(x,y,rect) {
        return x >= rect.x && x < rect.x + rect.w && y >= rect.y && y < rect.y + rect.h;
    }

	canvas.onclick = function(event) {
        if (insideRect(event.x,event.y,selectionRects[0])) {
            addPart(choiceNames[0]);
            randomChoices();
        } else if (insideRect(event.x,event.y,selectionRects[1])) {
            addPart(choiceNames[1]);
            randomChoices();
        } else if (insideRect(event.x,event.y,selectionRects[2])) {
            addPart(choiceNames[2]);
            randomChoices();
        }
	};
};

img.src = '../images/dressup/kk-dressup.png';
}) ();