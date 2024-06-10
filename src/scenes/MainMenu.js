import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {

        var X = 
        {
            'LEF' : 0,
            'CEN' : this.game.canvas.width / 2,
            'RIG' : this.game.canvas.width
        };
        
        var Y =
        {
            'TOP' : 0,
            'CEN' : this.game.canvas.height / 2,
            'BOT' : this.game.canvas.height
        };

        this.add.image(X.CEN, Y.CEN, 'mm_bg');

        let text = this.add.text(X.CEN, Y.CEN, 'Click Anywhere to Continue', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);
        // text.setAlpha(0);

        let textPlay = this.add.text(X.CEN, Y.CEN - 50, 'Play', {
            fontFamily: 'Arial Black', fontSize: 48, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setAlpha(0);

        let textRules = this.add.text(X.CEN, Y.CEN + 50, 'Rules', {
            fontFamily: 'Arial Black', fontSize: 48, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setAlpha(0);

        let textRules2 = this.add.text(X.CEN, Y.CEN + 50, 'Selamat datang di Sleepwell!\n' +
            'Tujuan permainan adalah untuk mendapatkan\n skor terbanyak dengan cara \n menjaga ' +
            'keseimbangan gizimu.', {
            fontFamily: 'Arial Black', fontSize: 36, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setAlpha(0);        

        let menuCard = this.add.image(X.CEN - 200, Y.CEN + 70, 'sin').setAlpha(0);
        let menuText = this.add.text(menuCard.x, menuCard.y + 100, 'Menu', {
            fontFamily: 'Arial Black', fontSize: 48, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setAlpha(0);
        let debuffCard = this.add.image(X.CEN, Y.CEN + 70, 'mun').setAlpha(0);
        let debuffText = this.add.text(debuffCard.x, debuffCard.y + 100, 'Debuff', {
            fontFamily: 'Arial Black', fontSize: 48, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setAlpha(0);
        let eventCard = this.add.image(X.CEN + 200, Y.CEN + 70, 'lsk').setAlpha(0);
        let eventText = this.add.text(eventCard.x, eventCard.y + 100, 'Event', {
            fontFamily: 'Arial Black', fontSize: 48, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setAlpha(0);

        let rulesNext = this.add.text(X.RIG - 100, Y.BOT - 70, 'Next', {
            fontFamily: 'Arial Black', fontSize: 48, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setAlpha(0);
        let rulesNext2 = this.add.text(X.RIG - 100, Y.BOT - 70, 'Next', {
            fontFamily: 'Arial Black', fontSize: 48, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setScale(0);
        let rulesNext3 = this.add.text(X.RIG - 100, Y.BOT - 70, 'Next', {
            fontFamily: 'Arial Black', fontSize: 48, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setScale(0);
        let rulesNext4 = this.add.text(X.RIG - 100, Y.BOT - 70, 'Next', {
            fontFamily: 'Arial Black', fontSize: 48, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setScale(0);

        // let ph = this.add.image(X.LEF, Y.BOT - 50, 'logo');
        // ph.setScale(0.5);
        // ph.x += ph.width / 4 + 50;

        // let mw = this.add.text(ph.x, ph.y - 50, 'Made with', {
        //     fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
        //     stroke: '#000000', strokeThickness: 8,
        //     align: 'center'
        // }).setOrigin(0.5);

        var tref = this;
        this.input.once('pointerdown', () => {

            // this.scene.start('Game');
            text.setAlpha(0);
            textPlay.setAlpha(1).setInteractive();
            textRules.setAlpha(1).setInteractive();
            // textOpt.setAlpha(1).setInteractive();
            // textExit.setAlpha(1).setInteractive();

        });

        this.input.on('gameobjectdown', function(pointer, gameObject) {
            if (gameObject == textPlay) {
                tref.scene.start('Game');
                // console.log('Game launched.');
            }
            if (gameObject == textRules) {
                textPlay.setAlpha(0).disableInteractive();
                textRules.y -= 200;
                textRules.disableInteractive();
                textRules2.setAlpha(1);
                rulesNext.setAlpha(1).setInteractive();
            }
            if (gameObject == rulesNext) {
                textRules.setAlpha(0);
                textRules2.y -= 90
                textRules2.setText('Lempar dadu untuk\nbergerak di map!\n\n\n\nTiap kali game dimulai\npetak-petak di peta berubah.');
                rulesNext.setScale(0);
                rulesNext2.setScale(1).setInteractive();
            }
            if (gameObject == rulesNext2) {
                textRules.setAlpha(0);
                textRules2.y -= 100
                textRules2.setText('Di dalam permainan kamu akan\nmendapatkan berbagai jenis kartu\nseperti');
                menuCard.setAlpha(1);
                menuText.setAlpha(1);
                debuffCard.setAlpha(1);
                debuffText.setAlpha(1);
                eventCard.setAlpha(1);
                eventText.setAlpha(1);
                rulesNext2.setScale(0);
                rulesNext3.setScale(1).setInteractive();
            }
            if (gameObject == rulesNext3) {
                textRules2.y += 190;
                textRules2.setText('Rasio keseimbangan gizi untuk\nkonsumsi manusia adalah\n\n' +
                    '10-35% Protein\n45-65% Karbohidrat\n20-30% Lemak\n\nPertahankan rasio gizimu\nuntuk mendapatkan skor terbesar.'
                );
                menuCard.setAlpha(0);
                menuText.setAlpha(0);
                debuffCard.setAlpha(0);
                debuffText.setAlpha(0);
                eventCard.setAlpha(0);
                eventText.setAlpha(0);
                rulesNext3.setScale(0);
                rulesNext4.setScale(1).setInteractive();
            }
            if (gameObject == rulesNext4) {
                rulesNext4.setScale(0);
                textRules2.setText('Sudah siap?\n Mari kita mulai!');
                textPlay.y += 200;
                textPlay.setAlpha(1).setInteractive();
            }
        }, this);
    }
}
