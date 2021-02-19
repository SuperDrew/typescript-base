// function sendCommandsToRover(commands: string) {
//     return undefined;
// }
describe.skip('Mars rover', () => {
    describe('given the rover is at 0:0:N in a grid 10x10 with no obstacle', () => {
        describe('with input MMRMMLM', () => {
            it('should gives output 2:3:N', () => {
                const commands = 'MMRMMLM';
                const expected = '2:3:N';

                expect(sendCommandsToRover(commands)).toBe(expected);
            });
        });
    });
})
