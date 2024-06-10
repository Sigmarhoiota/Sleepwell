import { Scene } from 'phaser';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        //  We loaded this image in our Boot Scene, so we can display it here
        this.add.image(512, 384, 'background');

        //  A simple progress bar. This is the outline of the bar.
        this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(512-230, 384, 4, 28, 0xffffff);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on('progress', (progress) => {

            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = 4 + (460 * progress);

        });
    }

    preload ()
    {
        //  Load the assets for the game
        this.load.setPath('assets');

        this.load.image('logo', 'logo.png');

        this.load.image('mm_bg', 'mm_bg.png');
        this.load.image('Branch0', 'Branch0.png');
        this.load.image('Branch1', 'Branch1.png');
        this.load.image('Branch2', 'Branch2.png');
        this.load.image('Branch3', 'Branch3.png');
        this.load.image('Branch4', 'Branch4.png');
        this.load.image('Branch5', 'Branch5.png');

        this.load.spritesheet('dice', 'dice_ss.png', { frameWidth: 64, frameHeight: 64 });

        this.load.image('acs', 'acs.png');
        this.load.image('ayp', 'ayp.png');
        this.load.image('bak', 'bak.png');
        this.load.image('bcs', 'bcs.png');
        this.load.image('beg', 'beg.png');
        this.load.image('bis', 'bis.png');
        this.load.image('das', 'das.png');
        this.load.image('don', 'don.png');
        this.load.image('ecs', 'ecs.png');
        this.load.image('hav', 'hav.png');
        this.load.image('ikl', 'ikl.png');
        this.load.image('iks', 'iks.png');
        this.load.image('jas', 'jas.png');
        this.load.image('kah', 'kah.png');
        this.load.image('kcs', 'kcs.png');
        this.load.image('ken', 'ken.png');
        this.load.image('mie', 'mie.png');
        this.load.image('mii', 'mii.png');
        this.load.image('nas', 'nas.png');
        this.load.image('ncs', 'ncs.png');
        this.load.image('rop', 'rop.png');
        this.load.image('sak', 'sak.png');
        this.load.image('sin', 'sin.png');
        this.load.image('sus', 'sus.png');
        this.load.image('tah', 'tah.png');
        this.load.image('tea', 'tea.png');
        this.load.image('tem', 'tem.png');
        this.load.image('uds', 'uds.png');

        this.load.image('mun', 'mun.png');
        this.load.image('dia', 'dia.png');
        this.load.image('kra', 'kra.png');
        this.load.image('pen', 'pen.png');
        this.load.image('ket', 'ket.png');
        this.load.image('peg', 'peg.png');

        this.load.image('lmk', 'lmk.png');
        this.load.image('lsk', 'lsk.png');
        this.load.image('mia', 'mia.png');
    }

    create ()
    {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.
        // this.registry.set('mapInfo', []);
        
        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('MainMenu');
    }
}
