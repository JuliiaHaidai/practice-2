export default function runRover(commandsList) {
  let position = {
      x: 0,
      y: 0
  }
  let direction = 0;
  const moving = [
      distance => { position.y += distance; },
      distance => { position.x += distance; },
      distance => { position.y -= distance; },
      distance => { position.x -= distance; }
  ];
  commandsList.sort((a, b) => (a.order - b.order))
  let commands = [];
  commandsList.map(element => commands.push(element.command));
  commands.map((elem) => {
      switch (elem.split(' ')[0]) {
          case "go":
              moving[direction](Number(elem.split(' ')[1]));
              break;
          case "turn":
              switch (elem.split(' ')[1]) {
                  case "left":
                      direction = (direction === 0) ? 3 : (direction - 1);
                      break;
                  case "right":
                      direction = (direction === 3) ? 0 : (direction + 1);
                      break;
                  default:
                      break
              }
              break;
          default:
              break;
      }
  })
  return position;
}