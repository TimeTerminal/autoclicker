const { keyboard, Key, mouse, left, right, up, down, screen } = require("@nut-tree/nut-js");

// S key
const START = 31;
// R key
const RESTART = 19;
// P key
const PAUSE = 25;
// Q key
const STOP = 30;

const displayIntro = function () {
  const TITLE = 'Autoclicker';
  process.title = TITLE;

  process.stdout.write('=-----------------=\n');
  process.stdout.write(`=---${TITLE}---=\n`);
  process.stdout.write('=-----------------=\n');
  process.stdout.write('Press:\n');
  process.stdout.write('`S` to start\n');
  process.stdout.write('`P` to pause\n');
  process.stdout.write('`R` to restart\n');
  process.stdout.write('`Q` to quit\n');

  // Hide keys typed
  // process.stdin.setRawMode(true);
}

main({
  keys: {
    START,
    RESTART,
    PAUSE,
    STOP,
  },
});