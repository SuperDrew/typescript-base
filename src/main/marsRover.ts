export function sendCommandsToRover(commands: string) {
    let xPos = 0;
    let yPos = 0;

    commands.split('').forEach(() => {
        yPos += 1;
    })

    return `${xPos}:${yPos}:N`;
}
