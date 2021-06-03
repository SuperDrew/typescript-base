export class Character {
    public health: number;
    public level: number;
    public is_alive: boolean;
    
    constructor() {
        this.health = 1000;
        this.level = 1;
        this.is_alive = true;
    }

    public takeDamage(amount: number): void {
        this.health = this.health - amount;
        this.is_alive = this.health > 0;
    }

    attack(target: Character, damage: number): void {
        target.takeDamage(damage);
    }
}