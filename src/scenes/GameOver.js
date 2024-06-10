import { Scene } from 'phaser';

export class GameOver extends Scene
{
    constructor ()
    {
        super('GameOver');
    }

    create ()
    {
        this.cameras.main.setBackgroundColor(0xff0000);

        this.add.image(512, 384, 'background').setAlpha(0.5);

        let gOText = this.add.text(512, 100, 'Game Over', {
            fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        // Scoring Process

        let data = [this.game.p1Data, this.game.p2Data, this.game.p3Data, this.game.p4Data];
        let ratios = [this.game.p1Ratio, this.game.p2Ratio, this.game.p3Ratio, this.game.p4Ratio];
        let scores = [this.game.p1Data[8], this.game.p2Data[8], this.game.p3Data[8], this.game.p4Data[8]];

        for (let i = 0; i <= 3; i++) {
            if (data[i][3] >= 2000) {
                scores[i] += 500;
            }

            if (10 <= ratios[i][0] <= 35) {
                scores[i] += 300;
            } else {
                scores[i] -= 300;
            }
            if (45 <= ratios[i][1] <= 65) {
                scores[i] += 300;
            } else {
                scores[i] -= 300;
            } if (20 <= ratios[1][2] <= 35) {
                scores[i] += 300;
            } else {
                scores[i] -= 300;
            }
        }

        let max = scores[0];
        let winner = 1;

        if (max < scores[1]) {
            max = scores[1];
            winner = 2;
        }
        if (max < scores[2]) {
            max = scores[2];
            winner = 3;
        }
        if (max < scores[3]) {
            max = scores[3];
            winner = 4;
        }

        let brief1 = this.add.text(475, gOText.y + 60, 'Protein : ' + ratios[0][0] +
            '% Carbos : ' + ratios[0][1] + '% Fat : ' + ratios[0][2] + '%' + ' Daily Calories : ' + (data[0][3] >= 2000), {
            fontFamily: 'Arial Black', fontSize: 28, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        let score1 = this.add.text(512 - 200, 200, 'Player 1 Score : ' + scores[0], {
            fontFamily: 'Arial Black', fontSize: 48, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        let brief2 = this.add.text(475, score1.y + 60, 'Protein : ' + ratios[1][0] +
            '% Carbos : ' + ratios[1][1] + '% Fat : ' + ratios[1][2] + '%' + ' Daily Calories : ' + (data[1][3] >= 2000), {
            fontFamily: 'Arial Black', fontSize: 28, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        let score2 = this.add.text(512 - 200, 300, 'Player 2 Score : ' + scores[1], {
            fontFamily: 'Arial Black', fontSize: 48, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        let brief3 = this.add.text(475, score2.y + 60, 'Protein : ' + ratios[2][0] +
            '% Carbos : ' + ratios[2][1] + '% Fat : ' + ratios[2][2] + '%' + ' Daily Calories : ' + (data[2][3] >= 2000), {
            fontFamily: 'Arial Black', fontSize: 28, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        let score3 = this.add.text(512 - 200, 400, 'Player 3 Score : ' + scores[2], {
            fontFamily: 'Arial Black', fontSize: 48, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        let brief4 = this.add.text(475, score3.y + 60, 'Protein : ' + ratios[3][0] +
            '% Carbos : ' + ratios[3][1] + '% Fat : ' + ratios[3][2] + '%' + ' Daily Calories : ' + (data[3][3] >= 2000), {
            fontFamily: 'Arial Black', fontSize: 28, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        let score4 = this.add.text(512 - 200, 500, 'Player 4 Score : ' + scores[3], {
            fontFamily: 'Arial Black', fontSize: 48, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.add.text(512, 600, 'Player ' + winner + ' Wins!', {
            fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('MainMenu');

        });
    }
}
