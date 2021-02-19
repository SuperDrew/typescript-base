export function sendCommandsToRover(commands: string) {
    let xPos = 0;
    let yPos = 0;
    let direction = 'N';

    commands.split('').forEach((command: string) => {
        if (command === 'R') {
            direction = 'E'
        } else {
            yPos += 1;
        }
    })

    return `${xPos}:${yPos}:${direction}`;
}
