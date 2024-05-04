import { validateCharacter } from './validator';
import { Character } from './character';

export const performAttackA = (attacker: Character, defender: Character): void | string => {
    // Verifica se attacker ou defender são inválidos
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
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


