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


interface Command<T> {
    execute(rover: Rover, previousCommand: string): void;
    type: T
}

class TurnRightCommand implements Command<'R'> {
    type: 'R' = 'R';
    execute(rover: Rover, _previousCommand: string) {
        rover.turnRight();
    }
}


class TurnLeftCommand implements Command<'L'> {
    type: 'L' = 'L';
    execute(rover: Rover) {
        rover.turnLeft();
    }
}


class MoveCommand implements Command<'M'> {
    type: 'M' =  'M';
    execute(rover: Rover) {
        rover.move();
    }
}

class UndoCommand implements Command<'U'> {
    type: 'U' = 'U';
    execute(rover: Rover, previousCommand: string) {
        if (previousCommand === 'L') {
            rover.turnRight();
        } else if(previousCommand === 'R') {
            rover.turnLeft();
        } else if(previousCommand === 'M') {
            rover.turnRight();
            rover.turnRight();
            rover.move();
            rover.turnLeft();
            rover.turnLeft();
        }
    }
}

class CommandsQueue {
    private _commands: Command<string>[] = [];
    public add(command: Command<string>) {
        this._commands.push(command);
    }

    executeAll(rover: Rover) {
        this._commands.forEach((command, index) => {
            const previousCommand = index ? this._commands[index - 1].type : '';
            command.execute(rover, previousCommand)
        })
    }
}


export function sendCommandsToRover(commands: string) {
    const rover = new Rover();
    const commandQueue = new CommandsQueue();

    commands.split('').forEach((command: string) => {
        if (command === 'R') {
            commandQueue.add(new TurnRightCommand());
        } else if (command === 'L') {
            commandQueue.add(new TurnLeftCommand());
        } else if (command === 'M') {
            commandQueue.add(new MoveCommand())
        } else if(command === 'U') {
            commandQueue.add(new UndoCommand())
        }
    })

    commandQueue.executeAll(rover);

    return `${rover.position.x}:${rover.position.y}:${rover.position.direction}`;
}
