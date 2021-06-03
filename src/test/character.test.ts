import { Character } from "../main/character";
describe('character', () => {
    describe('creation', () => {
        it("should create a character and set its initial health to 1000", () => {
            const character: Character = new Character();
            expect(character.health).toBe(1000);
        });
        it("should create a character and set its initial level to 1", () => {
            const character: Character = new Character();
            expect(character.level).toBe(1);
        });
        it("should be alive when created", () => {
            const character: Character = new Character();
            expect(character.is_alive).toBe(true);
        });
    })
    
    describe('damage', () => {
        it('can attack another character', () => {
            const attackingCharacter: Character = new Character();
            const defendingCharacter: Character = new Character();
            attackingCharacter.attack(defendingCharacter, 100);
            expect(defendingCharacter.health).toBe(900);
        });
        it('if defending characters health reaches 0 they should die', () => {
            const attackingCharacter: Character = new Character();
            const defendingCharacter: Character = new Character();
            attackingCharacter.attack(defendingCharacter, 1000);
            expect(defendingCharacter.health).toBe(0);
            expect(defendingCharacter.is_alive).toBe(false);
        })
    })
})
