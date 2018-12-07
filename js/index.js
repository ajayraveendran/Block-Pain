// tutorial credits to Michael Hadley, mikewesthad.com
// asset credits to- Tileset by 0x72 under CC-0, https://0x72.itch.io/16x16-industrial-tileset

import PlatformerScene0 from "./scenes/platformer-scene0.js";
import PlatformerScene1 from "./scenes/platformer-scene1.js";
import PlatformerScene2 from "./scenes/platformer-scene2.js";
import PlatformerScene3 from "./scenes/platformer-scene3.js";
import PlatformerScene4 from "./scenes/platformer-scene4.js";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "game-container",
  pixelArt: true,
  backgroundColor: "#1d212d",
  scene: [PlatformerScene0, PlatformerScene1, PlatformerScene2, PlatformerScene3, PlatformerScene4],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1000 }
    }
  }
};

const game = new Phaser.Game(config);


