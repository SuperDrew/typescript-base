function sendCommandsToRover(commands: string) {
    return undefined;
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
    });
})
