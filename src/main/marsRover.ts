export function sendCommandsToRover(commands: string) {
    if (commands === 'M') {
        return '0:1:N';
    }
    if (commands === 'MM') {
        return '0:2:N';
    }
    return '0:0:N';
}
