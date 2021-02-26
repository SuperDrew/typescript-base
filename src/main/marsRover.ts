type Direction = "N" | "E" | "S" | "W"

function move(direction: "N" | "E" | "S" | "W", xPos: number, yPos: number) {
    if (direction === "E") {
        xPos += 1;
    } else if (direction === 'W') {
        xPos -= 1;
    } else if (direction === 'S') {
        yPos -= 1;
    } else {
        yPos += 1;
    }
    return {x: xPos, y: yPos};
}

export class RoverPosition {
    public x: number;
    public y: number;
    public direction: Direction;

    constructor(x = 0, y = 0, d: Direction = 'N') {
        this.x = x;
        this.y = y;
        this.direction = d;
    }
}

export function sendCommandsToRover(commands: string) {
    const roverPosition = new RoverPosition();

    const clockwiseRotation : Record <Direction, Direction> = {
        'N':'E',
        'E':'S',
        'S':'W',
        'W':'N'
    }

    const antiClockwiseRotation : Record <Direction, Direction> = {
        'N':'W',
        'W':'S',
        'S':'E',
        'E':'N'
    }


    commands.split('').forEach((command: string) => {
        if (command === 'R') {
            roverPosition.direction = clockwiseRotation[roverPosition.direction]
        } else if (command === 'L') {
            roverPosition.direction = antiClockwiseRotation[roverPosition.direction]
        } else if (command === 'M') {
            const {x, y} = move(roverPosition.direction, roverPosition.x, roverPosition.y);
            roverPosition.x = x;
            roverPosition.y = y;
        }
    })

    return `${roverPosition.x}:${roverPosition.y}:${roverPosition.direction}`;
}
