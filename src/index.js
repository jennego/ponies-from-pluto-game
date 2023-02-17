import { FirstGameScene } from "./first-scene";
import Phaser from "phaser";
import "./style.css";

const config /*: Phaser.Types.Core.GameConfig*/ = {
  width: 1280,
  height: 720,
  type: Phaser.AUTO,
  parent: "game-container",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: [FirstGameScene],
};

new Phaser.Game(config);
