import { Scene } from 'phaser';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        let tref = this;
        // Map Tiles Generation Start
        // Map Tiles Info Array
        this.registry.set('mapInfo', []);
        let mi = this.registry.get('mapInfo');
        for (let i = 0; i <= 5; i++) {
            // Branch Tiles Info Array
            let ar = []; 
            for (let j = 0; j <= 2; j++) {
                for (let k = 0; k <= 4; k++) {
                    let rand = Phaser.Math.Between(0,9);
                    // Tile Possibility Array
                    // 0 = Menu Tile, 1 = Debuff Tile, 
                    // 2 = Unique Event Tile
                    if (rand <= 4) {
                        ar.push(0);
                    } else if (rand <= 7) {
                        ar.push(1);
                    } else {
                        ar.push(2);
                    }
                }
                // 3 = Money Tile
                ar.push(3);
            }
            mi.push(ar);
        }
        this.registry.set('mapInfo', mi);
        console.log(mi);

        // Menu Catalog
        let branch0 = [];
        let branch1 = [];
        let branch2 = [];
        let branch3 = [];
        let branch4 = [];
        let branch5 = [];
        
        //  Var  Protein, Karbohidrat, Lemak, Kalori, Uang/Biaya, ID
        let acs = [14.2 , 18.8 , 28.0 , 384, 5, "acs"];    // Ayam Goreng Cepat Saji
        let ayp = [48.6 , 0.0  , 24.2 , 425, 5, "ayp"];    // Ayam Panggang
        let bak = [7.0  , 0.0  , 5.0  , 75 , 2, "bak"];    // Bakso
        let beg = [8.55 , 0.0  , 12.78, 152, 4, "beg"];    // Bebek Goreng
        let bis = [2.8  , 17.84, 6.52 , 141, 1, "bis"];    // Biskuit
        let bcs = [12.9 , 24.5 , 9.36 , 232, 5, "bcs"];    // Burger Cepat Saji
        let das = [9.07 , 0.0  , 5.39 , 88 , 2, "das"];    // Daging Sapi
        let don = [2.12 , 18.8 , 9.96 , 174, 3, "don"];    // Donat
        let ecs = [3.82 , 23.8 , 4.37 , 146, 3, "ecs"];    // Es Krim Cepat Saji
        let hav = [1.07 , 5.27 , 0.25 , 31 , 1, "hav"];    // Havermut
        let ikl = [6.08 , 0.0  , 2.38 , 48 , 1, "ikl"];    // Ikan Lele
        let iks = [39.3 , 0.0  , 22.1 , 367, 5, "iks"];    // Ikan Salmon
        let jas = [4.03 , 20.0 , 1.48 , 108, 2, "jas"];    // Jagung Segar
        let kah = [5.98 , 15.65, 0.29 , 76 , 1, "kah"];    // Kacang Hijau
        let ken = [4.31 , 36.75, 0.19 , 162, 2, "ken"];    // Kentang
        let kcs = [2.44 , 29.4 , 10.4 , 222, 4, "kcs"];    // Kentang Goreng Cepat Saji
        let mie = [4.51 , 25.01, 2.06 , 137, 2, "mie"];    // Mie
        let mii = [8.0  , 23.8 , 4.37 , 384, 1, "mii"];    // Mie Instan
        let nas = [2.69 , 28.2 , 0.28 , 130, 1, "nas"];    // Nasi
        let ncs = [15.0 , 14.3 , 18.8 , 287, 4, "ncs"];    // Nugget Ayam Cepat Saji
        let rop = [7.49 , 30.73, 2.15 , 167, 1, "rop"];    // Roti Putih
        let sak = [6.05 , 11.62, 3.24 , 100, 1, "sak"];    // Sari Kedelai
        let sin = [1.63 , 45.72, 0.34 , 192, 1, "sin"];    // Singkong
        let sus = [6.56 , 9.34 , 6.4  , 120, 2, "sus"];    // Susu Sapi
        let tah = [8.08 , 1.87 , 4.78 , 76 , 1, "tah"];    // Tahu
        let tea = [7.06 , 0.4  , 5.33 , 80 , 1, "tea"];    // Telur Ayam
        let tem = [10.15, 3.82 , 5.4  , 86 , 1, "tem"];    // Tempe
        let uds = [7.04 , 0.0  , 0.18 , 30 , 1, "uds"];    // Udang Segar

        branch0.push(nas, das, hav, ken, mii, rop, tea, tah, tem, kah, jas, ikl, sak, sin, sus, uds);
        branch1.push(acs, bcs, kcs, ncs, ecs, don);
        branch2.push(ayp, bak, beg, das, iks, mie, nas);
        branch3.push(bak, bis, don, ecs, jas, mii, tah, tem);
        branch4.push(mie, mii, nas, ken, tah, tea, tem);
        branch5.push(bak, das, ayp, iks);

        // Game Scene Display

        this.bg = this.add.image(512, 384, 'background').setAlpha(0.5);
        let b0Image = this.add.image(377 + 125, 655 + 50, 'Branch0').setScale(1.25);
        let b1Image = this.add.image(323 + 50, 384 + 60, 'Branch1');
        let b2Image = this.add.image(824 + 100, 529 + 75, 'Branch2');
        let b3Image = this.add.image(740 + 40, 362 + 40, 'Branch3');
        let b4Image = this.add.image(520 + 40, 312 + 40, 'Branch4');
        let b5Image = this.add.image(579 + 40, 127 + 40, 'Branch5');

        // Map Tiles Display
        // Tile Coordinates
        // Branch 0 Array
        let b0a = [[196, 612], [223, 619], [253, 615], [278, 630], [308, 625], [338, 624],
                [365, 619], [395, 619], [425, 625], [455, 630], [482, 618], [512, 619],
                [539, 609], [568, 615], [595, 604], [619, 619], [645, 604], [674, 611]];
        // Branch 1 Array
        let b1a = [[177, 544], [203, 529], [233, 524], [263, 519], [293, 524], [323, 529],
                [349, 544], [378, 539], [404, 524], [428, 539], [458, 544], [487, 549],
                [517, 544], [546, 549], [575, 544], [601, 544], [630, 559], [659, 564]];
        // Branch 2 Array
        let b2a = [[775, 574], [794, 551], [816, 531], [842, 516], [869, 503], [895, 489],
                [921, 476], [941, 454], [956, 429], [965, 400], [970, 370], [973, 340],
                [973, 310], [972, 280], [970, 250], [965, 221], [954, 193], [938, 168]];
        // Branch 3 Array
        let b3a = [[746, 519], [756, 492], [741, 467], [721, 445], [698, 426], [680, 402],
                [683, 372], [698, 346], [724, 331], [754, 327], [784, 322], [814, 327],
                [844, 327], [870, 314], [893, 295], [903, 266], [906, 235], [903, 204]];
        // Branch 4 Array
        let b4a = [[845, 198], [830, 224], [806, 243], [778, 254], [750, 265], [725, 281],
                [697, 292], [667, 296], [637, 296], [607, 296], [577, 292], [547, 288],
                [517, 284], [487, 281], [460, 269], [434, 254], [411, 235], [396, 209]];
        // Branch 5 Array
        let b5a = [[821, 137], [792, 129], [762, 125], [733, 133], [707, 148], [692, 174],
                [687, 204], [681, 234], [656, 251], [627, 259], [597, 257], [570, 244],
                [554, 218], [537, 193], [512, 175], [484, 161], [454, 155], [424, 159]];
        // Tile Reference Container
        // Branch 0-5 Array Info
        let b0ai = [];
        let b1ai = [];
        let b2ai = [];
        let b3ai = [];
        let b4ai = [];
        let b5ai = [];

        // Branch Display
        // Branch 1
        let b1d = this.add.polygon(0, 0,
        [[0, -50],[-43.3, -25], [-43.3, 25], [0, 50], [43.3, 25], [43.3, -25]],
        0xd9d9d9);
        b1d.setOrigin(0,0);
        b1d.x = 138;
        b1d.y = 589;
        // Branch 2
        let b2d = this.add.polygon(0, 0,
            [[0, -50],[-43.3, -25], [-43.3, 25], [0, 50], [43.3, 25], [43.3, -25]],
            0xd9d9d9);
        b2d.setOrigin(0,0);
        b2d.x = 717;
        b2d.y = 569;
        // Branch 3
        let b3d = this.add.polygon(0, 0,
            [[0, -50],[-43.3, -25], [-43.3, 25], [0, 50], [43.3, 25], [43.3, -25]],
            0xd9d9d9);
        b3d.setOrigin(0,0);
        b3d.x = 880;
        b3d.y = 150;
        // Branch 4 / Finish Tile
        let b4d = this.add.polygon(0, 0,
            [[0, -50],[-43.3, -25], [-43.3, 25], [0, 50], [43.3, 25], [43.3, -25]],
            0xd9d9d9);
        b4d.setOrigin(0,0);
        b4d.x = 365;
        b4d.y = 160;

        // Tile Color Determinant (0 = Menu = Blue, 1 = Debuff = Red, 2 = Event = Yellow, 3 = Money = Green)
        // and Tile Creation
        for (let j = 0; j < 6; j++) {
            for (let i = 0; i < b1a.length; i++) {
                let color = [];
                if (mi[j][i] === 0) {
                    color.push(0x00ffff);
                } else if (mi[j][i] === 1) {
                    color.push(0xff0000);
                } else if (mi[j][i] === 2) {
                    color.push(0xffff00);
                } else {
                    color.push(0x00ff00);
                }
                
                if (j === 0) {
                    let tile = this.add.circle(b0a[i][0], b0a[i][1], 15, color[0]);
                    b0ai.push(tile);
                } else if (j === 1) {
                    let tile = this.add.circle(b1a[i][0], b1a[i][1], 15, color[0]);
                    b1ai.push(tile);
                } else if (j === 2) {
                    let tile = this.add.circle(b2a[i][0], b2a[i][1], 15, color[0]);
                    b2ai.push(tile);
                } else if (j === 3) {
                    let tile = this.add.circle(b3a[i][0], b3a[i][1], 15, color[0]);
                    b3ai.push(tile);
                } else if (j === 4) {
                    let tile = this.add.circle(b4a[i][0], b4a[i][1], 15, color[0]);
                    b4ai.push(tile);
                } else if (j === 5) {
                    let tile = this.add.circle(b5a[i][0], b5a[i][1], 15, color[0]);
                    b5ai.push(tile);
                }
            }
        }
        this.bai = [b0ai, b1ai, b2ai, b3ai, b4ai, b5ai];

        // Player Order Random 
        let playOrder = [];
        let ord = [1,2,3,4];

        for (let i = 0; i <= 3; i++) {      
            let index = Phaser.Math.Between(0, 3 - i);
            playOrder.push(ord[index]);
            ord.splice(index, 1);
        }
        this.playOrder2 = playOrder.slice();
        console.log(playOrder);

        // Player Variables Initialization
        // [Protein, Carbohydrates, Fat, Calories, Money, Current Tile, Branch, Finished, Score]
        this.game.p1Data = [0,0,0,0,3,-1,-1,false,0];
        this.game.p2Data = [0,0,0,0,3,-1,-1,false,0];
        this.game.p3Data = [0,0,0,0,3,-1,-1,false,0];
        this.game.p4Data = [0,0,0,0,3,-1,-1,false,0];

        // Debuff State
        this.game.p1Debuff = [false, false, 0, 0];
        this.game.p2Debuff = [false, false, 0, 0];
        this.game.p3Debuff = [false, false, 0, 0];
        this.game.p4Debuff = [false, false, 0, 0];

        // Nutrition Ratio
        this.game.p1Ratio = [0, 0, 0];
        this.game.p2Ratio = [0, 0, 0];
        this.game.p3Ratio = [0, 0, 0];
        this.game.p4Ratio = [0, 0, 0];

        let pti = 0; //Player Turn Index
        console.log('Player ' + playOrder[pti] + '\'s Turn \nRoll Dice');
        let diceRoll;
        let ini = this;       
        
        // Player Display
        this.p1 = this.add.triangle(0,0,0,0,-13,22.5,13,22.5,0xff00ff);
        this.p1.setOrigin(0,0).setDepth(5);
        this.p1.x = b1d.x - 13;
        this.p1.y = (b1d.y - 13) - 13;
        
        this.p2 = this.add.triangle(0,0,0,0,-13,22.5,13,22.5,0x0000ff);
        this.p2.setOrigin(0,0).setDepth(5);
        this.p2.x = b1d.x + 13;
        this.p2.y = (b1d.y - 13) - 13;

        this.p3 = this.add.triangle(0,0,0,0,-13,22.5,13,22.5,0xffb000);
        this.p3.setOrigin(0,0).setDepth(5);
        this.p3.x = b1d.x - 13;
        this.p3.y = (b1d.y - 13) + 13;

        this.p4 = this.add.triangle(0,0,0,0,-13,22.5,13,22.5,0x0bbb60);
        this.p4.setOrigin(0,0).setDepth(5);
        this.p4.x = b1d.x + 13;
        this.p4.y = (b1d.y - 13) + 13;

        // Player Onscreen Movement
        this.p1Buffer = true;
        this.p2Buffer = true;
        this.p3Buffer = true;
        this.p4Buffer = true;
        this.playerPos = [[this.p1.x, this.p1.y], [this.p2.x, this.p2.y], [this.p3.x, this.p3.y], [this.p4.x, this.p4.y]];

        function playerMove (player, tref) {
            console.log("moving, player " + player);
            let pData, pBuffer, pPawn, pMarginX, pMarginY;
            if (player === 1) {
                pData = tref.game.p1Data.slice();
                pBuffer = tref.p1Buffer;
                pPawn = tref.p1;
                pMarginX = -13;
                pMarginY = -13; 
            } else if (player === 2) {
                pData = tref.game.p2Data.slice();
                pBuffer = tref.p2Buffer;
                pPawn = tref.p2;
                pMarginX = 13;
                pMarginY = -13;
            } else if (player === 3) {
                pData = tref.game.p3Data.slice();
                pBuffer = tref.p3Buffer;
                pPawn = tref.p3;
                pMarginX = -13;
                pMarginY = 13;
            } else if (player === 4) {
                pData = tref.game.p4Data.slice();
                pBuffer = tref.p4Buffer;
                pPawn = tref.p4;
                pMarginX = 13;
                pMarginY = 13;
            }
            console.log("curtile is " + pData[5]);
            if (pData[5] === 18 || pData[5] === -1) {
                if (pData[6] === 2 || pData[6] === 3) {
                    pPawn.x = b2d.x + pMarginX;
                    pPawn.y = (b2d.y - 13) + pMarginY;
                } else if (pData[6] === 4 || pData[6] === 5) {
                    pPawn.x = b3d.x + pMarginX;
                    pPawn.y = (b3d.y - 13) + pMarginY;
                }
                console.log('pdata7' + pData[7]);
                if (pData[7]) {
                    pPawn.x = b4d.x + pMarginX;
                    pPawn.y = (b4d.y - 13) + pMarginY;
                }
                pData[5] = -1;
            } else {
                console.log("pData[5]" + pData[5]);
                pBuffer = false;
                pPawn.x = tref.bai[pData[6]][pData[5]].x;
                pPawn.y = tref.bai[pData[6]][pData[5]].y - 13;
            }
            if(player === 1) {
                tref.game.p1Data = pData.slice();
                tref.p1Buffer = pBuffer;
                console.log("player buffer : "+tref.p1Buffer);
            } else if(player === 2) {
                tref.game.p2Data = pData.slice();
                tref.p2Buffer = pBuffer;
                console.log("player buffer : "+tref.p2Buffer);
            } else if(player === 3) {
                tref.game.p3Data = pData.slice();
                tref.p3Buffer = pBuffer;
                console.log("player buffer : "+tref.p3Buffer);
            } else if(player === 4) {
                tref.game.p4Data = pData.slice();
                tref.p4Buffer = pBuffer;
                console.log("player buffer : "+tref.p4Buffer);
            }
        }

        // Player Stat Display
        // P1ayer 1
        let p1Box = this.add.rectangle(0,0,250,100,0xff00ff).setScrollFactor(0);
        let p1Tag = this.add.text(50, -40, 'P1', {fontSize: 64});
        let p1p = this.add.text(-125,         -54, "Protein     : " + this.game.p1Data[0] + ' gr'  + " (" + tref.game.p1Ratio[0] + "%)");
        let p1c = this.add.text(p1p.x, p1p.y + 16, "Carbos      : " + this.game.p1Data[1] + ' gr'  + " (" + tref.game.p1Ratio[1] + "%)");
        let p1f = this.add.text(p1p.x, p1c.y + 16, "Fats           : " + this.game.p1Data[2] + ' gr' + " (" + tref.game.p1Ratio[2] + "%)");
        let p1k = this.add.text(p1p.x, p1f.y + 16, "Calories    : " + this.game.p1Data[3] + ' kcal');
        let p1m = this.add.text(p1p.x, p1k.y + 16, "Money      : " + this.game.p1Data[4] + '$');
        let p1s = this.add.text(p1p.x, p1m.y + 16, "Score        : " + this.game.p1Data[8] + ' pts');
        let dia1 = this.add.text(p1Tag.x + 20, p1Box.y - 50, "Diare");
        let kra1 = this.add.text(p1Tag.x + 20, p1Box.y + 25, "Kram");
        this.p1Info = [p1Tag, p1p, p1c, p1f, p1k, p1m, p1s, dia1, kra1];
        function fontSet(item) {
            item.setFontFamily('Georgia');
            item.setColor('#ffffff');
            item.setStroke('#000000', 4);
            item.setScrollFactor(0);
        }
        this.p1Info.forEach(fontSet);       
        this.p1Info.splice(0,0,p1Box);
        this.p1Info[8].setColor('#d9d9d9');
        this.p1Info[9].setColor('#d9d9d9');
        let p1Stat = this.add.container(p1Box.width/2,p1Box.height/2, this.p1Info).setDepth(3);

        // Player 2
        let p2Box = this.add.rectangle(0,0,250,100,0x0000ff).setScrollFactor(0);
        let p2Tag = this.add.text(40, -40, 'P2', {fontSize: 64});
        let p2p = this.add.text(-125,         -54, "Protein     : " + this.game.p2Data[0] + ' gr' + " (" + tref.game.p2Ratio[0] + "%)");
        let p2c = this.add.text(p2p.x, p2p.y + 16, "Carbos      : " + this.game.p2Data[1] + ' gr' + " (" + tref.game.p2Ratio[1] + "%)");
        let p2f = this.add.text(p2p.x, p2c.y + 16, "Fats           : " + this.game.p2Data[2] + ' gr' + " (" + tref.game.p2Ratio[2] + "%)");
        let p2k = this.add.text(p2p.x, p2f.y + 16, "Calories    : " + this.game.p2Data[3] + ' kcal');
        let p2m = this.add.text(p2p.x, p2k.y + 16, "Money      : " + this.game.p2Data[4] + '$');
        let p2s = this.add.text(p2p.x, p2m.y + 16, "Score        : " + this.game.p2Data[8] + ' pts');
        let dia2 = this.add.text(p2Tag.x + 30, p2Box.y - 50, "Diare");
        let kra2 = this.add.text(p2Tag.x + 30, p2Box.y + 25, "Kram");
        this.p2Info = [p2Tag, p2p, p2c, p2f, p2k, p2m, p2s, dia2, kra2];
        this.p2Info.forEach(fontSet);
        this.p2Info.splice(0,0,p2Box);
        this.p2Info[8].setColor('#d9d9d9');
        this.p2Info[9].setColor('#d9d9d9');
        let p2Stat = this.add.container(this.game.canvas.width - p2Box.width/2,p2Box.height/2, this.p2Info).setDepth(3);

        // Player 3
        let p3Box = this.add.rectangle(0,0,250,100,0xffb000).setScrollFactor(0);
        let p3Tag = this.add.text(40, -40, 'P3', {fontSize: 64});
        let p3p = this.add.text(-125,         -54, "Protein     : " + this.game.p3Data[0] + ' gr' + " (" + tref.game.p3Ratio[0] + "%)");
        let p3c = this.add.text(p3p.x, p3p.y + 16, "Carbos      : " + this.game.p3Data[1] + ' gr' + " (" + tref.game.p3Ratio[1] + "%)");
        let p3f = this.add.text(p3p.x, p3c.y + 16, "Fats           : " + this.game.p3Data[2] + ' gr' + " (" + tref.game.p3Ratio[2] + "%)");
        let p3k = this.add.text(p3p.x, p3f.y + 16, "Calories    : " + this.game.p3Data[3] + ' kcal');
        let p3m = this.add.text(p3p.x, p3k.y + 16, "Money      : " + this.game.p3Data[4] + '$');
        let p3s = this.add.text(p3p.x, p3m.y + 16, "Score        : " + this.game.p3Data[8] + ' pts');
        let dia3 = this.add.text(p3Tag.x + 30, p3Box.y - 50, "Diare");
        let kra3 = this.add.text(p3Tag.x + 30, p3Box.y + 25, "Kram");
        this.p3Info = [p3Tag, p3p, p3c, p3f, p3k, p3m, p3s, dia3, kra3];
        this.p3Info.forEach(fontSet);
        this.p3Info.splice(0,0,p3Box);
        this.p3Info[8].setColor('#d9d9d9');
        this.p3Info[9].setColor('#d9d9d9');
        let p3Stat = this.add.container(p3Box.width/2,this.game.canvas.height - p3Box.height/2, this.p3Info).setDepth(3);

        // Player 4
        let p4Box = this.add.rectangle(0,0,250,100,0x0bbb60).setScrollFactor(0);
        let p4Tag = this.add.text(40, -40, 'P4', {fontSize: 64});
        let p4p = this.add.text(-125,         -54, "Protein     : " + this.game.p4Data[0] + ' gr' + " (" + tref.game.p4Ratio[0] + "%)");
        let p4c = this.add.text(p4p.x, p4p.y + 16, "Carbos      : " + this.game.p4Data[1] + ' gr' + " (" + tref.game.p4Ratio[1] + "%)");
        let p4f = this.add.text(p4p.x, p4c.y + 16, "Fats           : " + this.game.p4Data[2] + ' gr' + " (" + tref.game.p4Ratio[2] + "%)");
        let p4k = this.add.text(p4p.x, p4f.y + 16, "Calories    : " + this.game.p4Data[3] + ' kcal');
        let p4m = this.add.text(p4p.x, p4k.y + 16, "Money      : " + this.game.p4Data[4] + '$');
        let p4s = this.add.text(p4p.x, p4m.y + 16, "Score        : " + this.game.p4Data[8] + ' pts');
        let dia4 = this.add.text(p4Tag.x + 30, p4Box.y - 50, "Diare");
        let kra4 = this.add.text(p4Tag.x + 30, p4Box.y + 25, "Kram");
        this.p4Info = [p4Tag, p4p, p4c, p4f, p4k, p4m, p4s, dia4, kra4];
        this.p4Info.forEach(fontSet);
        this.p4Info.splice(0,0,p4Box);
        this.p4Info[8].setColor('#d9d9d9');
        this.p4Info[9].setColor('#d9d9d9');
        let p4Stat = this.add.container(this.game.canvas.width - p4Box.width/2,this.game.canvas.height - p4Box.height/2, this.p4Info).setDepth(3);

        // Turn Text
        let turnOrderText = this.add.text(p1Box.x, p1Box.y + 120, "Turn Order : " + playOrder);
        turnOrderText.setFontFamily('Arial Black').setFontSize(22).setColor('#ffffff').setStroke('#000000',8).setAlign('center');
        this.turns = 0;
        this.turnsText = this.add.text(this.game.canvas.width/2, 10, "Turn " + (this.turns + 1));
        this.turnsText.setFontFamily('Arial Black').setFontSize(38).setColor('#ffffff').setStroke('#000000',8).setAlign('center');
        this.turnsText.x -= this.turnsText.width/2;
        this.pturnText = this.add.text(this.game.canvas.width/2, this.turnsText.y + 50, "Player " + playOrder[pti] + "\'s Turn");
        this.pturnText.setFontFamily('Arial Black').setFontSize(38).setColor('#ffffff').setStroke('#000000',8).setAlign('center');
        this.pturnText.x -= this.pturnText.width/2;

        // Dice Animation
        this.dice = this.add.sprite(this.game.canvas.width/2, this.game.canvas.height/2, 'dice').setScale(2).setDepth(10);
        this.dice.setInteractive();
        this.anims.create({
            key: 'rolling',
            frames: this.anims.generateFrameNumbers('dice'),
            frameRate: 6,
            repeat: -1
        });
        this.anims.create({
            key: 'slowing',
            frames: this.anims.generateFrameNumbers('dice'),
            frameRate: 3,
            repeat: -1
        });
        this.dice.play('rolling');

        // Card Selection Display
        function cardSelect(mode, choices, tref) {
            let card1, card2, card3, select;
            if (mode === 1) { // Menu Tile
                card1 = tref.add.image(312, 384, choices[0][5]).setInteractive().setDepth(10);
                card2 = tref.add.image(512, 384, choices[1][5]).setInteractive().setDepth(10);
                card3 = tref.add.image(712, 384, choices[2][5]).setInteractive().setDepth(10);
                select = [card1, card2, card3];
            } else if (mode === 2 || mode === 3) { // Debuff / Event Tile
                card1 = tref.add.image(512, 384, choices).setInteractive().setDepth(10);
                select = card1;
            }
            return select 
        }

        // Update Player Status Text
        function updateText(player, tref) {
            console.log("updateText");
            getRatio(tref);
            if (player === 1) {
                console.log("update1");
                tref.p1Info[2].setText("Protein     : " + tref.game.p1Data[0] + ' gr' + " (" + tref.game.p1Ratio[0] + "%)");
                tref.p1Info[3].setText("Carbos      : " + tref.game.p1Data[1] + ' gr' + " (" + tref.game.p1Ratio[1] + "%)");
                tref.p1Info[4].setText("Fats           : " + tref.game.p1Data[2] + ' gr' + " (" + tref.game.p1Ratio[2] + "%)");
                tref.p1Info[5].setText("Calories    : " + tref.game.p1Data[3] + ' kcal');
                tref.p1Info[6].setText("Money      : " + tref.game.p1Data[4] + '$');
                tref.p1Info[7].setText("Score        : " + tref.game.p1Data[8] + ' pts');
            } else if (player === 2) {
                console.log("update2");
                tref.p2Info[2].setText("Protein     : " + tref.game.p2Data[0] + ' gr' + " (" + tref.game.p2Ratio[0] + "%)");
                tref.p2Info[3].setText("Carbos      : " + tref.game.p2Data[1] + ' gr' + " (" + tref.game.p2Ratio[1] + "%)");
                tref.p2Info[4].setText("Fats           : " + tref.game.p2Data[2] + ' gr' + " (" + tref.game.p2Ratio[2] + "%)");
                tref.p2Info[5].setText("Calories    : " + tref.game.p2Data[3] + ' kcal');
                tref.p2Info[6].setText("Money      : " + tref.game.p2Data[4] + '$');
                tref.p2Info[7].setText("Score        : " + tref.game.p2Data[8] + ' pts');
            } else if (player === 3) {
                console.log("update3");
                tref.p3Info[2].setText("Protein     : " + tref.game.p3Data[0] + ' gr' + " (" + tref.game.p3Ratio[0] + "%)");
                tref.p3Info[3].setText("Carbos      : " + tref.game.p3Data[1] + ' gr' + " (" + tref.game.p3Ratio[1] + "%)");
                tref.p3Info[4].setText("Fats           : " + tref.game.p3Data[2] + ' gr' + " (" + tref.game.p3Ratio[2] + "%)");
                tref.p3Info[5].setText("Calories    : " + tref.game.p3Data[3] + ' kcal');
                tref.p3Info[6].setText("Money      : " + tref.game.p3Data[4] + '$');
                tref.p3Info[7].setText("Score        : " + tref.game.p3Data[8] + ' pts');
            } else if (player === 4) {
                console.log("update4");
                tref.p4Info[2].setText("Protein     : " + tref.game.p4Data[0] + ' gr' + " (" + tref.game.p4Ratio[0] + "%)");
                tref.p4Info[3].setText("Carbos      : " + tref.game.p4Data[1] + ' gr' + " (" + tref.game.p4Ratio[1] + "%)");
                tref.p4Info[4].setText("Fats           : " + tref.game.p4Data[2] + ' gr' + " (" + tref.game.p4Ratio[2] + "%)");
                tref.p4Info[5].setText("Calories    : " + tref.game.p4Data[3] + ' kcal');
                tref.p4Info[6].setText("Money      : " + tref.game.p4Data[4] + '$');
                tref.p4Info[7].setText("Score        : " + tref.game.p4Data[8] + ' pts');
            }
        }

        // Turns Text Onscreen Update 
        function updateTurns(playOrder, tref) {
            console.log("updateTurns");
            tref.turns++;
            console.log("Game Turn : " + tref.turns);
            tref.turnsText.setText('Turn ' + (tref.turns + 1));
            console.log('Player ' + playOrder[pti] + '\'s Turn!');
            tref.pturnText.setText('Player ' + playOrder[pti] + '\'s Turn');
        }

        // Menu Value Add Processing
        function addMenu(pd, chosen, dia) {
            if (!dia) { // Not debuffed (diarrhea) 
                pd[0] += chosen[0];
                pd[1] += chosen[1];
                pd[2] += chosen[2];
                pd[3] += chosen[3];
            } else { // Debuffed (diarrhea)
                pd[0] += Math.round((chosen[0] / 2) * 100) / 100;
                pd[1] += Math.round((chosen[1] / 2) * 100) / 100;
                pd[2] += Math.round((chosen[2] / 2) * 100) / 100;
                pd[3] += Math.round(chosen[3] / 2);
            }
            pd[0] = Math.round(pd[0] * 100) / 100;
            pd[1] = Math.round(pd[1] * 100) / 100;
            pd[2] = Math.round(pd[2] * 100) / 100;
            pd[4] -= chosen[4];
            return pd;
        }

        function getRatio(tref) {
            let data, ratio;
            if (playOrder[pti] === 1) {
                data = tref.game.p1Data;
                ratio = tref.game.p1Ratio;
            } else if (playOrder[pti] === 2) {
                data = tref.game.p2Data;
                ratio = tref.game.p2Ratio;
            } else if (playOrder[pti] === 3) {
                data = tref.game.p3Data;
                ratio = tref.game.p3Ratio;
            } else if (playOrder[pti] === 4) {
                data = tref.game.p4Data;
                ratio = tref.game.p4Ratio;
            }
            console.log(data);
            let total = data[0] + data[1] + data[2];
            if (total != 0) {
                ratio[0] = Math.round(data[0] * 100 / total);
                ratio[1] = Math.round(data[1] * 100 / total);
                ratio[2] = Math.round(data[2] * 100 / total);
            } else {
                ratio[0] = 0;
                ratio[1] = 0
                ratio[2] = 0;
            }
            console.log(ratio);
        }

        // Menu Tile Process
        function stopMenu(pd, choices, player, tref) {
            console.log("stopMenu");
            console.log("pd " + pd);
            let mon = pd[4];
            let playerDebuffState;
            if (player === 1) {
                playerDebuffState = tref.game.p1Debuff[0];
            } else if (player === 2) {
                playerDebuffState = tref.game.p2Debuff[0];
            } else if (player === 3) {
                playerDebuffState = tref.game.p3Debuff[0];
            } else if (player === 4) {
                playerDebuffState = tref.game.p4Debuff[0];
            }

            // Display Options
            let select = cardSelect(1, choices, tref);
            let skipBtn = tref.add.rectangle(512, 600, 200, 100, 0xffffff).setInteractive().setDepth(10);
            let skipTxt = tref.add.text(skipBtn.x, skipBtn.y, "Skip", {
                fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
                stroke: '#000000', strokeThickness: 8,
                align: 'center'
            }).setOrigin(0.5).setDepth(10);

            // Player Input
            let chosen;
            tref.input.on('gameobjectdown', function(pointer, gameObject) {
                // Card Selection and Money Check
                if ((gameObject === select[0] && mon < choices[0][4]) ||
                (gameObject === select[1] && mon < choices[1][4]) ||
                (gameObject === select[2] && mon < choices[2][4])) {
                    // Play sound buzzer for not enough money
                } else if (gameObject === select[0] && mon >= choices[0][4]) {
                    // Menu Option 1
                    chosen = choices[0];
                    pd = addMenu(pd, chosen, playerDebuffState);
                    console.log("Menu 1");
                    select.forEach(element => {
                        element.disableInteractive().setScale(0);
                    });
                    skipBtn.disableInteractive().setScale(0);
                    skipTxt.setScale(0);                   
                    console.log("pd " + pd);
                    console.log('playerorder : ' + player);

                    // Save Changes
                    if(player === 1) {
                        tref.game.p1Data = pd.slice();
                    } else if (player === 2) {
                        tref.game.p2Data = pd.slice();
                    } else if (player === 3) {
                        tref.game.p3Data = pd.slice();
                    } else if (player === 4) {
                        tref.game.p4Data = pd.slice();
                    }
                    updateText(player, tref);
                    tref.dice.setScale(2);
                    tref.dice.play('rolling');

                    // Change Turns
                    // console.log("ptia :" + pti);                   
                    turnChange(tref);
                    // console.log("ptia :" + pti);                  
                    updateTurns(tref.playOrder2, tref);
                    
                } else if (gameObject === select[1] && mon >= choices[1][4]) {
                    // Menu Option 2
                    chosen = choices[1];
                    pd = addMenu(pd, chosen, playerDebuffState);
                    console.log("Menu 2");
                    select.forEach(element => {
                        element.disableInteractive().setScale(0);
                    });
                    skipBtn.disableInteractive().setScale(0);
                    skipTxt.setScale(0);                  
                    console.log("pd " + pd);
                    console.log('playerorder : ' + player);

                    // Save Changes
                    if(player === 1) {
                        tref.game.p1Data = pd.slice();
                    } else if (player === 2) {
                        tref.game.p2Data = pd.slice();
                    } else if (player === 3) {
                        tref.game.p3Data = pd.slice();
                    } else if (player === 4) {
                        tref.game.p4Data = pd.slice();
                    }
                    updateText(player, tref);
                    tref.dice.setScale(2);
                    tref.dice.play('rolling');

                    // Change Turns
                    // console.log("ptib :" + pti);
                    turnChange(tref);
                    // console.log("ptib :" + pti);                   
                    updateTurns(tref.playOrder2, tref);
                    
                } else if (gameObject === select[2] && mon >= choices[2][4]) {
                    // Menu Option 3
                    chosen = choices[2];
                    pd = addMenu(pd, chosen, playerDebuffState);
                    console.log("Menu 3");                       
                    select.forEach(element => {
                        element.disableInteractive().setScale(0);
                    });
                    skipBtn.disableInteractive().setScale(0);
                    skipTxt.setScale(0);                                     
                    console.log("pd " + pd);
                    console.log('playerorder : ' + player);

                    // Save Changes
                    if(player === 1) {
                        tref.game.p1Data = pd.slice();
                    } else if (player === 2) {
                        tref.game.p2Data = pd.slice();
                    } else if (player === 3) {
                        tref.game.p3Data = pd.slice();
                    } else if (player === 4) {
                        tref.game.p4Data = pd.slice();
                    }
                    updateText(player, tref);
                    tref.dice.setScale(2);
                    tref.dice.play('rolling');

                    // Change Turns
                    // console.log("ptic :" + pti);                   
                    turnChange(tref);
                    // console.log("ptic :" + pti);                  
                    updateTurns(tref.playOrder2, tref);
                    
                } else if (gameObject === skipBtn) {
                    // Skip Button
                    console.log("Skip Button");
                    select.forEach(element => {
                        element.disableInteractive().setScale(0);
                    });                   
                    skipBtn.disableInteractive().setScale(0);
                    skipTxt.setScale(0);                   
                    tref.dice.setScale(2);
                    tref.dice.play('rolling');

                    // Change Turns
                    // console.log("ptid :" + pti);
                    turnChange(tref);
                    // console.log("ptid :" + pti);
                    updateTurns(tref.playOrder2, tref);
                    
                }               
            });
        }

        // Debuff Tile Process
        function stopDebuff(pd, debuff, player, tref) {
            console.log("stopDebuff");
            let select = cardSelect(2, debuff, tref);
            let playerDebuff;
            let playerRef;

            // Get Player References
            if(player === 1) {
                playerDebuff = tref.game.p1Debuff;
                playerRef = tref.p1Info;
            } else if (player === 2) {
                playerDebuff = tref.game.p2Debuff;
                playerRef = tref.p2Info;
            } else if (player === 3) {
                playerDebuff = tref.game.p3Debuff;
                playerRef = tref.p3Info;
            } else if (player === 4) {
                playerDebuff = tref.game.p4Debuff;
                playerRef = tref.p4Info;
            }
            console.log(playerDebuff);

            // Player Input
            let mode = 1;
            tref.input.on('gameobjectdown', function(pointer, gameObject) {
                if (gameObject === select && mode === 1) {
                    console.log("debuff : " + debuff);
                    if (debuff === "mun") { // Muntah
                        if (pd[0] === 0 || pd[1] === 0 || pd[2] === 0) {
                            pd[8] -= 200;
                        }
                        pd[0] -= 20;
                        pd[1] -= 40;
                        pd[2] -= 10;
                    } else if (debuff === "dia") { // Diare
                        playerDebuff[0] = true;
                        playerDebuff[2] = 3;
                        pd[8] -= 100;
                        playerRef[8].setColor('#ff0000');
                    } else if (debuff === "kra") { // Kram
                        playerDebuff[1] = true;
                        playerDebuff[3] = 3;
                        pd[8] -= 100;
                        playerRef[9].setColor('#ff0000');
                    } else if (debuff === "pen") { // Pendarahan
                        pd[0] -= 50;
                        pd[8] -= 100;
                    } else if (debuff === "ket") { // Ketosis
                        pd[2] -= 25;
                        pd[8] -= 100;
                    } else if (debuff === "peg") { // Penyakit Graves
                        pd[1] -= 100;
                        pd[8] -= 100;
                    }
                    pd[0] = Math.round(pd[0] * 100) / 100;
                    pd[1] = Math.round(pd[1] * 100) / 100;
                    pd[2] = Math.round(pd[2] * 100) / 100;
                    
                    // If Below 0 Set to 0
                    if (pd[0] < 0) {
                        pd[0] = 0;
                    }
                    if (pd[1] < 0) {
                        pd[1] = 0;
                    }
                    if (pd[2] < 0) {
                        pd[2] = 0;
                    }

                    // Save Changes
                    if(player === 1) {
                        tref.game.p1Data = pd.slice();
                        tref.game.p1Debuff = playerDebuff.slice()
                    } else if (player === 2) {
                        tref.game.p2Data = pd.slice();
                        tref.game.p2Debuff = playerDebuff.slice()
                    } else if (player === 3) {
                        tref.game.p3Data = pd.slice();
                        tref.game.p3Debuff = playerDebuff.slice()
                    } else if (player === 4) {
                        tref.game.p4Data = pd.slice();
                        tref.game.p4Debuff = playerDebuff.slice()
                    }
                    
                    console.log(playerDebuff);
                    select.disableInteractive().setScale(0);                  
                    updateText(player, tref);
                    tref.dice.setScale(2);
                    tref.dice.play('rolling');

                    // Change Turns
                    // console.log("ptie :" + pti);                   
                    turnChange(tref);
                    // console.log("ptie :" + pti);                  
                    updateTurns(tref.playOrder2, tref);
                    
                }
            });
        }

        // Event Tile Process
        function stopEvent(event, tref) {
            console.log("stopEvent");
            let select = cardSelect(3, event, tref);
            let mode = 2;

            // Event Start
            tref.input.on('gameobjectdown', function(pointer, gameObject) {
                if (gameObject === select && mode === 2) {
                    select.setScale(0).disableInteractive();
                    console.log("Event Started");
                    tref.turnsText.setScale(0);
                    tref.pturnText.setScale(0);
                    let pTurn = 1;
                    let pText = tref.add.text(tref.game.canvas.width/2, 10, "Player " + pTurn + "\'s Turn");
                    pText.setFontFamily('Arial Black').setFontSize(38).setColor('#ffffff').setStroke('#000000',8).setAlign('center');
                    pText.x -= pText.width/2;
                    let eventDice = tref.add.sprite(tref.game.canvas.width/2, tref.game.canvas.height/2, 'dice').setScale(2);
                    eventDice.setInteractive();
                    eventDice.play("rolling");
                    let maxRoll = 0;
                    let maxPlayer = [];
                    
                    // Player Input
                    tref.input.on('gameobjectdown', function(pointer, gameObject) {
                        // Player 1
                        if (gameObject === eventDice && pTurn === 1) {
                            let diceRand = Phaser.Math.Between(1, 6);
                            eventDice.play("slowing");
                            eventDice.disableInteractive();
                            tref.time.delayedCall(1500, () => {
                                eventDice.stop();
                                eventDice.setFrame(diceRand - 1);
                                if (maxRoll < diceRand) {
                                    maxRoll = diceRand;
                                    maxPlayer.length = 0;
                                    maxPlayer.push(pTurn);
                                } else if (maxRoll === diceRand) {
                                    maxPlayer.push(pTurn);
                                }
                                if (event === "lmk") {
                                    tref.game.p1Data[0] += diceRand;
                                    tref.game.p1Data[1] += diceRand * 13;
                                    tref.game.p1Data[3] += diceRand * 55;
                                } else if (event === "lsk") {
                                    tref.game.p1Data[3] -= diceRand * 100;
                                } else if (event === "mia") {
                                    if (diceRand > 3) {
                                        tref.game.p1Debuff = [false,false, 0, 0];
                                    }
                                }
                                tref.time.delayedCall(1000, () => {                                   
                                    updateText(pTurn, tref);
                                    pTurn++;
                                    pText.setText("Player " + pTurn + "\'s Turn");
                                    eventDice.setInteractive();
                                    eventDice.play("rolling");
                                });
                            });  
                        }

                        // Player 2
                        if (gameObject === eventDice && pTurn === 2) {
                            let diceRand = Phaser.Math.Between(1, 6);
                            eventDice.play("slowing");
                            eventDice.disableInteractive();
                            tref.time.delayedCall(1500, () => {
                                eventDice.stop();
                                eventDice.setFrame(diceRand - 1);
                                if (maxRoll < diceRand) {
                                    maxRoll = diceRand;
                                    maxPlayer.length = 0;
                                    maxPlayer.push(pTurn);
                                } else if (maxRoll === diceRand) {
                                    maxPlayer.push(pTurn);
                                }
                                if (event === "lmk") {
                                    tref.game.p2Data[0] += diceRand;
                                    tref.game.p2Data[1] += diceRand * 13;
                                    tref.game.p2Data[3] += diceRand * 55;
                                } else if (event === "lsk") {
                                    tref.game.p2Data[3] -= diceRand * 100;
                                } else if (event === "mia") {
                                    if (diceRand > 3) {
                                        tref.game.p2Debuff = [false,false, 0, 0];
                                    }
                                }
                                tref.time.delayedCall(1500, () => {                                   
                                    updateText(pTurn, tref);
                                    pTurn++;
                                    pText.setText("Player " + pTurn + "\'s Turn");
                                    eventDice.setInteractive();
                                    eventDice.play("rolling");
                                });
                            });
                        }

                        // Player 3
                        if (gameObject === eventDice && pTurn === 3) {
                            let diceRand = Phaser.Math.Between(1, 6);
                            eventDice.play("slowing");
                            eventDice.disableInteractive();
                            tref.time.delayedCall(1500, () => {
                                eventDice.stop();
                                eventDice.setFrame(diceRand - 1);
                                if (maxRoll < diceRand) {
                                    maxRoll = diceRand;
                                    maxPlayer.length = 0;
                                    maxPlayer.push(pTurn);
                                } else if (maxRoll === diceRand) {
                                    maxPlayer.push(pTurn);
                                }
                                if (event === "lmk") {
                                    tref.game.p3Data[0] += diceRand;
                                    tref.game.p3Data[1] += diceRand * 13;
                                    tref.game.p3Data[3] += diceRand * 55;
                                } else if (event === "lsk") {
                                    tref.game.p3Data[3] -= diceRand * 100;
                                } else if (event === "mia") {
                                    if (diceRand > 3) {
                                        tref.game.p3Debuff = [false,false, 0, 0];
                                    }
                                }
                                tref.time.delayedCall(1000, () => {                                  
                                    updateText(pTurn, tref);
                                    pTurn++;
                                    pText.setText("Player " + pTurn + "\'s Turn");
                                    eventDice.setInteractive();
                                    eventDice.play("rolling");
                                });
                            });
                        }

                        // Player 4
                        if (gameObject === eventDice && pTurn === 4) {
                            let diceRand = Phaser.Math.Between(1, 6);
                            eventDice.play("slowing");
                            eventDice.disableInteractive();
                            tref.time.delayedCall(1500, () => {
                                eventDice.stop();
                                eventDice.setFrame(diceRand - 1);
                                if (maxRoll < diceRand) {
                                    maxRoll = diceRand;
                                    maxPlayer.length = 0;
                                    maxPlayer.push(pTurn);
                                } else if (maxRoll === diceRand) {
                                    maxPlayer.push(pTurn);
                                }
                                if (event === "lmk") {
                                    tref.game.p4Data[0] += diceRand;
                                    tref.game.p4Data[1] += diceRand * 13;
                                    tref.game.p4Data[3] += diceRand * 55;
                                } else if (event === "lsk") {
                                    tref.game.p4Data[3] -= diceRand * 100;
                                } else if (event === "mia") {
                                    if (diceRand > 3) {
                                        tref.game.p4Debuff = [false,false, 0, 0];
                                    }
                                }
                                tref.time.delayedCall(1000, () => {
                                    pText.setScale(0);
                                    eventDice.setScale(0).disableInteractive();
                                    eventGivePoint(event, maxPlayer, tref);
                                    tref.turnsText.setScale(1);
                                    tref.pturnText.setScale(1);                                                                        
                                    updateText(pTurn, tref);
                                    tref.dice.setScale(2);
                                    tref.dice.play('rolling');
                                    // console.log("ptif :" + pti);
                                    turnChange(tref);
                                    // console.log("ptif :" + pti);
                                    updateTurns(tref.playOrder2, tref);
                                    
                                });
                            });
                        }
                    });                   
                }
            });
        }

        // Event Scores Processing
        function eventGivePoint(event, maxPlayer, tref) {
            console.log("eventGivePoint");
            // console.log("event: " + event);
            // console.log("Player " + maxPlayer);
            let arr = [];
            for (let i = 0; i < maxPlayer.length; i++) {
                arr.push(maxPlayer[i]);
            }
            if (event === "lmk" || event === "lsk") {
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] === 1) {
                        tref.game.p1Data[8] += 100;
                        updateText(1, tref);
                    } else if (arr[i] === 2) {
                        tref.game.p2Data[8] += 100;
                        updateText(2, tref);
                    } else if (arr[i] === 3) {
                        tref.game.p3Data[8] += 100;
                        updateText(3, tref);
                    } else if (arr[i] === 4) {
                        tref.game.p4Data[8] += 100;
                        updateText(4, tref);
                    }
                }
            } else if (event === "mia") {
                tref.game.p1Data[8] += 50;
                tref.game.p2Data[8] += 50;
                tref.game.p3Data[8] += 50;
                tref.game.p4Data[8] += 50;
                updateText(1, tref);
                updateText(2, tref);
                updateText(3, tref);
                updateText(4, tref);
            }
        }

        // Branch Tile Process
        function stopBranch (player, diceRoll, tref) {
            console.log("stopBranch");
            // Select Branch Before Rolling Dice
            tref.dice.disableInteractive().setScale(0);

            // Get Player References
            let pd, playerDebuffState;
            if (player === 1) {
                pd = tref.game.p1Data.slice();
                playerDebuffState = tref.game.p1Debuff;
            } else if (player === 2) {
                pd = tref.game.p2Data.slice();
                playerDebuffState = tref.game.p2Debuff;
            } else if (player === 3) {
                pd = tref.game.p3Data.slice();
                playerDebuffState = tref.game.p3Debuff;
            } else if (player === 4) {
                pd = tref.game.p4Data.slice();
                playerDebuffState = tref.game.p4Debuff;
            }

            console.log("branch bef : " + pd[6]);
            let selection = pd[6];         
            let sqText  = tref.add.text(tref.game.canvas.width/2, tref.game.canvas.width/2 - 300, "Choose Branch", {
                fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
                stroke: '#000000', strokeThickness: 8,
                align: 'center'
            }).setOrigin(0.5);
            let sqA1 = tref.add.rectangle(tref.game.canvas.width/2 - 200, tref.game.canvas.height/2, 250, 250, 0xffffff);
            sqA1.setAlpha(0.5).setDepth(6);
            let sqB1 = tref.add.rectangle(tref.game.canvas.width/2 + 200, tref.game.canvas.height/2, 250, 250, 0xffffff);
            sqB1.setAlpha(0.5).setDepth(6);

            // Branch Selection Choices
            let branchA, branchB;
            if (selection === -1) {
                // Branch 0 or 1
                branchA = tref.add.image(tref.game.canvas.width/2 - 200, tref.game.canvas.height/2, 'Branch0');
                branchA.setInteractive().setDisplaySize(150, 150).setDepth(6);
                branchB = tref.add.image(tref.game.canvas.width/2 + 200, tref.game.canvas.height/2, 'Branch1');
                branchB.setInteractive().setDisplaySize(150, 150).setDepth(6);
                selection = 0;
            } else if (selection === 0 || selection === 1) {
                // Branch 2 or 3
                branchA = tref.add.image(tref.game.canvas.width/2 - 200, tref.game.canvas.height/2, 'Branch2');
                branchA.setInteractive().setDisplaySize(150, 150).setDepth(6);
                branchB = tref.add.image(tref.game.canvas.width/2 + 200, tref.game.canvas.height/2, 'Branch3');
                branchB.setInteractive().setDisplaySize(150, 150).setDepth(6);
                selection = 1;
            } else if (selection === 2 || selection === 3) {
                // Branch 4 or 5
                branchA = tref.add.image(tref.game.canvas.width/2 - 200, tref.game.canvas.height/2, 'Branch4');
                branchA.setInteractive().setDisplaySize(150, 150).setDepth(6);
                branchB = tref.add.image(tref.game.canvas.width/2 + 200, tref.game.canvas.height/2, 'Branch5');
                branchB.setInteractive().setDisplaySize(150, 150).setDepth(6);
                selection = 2;
            }
            pd[5] = -1;
            console.log("pd5reset : " + (pd[5] === -1));
            if (player === 1) {
                tref.game.p1Data = pd.slice();
            } else if (player === 2) {
                tref.game.p2Data = pd.slice();
            } else if (player === 3) {
                tref.game.p3Data = pd.slice();
            } else if (player === 4) {
                tref.game.p4Data = pd.slice();
            }

            // Player Input
            tref.input.on('gameobjectdown', function(pointer, gameObject) {
                // Branch A
                if (gameObject === branchA) {
                    if (selection === 0) {
                        // Branch 0
                        pd[6] = 0;
                    } else if (selection === 1) {
                        // Branch 2
                        pd[6] = 2;
                    } else if (selection === 2) {
                        // Branch 4
                        pd[6] = 4;
                    }
                    console.log("branch aft : " + pd[6]);
                    console.log(pd);
                    if (player === 1) {
                        tref.game.p1Data = pd.slice(); 
                    } else if (player === 2) {
                        tref.game.p2Data = pd.slice(); 
                    } else if (player === 3) {
                        tref.game.p3Data = pd.slice(); 
                    } else if (player === 4) {
                        tref.game.p4Data = pd.slice(); 
                    }
                    branchA.disableInteractive().setScale(0);
                    branchB.disableInteractive().setScale(0);
                    sqText.setScale(0);
                    sqA1.setScale(0);
                    sqB1.setScale(0);
                    if (diceRoll === 0) {
                        if (breakpoint) {
                            playerMove(playOrder[pti], tref);
                            turnChange(tref);
                            breakpoint = false;
                        }
                        tref.dice.setInteractive().setScale(2);
                    } else {
                        if (breakpoint) {
                            breakpoint = false;
                        }
                        let curt = pd[5];
                        let curb = pd[6];
                        let fin = pd[7];
                        while (diceRoll > 0) {
                            curt++;
                            diceRoll--;
                        }
                        pd[5] = curt;
                        console.log(pd);
                        if (player === 1) {
                            tref.game.p1Data = pd.slice(); 
                        } else if (player === 2) {
                            tref.game.p2Data = pd.slice(); 
                        } else if (player === 3) {
                            tref.game.p3Data = pd.slice(); 
                        } else if (player === 4) {
                            tref.game.p4Data = pd.slice(); 
                        }
                        // Stopped Moving / Landed at Tile
                        if (diceRoll === 0 && !fin && curt <= 18) { 
                            console.log("Stopped");
                            console.log("pd[5] : " + pd[5]);
                            playerMove(playOrder[pti], tref);

                            if (playerDebuffState[2] < 0) {
                                playerDebuffState[2]--;
                                if (playerDebuffState[2] === 0) {
                                    playerDebuffState[0] = false;
                                }
                            }
                            if (playerDebuffState[3] < 0) {
                                playerDebuffState[3]--;
                                if (playerDebuffState[3] === 0) {
                                    playerDebuffState[1] = false;
                                }
                            }
                            // Landed at Menu Tile
                            if (mi[curb][curt] === 0) { 
                                console.log("Menu Tile");
                                
                                // Select Current Branch Menu Catalogue
                                let choices = [];
                                let source = [];
                                if (curb === 0) { 
                                    source = branch0.slice();
                                } else if (curb === 1) {
                                    source = branch1.slice();
                                } else if (curb === 2) {
                                    source = branch2.slice();
                                } else if (curb === 3) {
                                    source = branch3.slice();
                                } else if (curb === 4) {
                                    source = branch4.slice();
                                } else {
                                    source = branch5.slice();
                                }

                                // Pick Options At Random From Current Branch Menu Catalogue
                                for(let i = 0; i < 3; i++) {
                                    let rand = Phaser.Math.Between(0, source.length - 1);
                                    choices.push(source[rand]);
                                    source.splice(rand, 1);
                                }
                                
                                // Card Selection
                                stopMenu(pd, choices, playOrder[pti], tref);
                                
                            } else if (mi[curb][curt] === 1) { // Landed at Debuff Tile
                                console.log("Debuff Tile");

                                // Choose Debuff At Random
                                let source = ["mun", "dia", "kra", "pen", "ket", "peg"];
                                let n = Phaser.Math.Between(0, source.length - 1);
                                let choice = source[n];
                                stopDebuff(pd, choice, playOrder[pti], tref);

                            } else if (mi[curb][curt] === 2) { // Landed at Event Tile
                                console.log("Event Tile");

                                // Choose Event At Random
                                let event = ["lmk", "lsk", "mia"];
                                let n = Phaser.Math.Between(0, event.length - 1);
                                let choice = event[n];
                                stopEvent(choice, tref);

                            } else if (mi[curb][curt] === 3) { // Landed at Money Tile
                                console.log("Money Tile");
                                let money = Phaser.Math.Between(1,3);
                                if (money === 1) {
                                    pd[4] += 3;
                                } else if (money === 2) {
                                    pd[4] += 4;
                                } else {
                                    pd[4] += 5;
                                }

                                console.log("Saving");
                                console.log(pd);
                                if(playOrder[pti] === 1) {
                                    tref.game.p1Data = pd.slice();
                                } else if (playOrder[pti] === 2) {
                                    tref.game.p2Data = pd.slice();
                                } else if (playOrder[pti] === 3) {
                                    tref.game.p3Data = pd.slice();
                                } else if (playOrder[pti] === 4) {
                                    tref.game.p4Data = pd.slice();
                                }
                                updateText(playOrder[pti], tref);
                                tref.dice.setScale(2);
                                tref.dice.play('rolling');
                                console.log("ptig :" + pti);
                                turnChange(tref);
                                console.log("ptig :" + pti);
                                updateTurns(playOrder, tref);
                            } else {
                                console.log("Branch Tile");
                                console.log("ptih :" + pti);
                                turnChange(tref);
                                console.log("ptih :" + pti);
                            }
                        }
                    }
                } else if (gameObject === branchB) { // Branch B
                    if (selection === 0) {
                        // Branch 1
                        pd[6] = 1;
                    } else if (selection === 1) {
                        // Branch 3
                        pd[6] = 3;
                    } else if (selection === 2) {
                        // Branch 5
                        pd[6] = 5;
                    }
                    console.log("branch aft : " + pd[6]);
                    console.log(pd);
                    if (player === 1) {
                        tref.game.p1Data = pd.slice(); 
                    } else if (player === 2) {
                        tref.game.p2Data = pd.slice(); 
                    } else if (player === 3) {
                        tref.game.p3Data = pd.slice(); 
                    } else if (player === 4) {
                        tref.game.p4Data = pd.slice(); 
                    }
                    branchA.disableInteractive().setScale(0);
                    branchB.disableInteractive().setScale(0);
                    sqText.setScale(0);
                    sqA1.setScale(0);
                    sqB1.setScale(0);
                    if (diceRoll === 0) {
                        if (breakpoint) {
                            playerMove(playOrder[pti], tref);
                            turnChange(tref);
                            breakpoint = false;
                        }
                        tref.dice.setInteractive().setScale(2);
                    } else {
                        if (breakpoint) {
                            breakpoint = false;
                        }
                        let curt = pd[5];
                        let curb = pd[6];
                        let fin = pd[7];
                        while (diceRoll > 0) {
                            curt++;
                            diceRoll--;
                        }
                        pd[5] = curt;
                        if (player === 1) {
                            tref.game.p1Data = pd.slice(); 
                        } else if (player === 2) {
                            tref.game.p2Data = pd.slice(); 
                        } else if (player === 3) {
                            tref.game.p3Data = pd.slice(); 
                        } else if (player === 4) {
                            tref.game.p4Data = pd.slice(); 
                        }
                        // Stopped Moving / Landed at Tile
                        if (diceRoll === 0 && !fin && curt <= 18) { 
                            console.log("Stopped");
                            console.log("pd[5] : " + pd[5]);
                            playerMove(playOrder[pti], tref);

                            if (playerDebuffState[2] < 0) {
                                playerDebuffState[2]--;
                                if (playerDebuffState[2] === 0) {
                                    playerDebuffState[0] = false;
                                }
                            }
                            if (playerDebuffState[3] < 0) {
                                playerDebuffState[3]--;
                                if (playerDebuffState[3] === 0) {
                                    playerDebuffState[1] = false;
                                }
                            }
                            // Landed at Menu Tile
                            if (mi[curb][curt] === 0) { 
                                console.log("Menu Tile");
                                
                                // Select Current Branch Menu Catalogue
                                let choices = [];
                                let source = [];
                                if (curb === 0) { 
                                    source = branch0.slice();
                                } else if (curb === 1) {
                                    source = branch1.slice();
                                } else if (curb === 2) {
                                    source = branch2.slice();
                                } else if (curb === 3) {
                                    source = branch3.slice();
                                } else if (curb === 4) {
                                    source = branch4.slice();
                                } else {
                                    source = branch5.slice();
                                }

                                // Pick Options At Random From Current Branch Menu Catalogue
                                for(let i = 0; i < 3; i++) {
                                    let rand = Phaser.Math.Between(0, source.length - 1);
                                    choices.push(source[rand]);
                                    source.splice(rand, 1);
                                }
                                
                                // Card Selection
                                stopMenu(pd, choices, playOrder[pti], tref);
                                
                            } else if (mi[curb][curt] === 1) { // Landed at Debuff Tile
                                console.log("Debuff Tile");

                                // Choose Debuff At Random
                                let source = ["mun", "dia", "kra", "pen", "ket", "peg"];
                                let n = Phaser.Math.Between(0, source.length - 1);
                                let choice = source[n];
                                stopDebuff(pd, choice, playOrder[pti], tref);

                            } else if (mi[curb][curt] === 2) { // Landed at Event Tile
                                console.log("Event Tile");

                                // Choose Event At Random
                                let event = ["lmk", "lsk", "mia"];
                                let n = Phaser.Math.Between(0, event.length - 1);
                                let choice = event[n];
                                stopEvent(choice, tref);

                            } else if (mi[curb][curt] === 3) { // Landed at Money Tile
                                console.log("Money Tile");
                                let money = Phaser.Math.Between(1,3);
                                if (money === 1) {
                                    pd[4] += 3;
                                } else if (money === 2) {
                                    pd[4] += 4;
                                } else {
                                    pd[4] += 5;
                                }

                                console.log("Saving");
                                console.log(pd);
                                if(playOrder[pti] === 1) {
                                    tref.game.p1Data = pd.slice();
                                } else if (playOrder[pti] === 2) {
                                    tref.game.p2Data = pd.slice();
                                } else if (playOrder[pti] === 3) {
                                    tref.game.p3Data = pd.slice();
                                } else if (playOrder[pti] === 4) {
                                    tref.game.p4Data = pd.slice();
                                }
                                updateText(playOrder[pti], tref);
                                tref.dice.setScale(2);
                                tref.dice.play('rolling');
                                console.log("ptig :" + pti);
                                turnChange(tref);
                                console.log("ptig :" + pti);
                                updateTurns(playOrder, tref);
                            } else {
                                console.log("Branch Tile");
                                console.log("ptih :" + pti);
                                turnChange(tref);
                                console.log("ptih :" + pti);
                            }
                        }
                    }

                }
            });
        }

        // Player Turn Change
        let change = false;
        function turnChange (tref) {
            console.log("turnChange");          
            console.log("Player " + playOrder[pti] + "\'s Turn Finished");
            if (change) { // If a player has reached the finish            
                playerMove(playOrder[pti], tref);   
                change = false;
                breakpoint = false;
                playOrder.splice(pti, 1);
                tref.playOrder2.splice(pti, 1);
                if (pti === playOrder.length || pti === 0) {
                    // If playerTurnIndex is out of bounds, move to front
                    // If playerTurnIndex is at front, don't move
                    pti = 0;
                }
                updateTurns(playOrder, tref);
            } else if (pti === playOrder.length - 1) {
                // If playerTurnIndex is the last index, move to front
                console.log("Front Player's Turn");
                pti = 0;
            } else {
                console.log("player : " + playOrder[pti]);
                pti++;
                console.log("player : " + playOrder[pti]);
            }
            console.log(playOrder.length);
            if (playOrder.length <= 0) { // If no players are left, end game
                console.log("endGame");
                tref.scene.start("GameOver");
                return;
            }

            // Get Player References
            let pd;
            if (playOrder[pti] === 1) {
                pd = tref.game.p1Data.slice();
            } else if (playOrder[pti] === 2) {
                pd = tref.game.p2Data.slice();
            } else if (playOrder[pti] === 3) {
                pd = tref.game.p3Data.slice();
            } else if (playOrder[pti] === 4) {
                pd = tref.game.p4Data.slice();
            }
            console.log("changePlayers");
            console.log(playOrder[pti]);
            console.log(pd);
            if (pd[6] === -1) { // If player starts at a branch
                console.log("changeAtBranch");
                tref.dice.disableInteractive().setScale(0);
                stopBranch(playOrder[pti], 0, tref);
            } else {
                tref.dice.setInteractive().setScale(2);
                tref.dice.play("rolling");
            }
        }

        // Player Move Processing
        function move (tref) {
            if (diceRoll > 0) {
                console.log("func move");
                let pd, playerDebuffState;
                
                // Players Status Check
                console.log("diceRoll : " + diceRoll + "; tref : " + tref);
                console.log("current player = " + playOrder[pti]);
                console.log("check1 : " + tref.game.p1Data);
                console.log("check2 : " + tref.game.p2Data);
                console.log("check3 : " + tref.game.p3Data);
                console.log("check4 : " + tref.game.p4Data);

                // Get Player References
                if(playOrder[pti] === 1) {
                    pd = tref.game.p1Data;
                    playerDebuffState = tref.game.p1Debuff;
                } else if (playOrder[pti] === 2) {
                    pd = tref.game.p2Data;
                    playerDebuffState = tref.game.p2Debuff;
                } else if (playOrder[pti] === 3) {
                    pd = tref.game.p3Data;
                    playerDebuffState = tref.game.p3Debuff;
                } else if (playOrder[pti] === 4) {
                    pd = tref.game.p4Data;
                    playerDebuffState = tref.game.p4Debuff;
                }

                // Move one step forward
                pd[5] += 1;
                diceRoll--;

                if (mi[pd[6]][pd[5]] === 3) {
                    console.log("Money Tile Passed");
                    pd[4] += 1;
                }
                console.log("Saving");
                console.log(pd);
                if(playOrder[pti] === 1) {
                    tref.game.p1Data = pd.slice();
                    tref.game.p1Debuff = playerDebuffState;
                    updateText(1, tref);
                } else if (playOrder[pti] === 2) {
                    tref.game.p2Data = pd.slice();
                    tref.game.p2Debuff = playerDebuffState;
                    updateText(2, tref);
                } else if (playOrder[pti] === 3) {
                    tref.game.p3Data = pd.slice();
                    tref.game.p3Debuff = playerDebuffState;
                    updateText(3, tref);
                } else if (playOrder[pti] === 4) {
                    tref.game.p4Data = pd.slice();
                    tref.game.p4Debuff = playerDebuffState;
                    updateText(4, tref);
                }
            }
        }
  
        // First Player Branch Selection
        stopBranch(playOrder[pti], 0, this);
        let breakpoint = false;

        // Dice Onclick Trigger
        this.input.on('gameobjectdown', function (pointer, gameObject) {
            if (gameObject === tref.dice) {
                diceRoll = Phaser.Math.Between(1,6);
                tref.dice.play('slowing');
                tref.dice.disableInteractive();
                console.log("diceroll " + diceRoll);
                // Debuff Check : Kram
                // Jika diceRoll lebih dari satu maka kurangi satu
                if (diceRoll > 1) {
                    if (playOrder[pti] === 1) {
                        if (tref.game.p1Debuff[1]) {
                            diceRoll--;
                        }
                    } else if (playOrder[pti] === 2) {
                        if (tref.game.p2Debuff[1]) {
                            diceRoll--;
                        }
                    } else if (playOrder[pti] === 3) {
                        if (tref.game.p3Debuff[1]) {
                            diceRoll--;
                        }
                    } else if (playOrder[pti] === 4) {
                        if (tref.game.p4Debuff[1]) {
                            diceRoll--;
                        }
                    }
                }
                console.log("diceroll " + diceRoll);
                // Mengurangi Turn Debuff
                if (playOrder[pti] === 1) {
                    if (tref.game.p1Debuff[0]) {
                        tref.game.p1Debuff[2]--;
                        if (tref.game.p1Debuff[2] === 0) {
                            tref.p1Info[8].setColor('#d9d9d9');
                            tref.game.p1Debuff[0] = false;
                        } else {
                            tref.p1Info[8].setColor('#ff0000');
                        }
                    }
                    if (tref.game.p1Debuff[1]) {
                        tref.game.p1Debuff[3]--;                           
                        if (tref.game.p1Debuff[3] === 0) {
                            tref.game.p1Debuff[1] = false;
                            tref.p1Info[9].setColor('#d9d9d9');
                        } else {
                            tref.p1Info[9].setColor('#ff0000');
                        }
                    }                   
                } else if (playOrder[pti] === 2) {
                    if (tref.game.p2Debuff[0]) {
                        tref.game.p2Debuff[2]--;
                        if (tref.game.p2Debuff[2] === 0) {
                            tref.game.p2Debuff[0] = false;
                            tref.p2Info[8].setColor('#d9d9d9');
                        } else {
                            tref.p2Info[8].setColor('#ff0000');
                        }
                    }
                    if (tref.game.p2Debuff[1]) {
                        tref.game.p2Debuff[3]--;
                        if (tref.game.p2Debuff[3] === 0) {
                            tref.game.p2Debuff[1] = false;
                            tref.p2Info[9].setColor('#d9d9d9');
                        } else {
                            tref.p2Info[9].setColor('#ff0000');
                        }
                    }
                } else if (playOrder[pti] === 3) {
                    if (tref.game.p3Debuff[0]) {
                        tref.game.p3Debuff[2]--;
                        if (tref.game.p3Debuff[2] === 0) {
                            tref.game.p3Debuff[0] = false;
                            tref.p3Info[8].setColor('#d9d9d9');
                        } else {
                            tref.p3Info[8].setColor('#ff0000');
                        }
                    }
                    if (tref.game.p3Debuff[1]) {
                        tref.game.p3Debuff[3]--;
                        if (tref.game.p3Debuff[3] === 0) {
                            tref.game.p3Debuff[1] = false;
                            tref.p3Info[9].setColor('#d9d9d9');
                        } else {
                            tref.p3Info[9].setColor('#ff0000');
                        }
                    }
                } else if (playOrder[pti] === 4) {
                    if (tref.game.p4Debuff[0]) {
                        tref.game.p4Debuff[2]--;
                        if (tref.game.p4Debuff[2] === 0) {
                            tref.game.p4Debuff[0] = false;
                            tref.p4Info[8].setColor('#d9d9d9');
                        } else {
                            tref.p4Info[8].setColor('#ff0000');
                        }
                    }
                    if (tref.game.p4Debuff[1]) {
                        tref.game.p4Debuff[3]--;
                        if (tref.game.p4Debuff[3] === 0) {
                            tref.game.p4Debuff[1] = false;
                            tref.p4Info[9].setColor('#d9d9d9');
                        } else {
                            tref.p4Info[9].setColor('#ff0000');
                        }
                    }
                }

                tref.time.delayedCall(1000, () => {
                    tref.dice.stop();
                    // Play Sound
                    tref.dice.setFrame(diceRoll - 1);

                    tref.time.delayedCall(1500, () => {
                        tref.dice.setScale(0);
                        tref.dice.setInteractive();
                        
                        let playerData, playerDebuffState;
                        if (playOrder[pti] === 1) {
                            playerData = tref.game.p1Data;
                            playerDebuffState = tref.game.p1Debuff;
                        } else if (playOrder[pti] === 2) {
                            playerData = tref.game.p2Data;
                            playerDebuffState = tref.game.p2Debuff;
                        } else if (playOrder[pti] === 3) {
                            playerData = tref.game.p3Data;
                            playerDebuffState = tref.game.p3Debuff;
                        } else if (playOrder[pti] === 4) {
                            playerData = tref.game.p4Data;
                            playerDebuffState = tref.game.p4Debuff;
                        }
                        
                        while (diceRoll > 0) {                               
                            // Move Player                           
                            playerData[5] += 1;
                            diceRoll--;

                            if (mi[playerData[6]][playerData[5]] === 3) {
                                console.log("Money Tile Passed");
                                playerData[4] += 1;
                            }
                            console.log("Saving");
                            console.log(playerData);
                            if(playOrder[pti] === 1) {
                                tref.game.p1Data = playerData.slice();
                                tref.game.p1Debuff = playerDebuffState;
                                updateText(1, tref);
                            } else if (playOrder[pti] === 2) {
                                tref.game.p2Data = playerData.slice();
                                tref.game.p2Debuff = playerDebuffState;
                                updateText(2, tref);
                            } else if (playOrder[pti] === 3) {
                                tref.game.p3Data = playerData.slice();
                                tref.game.p3Debuff = playerDebuffState;
                                updateText(3, tref);
                            } else if (playOrder[pti] === 4) {
                                tref.game.p4Data = playerData.slice();
                                tref.game.p4Debuff = playerDebuffState;
                                updateText(4, tref);
                            }
                                    
                            // Finish Check
                            if (playerData[5] >= 18 && ((playerData[6] === 4) || playerData[6] === 5)) {
                                playerData[7] = true;
                                change = true;
                                breakpoint = true;
                                if(playOrder[pti] === 1) {
                                    tref.game.p1Data = playerData.slice();
                                } else if (playOrder[pti] === 2) {
                                    tref.game.p2Data = playerData.slice();
                                } else if (playOrder[pti] === 3) {
                                    tref.game.p3Data = playerData.slice();
                                } else if (playOrder[pti] === 4) {
                                    tref.game.p4Data = playerData.slice();
                                }
                                turnChange(tref);                              
                                break;
                            } else if (playerData[5] >= 18) {
                                // Branch Check                               
                                breakpoint = true;
                                stopBranch(playOrder[pti], diceRoll, tref);
                                break;
                            }
                        }
                        console.log("stopCheck");
                        console.log("diceroll : " + diceRoll);
                        console.log("finish : " + playerData[7]);
                        console.log("breakpoint : " + breakpoint);
                        // Stopped Moving / Landed at Tile
                        if (diceRoll === 0 && !playerData[7] && !breakpoint) {
                            console.log("Stopped");
                            console.log("pd[5] : " + playerData[5]);
                            playerMove(playOrder[pti], tref);
                            if (playerDebuffState[2] < 0) {
                                playerDebuffState[2]--;
                                if (playerDebuffState[2] === 0) {
                                    playerDebuffState[0] = false;
                                }
                            }
                            if (playerDebuffState[3] < 0) {
                                playerDebuffState[3]--;
                                if (playerDebuffState[3] === 0) {
                                    playerDebuffState[1] = false;
                                }
                            }
                            // Landed at Menu Tile
                            if (mi[playerData[6]][playerData[5]] === 0) { 
                                console.log("Menu Tile");
                                
                                // Select Current Branch Menu Catalogue
                                let choices = [];
                                let source = [];
                                if (playerData[6] === 0) { 
                                    source = branch0.slice();
                                } else if (playerData[6] === 1) {
                                    source = branch1.slice();
                                } else if (playerData[6] === 2) {
                                    source = branch2.slice();
                                } else if (playerData[6] === 3) {
                                    source = branch3.slice();
                                } else if (playerData[6] === 4) {
                                    source = branch4.slice();
                                } else {
                                    source = branch5.slice();
                                }

                                // Pick Options At Random From Current Branch Menu Catalogue
                                for(let i = 0; i < 3; i++) {
                                    let rand = Phaser.Math.Between(0, source.length - 1);
                                    choices.push(source[rand]);
                                    source.splice(rand, 1);
                                }
                                    
                                // Card Selection
                                stopMenu(playerData, choices, playOrder[pti], tref);
                                    
                            } else if (mi[playerData[6]][playerData[5]] === 1) { // Landed at Debuff Tile
                                console.log("Debuff Tile");

                                // Choose Debuff At Random
                                let source = ["mun", "dia", "kra", "pen", "ket", "peg"];
                                let n = Phaser.Math.Between(0, source.length - 1);
                                let choice = source[n];
                                stopDebuff(playerData, choice, playOrder[pti], tref);

                            } else if (mi[playerData[6]][playerData[5]] === 2) { // Landed at Event Tile
                                console.log("Event Tile");

                                // Choose Event At Random
                                let event = ["lmk", "lsk", "mia"];
                                let n = Phaser.Math.Between(0, event.length - 1);
                                let choice = event[n];
                                stopEvent(choice, tref);

                            } else if (mi[playerData[6]][playerData[5]] === 3) { // Landed at Money Tile
                                console.log("Money Tile");
                                let money = Phaser.Math.Between(1,3);
                                if (money === 1) {
                                    playerData[4] += 3;
                                } else if (money === 2) {
                                    playerData[4] += 4;
                                } else {
                                    playerData[4] += 5;
                                }

                                console.log("Saving");
                                console.log(playerData);
                                if(playOrder[pti] === 1) {
                                    tref.game.p1Data = playerData.slice();
                                } else if (playOrder[pti] === 2) {
                                    tref.game.p2Data = playerData.slice();
                                } else if (playOrder[pti] === 3) {
                                    tref.game.p3Data = playerData.slice();
                                } else if (playOrder[pti] === 4) {
                                    tref.game.p4Data = playerData.slice();
                                }
                                updateText(playOrder[pti], tref);
                                tref.dice.setScale(2);
                                tref.dice.play('rolling');
                                console.log("ptig :" + pti);
                                turnChange(tref);
                                console.log("ptig :" + pti);
                                updateTurns(playOrder, tref);
                            } else {
                                console.log("Branch Tile");
                                console.log("ptih :" + pti);
                                turnChange(tref);
                                console.log("ptih :" + pti);
                            }
                        }
                    });
                });  
            }
        });
    }
}
