type Direction = "N" | "E" | "S" | "W" 

export function sendCommandsToRover(commands: string) {
    let xPos = 0;
    let yPos = 0;
    let direction : Direction = 'N';

    const clockwiseRotation : Record <Direction, Direction> = {
        'N':'E',
        'E':'S',
        'S':'W',
        'W':'N'
    }
    commands.split('').forEach((command: string) => {

        if (command === 'R') {
            direction = clockwiseRotation[direction]
        }  
        else {
            yPos += 1;
        }
    })

    return `${xPos}:${yPos}:${direction}`;
}
