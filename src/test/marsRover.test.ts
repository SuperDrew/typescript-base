function sendCommandsToRover(commands: string) {
    return '0:0:N';
}

describe('Mars rover', () => {
    describe('given the rover is at 0:0:N in a grid 10x10 with no obstacle', () => {
        describe('with input empty', () => {
            it('should gives output 0:0:N', () => {
                const commands = '';
                const expected = '0:0:N';

                expect(sendCommandsToRover(commands)).toBe(expected);
            });
        });
        describe('with input "M"', () => {
            it('should gives output 0:1:N', () => {
                const commands = 'M';
                const expected = '0:1:N';

                expect(sendCommandsToRover(commands)).toBe(expected);
            });
        });
    });
})
