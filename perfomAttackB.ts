import { Character } from './character';

interface CharacterValidator {
    validateCharacter(character: Character): boolean;
}

export const performAttackB = (attacker: Character, defender: Character, validator: CharacterValidator): void | string => {
    // Verifica se attacker ou defender são inválidos
    if (!validator.validateCharacter(attacker) || !validator.validateCharacter(defender)) {
        return 'Invalid Character';
    }

    // Calcula o dano do ataque
    const damage = Math.max(0, attacker.forca - defender.defesa);

    // Remove a vida do defender com base no dano do ataque
    defender.vida -= damage;

    // Se a vida do defender for menor ou igual a 0, ele morre
    if (defender.vida <= 0) {
        console.log(`${defender.nome} foi derrotado!`);
    }
};
