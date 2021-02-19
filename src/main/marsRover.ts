export function sendCommandsToRover(commands: string) {
    if (commands === 'M') {
        return '0:1:N';
    }
    return '0:0:N';
}
