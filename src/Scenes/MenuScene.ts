import 'phaser'
import { HALF_SCREEN } from '../Utils/gameValues'

import title from '/assets/Bejeweled_title.png'

export default class MenuScene extends Phaser.Scene {
  // private playerCarsGroup: Phaser.GameObjects.Group;

  constructor() {
    super('MenuScene')
  }

  preload() {
    this.load.image('logo', title)

    // this.menuGameOver = this.add.group();
  }

  create() {
    this.cameras.main.setBackgroundColor('#000')
    this.add.image(this.cameras.main.centerX, 150, 'logo').setDepth(1).setOrigin(0.5, 0).setScale(6)

    // this.add.text(HALF_SCREEN.WIDTH, 150, 'BEJEWELED', { font: 'bold 250px monospace' }).setDepth(1).setOrigin(0.5, 0)

    this.add.text(this.cameras.main.centerX, HALF_SCREEN.HEIGHT + 200, 'Press any key to start', { font: 'bold 53px monospace', color: 'white' }).setDepth(1).setOrigin(0.5)

    this.input.on('pointerup', () => {
      this.scene.start('GameScene')
    }, this)

    return 3
  }
}
