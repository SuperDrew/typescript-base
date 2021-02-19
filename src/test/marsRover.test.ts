import { sendCommandsToRover } from '../main/marsRover';

describe('Mars rover', () => {

    describe('given the rover is at 0:0:N in a grid 10x10 with no obstacle', () => {
        describe.each([
            ['', '0:0:N'],
            ['M', '0:1:N'],
            ['MM', '0:2:N'],
            ['MMM', '0:3:N'],
            ['R', '0:0:E'],
            ['RR', '0:0:S'],
            ['RRR', '0:0:W'],
            ['RRRR', '0:0:N'],
            ['MR', '0:1:E'],
            ['L', '0:0:W'],
            ['LL', '0:0:S'],
            ['LLL', '0:0:E'],
            ['LLLL', '0:0:N'],
            ['RM', '1:0:E'],
            ['RMLLM', '0:0:W'],
            ['MMMLLMM', '0:1:S'],
        ])('with input %p', (commands, expected) => {
            it(`should return ${expected}`, () => {
                expect(sendCommandsToRover(commands)).toBe(expected);
            })
        })
    });
})
