import { sendCommandsToRover } from '../main/marsRover';

describe('Mars rover', () => {

    describe('given the rover is at 0:0:N in a grid 10x10 with no obstacle', () => {
        describe.each([
            ['', '0:0:N'],
            ['M', '0:1:N'],
            ['MM', '0:2:N']
        ])('with input %p', (commands, expected) => {
            it(`should return ${expected}`, () => {
                expect(sendCommandsToRover(commands)).toBe(expected);
            })
        })
    });
})
