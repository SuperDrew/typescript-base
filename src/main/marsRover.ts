type Direction = "N" | "E" | "S" | "W"

export class Rover {
    private clockwiseRotation: Record <Direction, Direction> = {
        'N':'E',
        'E':'S',
        'S':'W',
        'W':'N'
    }

    private antiClockwiseRotation: Record <Direction, Direction> = {
        'N':'W',
        'W':'S',
        'S':'E',
        'E':'N'
    }

    public position = new RoverPosition(0, 0, 'N');
    private commands: string[] = [];

    public turnRight() {
        this.position.direction = this.clockwiseRotation[this.position.direction];
    }

    public turnLeft() {
        this.position.direction = this.antiClockwiseRotation[this.position.direction];
    }

    public move() {
        if (this.position.direction === "E") {
            this.position.x += 1;
        } else if (this.position.direction === 'W') {
            this.position.x -= 1;
        } else if (this.position.direction === 'S') {
            this.position.y -= 1;
        } else {
            this.position.y += 1;
        }
    }

    public undo() {
        const previousCommand = this.commands[this.commands.length - 1];
        if (previousCommand === 'L') {
            this.turnRight();
        }
    }

    public storeCommand(command: string) {
        this.commands.push(command);
    }
}

export class RoverPosition {
    public x: number;
    public y: number;
    public direction: Direction;

    constructor(x: number, y: number, d: Direction) {
        this.x = x;
        this.y = y;
        this.direction = d;
    }
}

export function sendCommandsToRover(commands: string) {
    const rover = new Rover();

    commands.split('').forEach((command: string) => {
        if (command === 'R') {
            rover.turnRight();
        } else if (command === 'L') {
            rover.turnLeft();
        } else if (command === 'M') {
            rover.move();
        } else if(command === 'U') {
            rover.undo();
        }

        rover.storeCommand(command);
    })

    return `${rover.position.x}:${rover.position.y}:${rover.position.direction}`;
}
