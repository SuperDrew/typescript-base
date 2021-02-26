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

export class Rover {

    position = new roverPosition();
    // public lastCommand: string = '';

}

export class roverPosition {
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

    let rover = new Rover();
    
    // const rover.position = new rover.position();

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
            rover.position.direction = clockwiseRotation[rover.position.direction]
        } else if (command === 'L') {
            rover.position.direction = antiClockwiseRotation[rover.position.direction]
        } else if (command === 'M') {
            const {x, y} = move(rover.position.direction, rover.position.x, rover.position.y);
            rover.position.x = x;
            rover.position.y = y;
        }
    })

    return `${rover.position.x}:${rover.position.y}:${rover.position.direction}`;
}
