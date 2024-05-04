// validator.test.ts
import { validateCharacter } from './validator';

describe('validateCharacter function', () => {
    // deve retornar falso para nome vazio
    it('should return false for empty name', () => {
        const character = {
            nome: '',
            vida: 1500,
            defesa: 100,
            forca: 200
        };

        const isValid = validateCharacter(character);

        expect(isValid).toBe(false);
    });
// deve retornar falso pra 0 vida
    it('should return false for character with zero life', () => {
        const character = {
            nome: 'Guerreiro',
            vida: 0,
            defesa: 100,
            forca: 200
        };

        const isValid = validateCharacter(character);

        expect(isValid).toBe(false);
    });
    // deve retornar falso pra 0 força
    it('should return false for character with zero strength', () => {
        const character = {
            nome: 'Mago',
            vida: 1500,
            defesa: 100,
            forca: 0
        };

        const isValid = validateCharacter(character);

        expect(isValid).toBe(false);
    });
    // deve retornar falso pra 0 defesa
    it('should return false for character with zero defense', () => {
        const character = {
            nome: 'Cavaleiro',
            vida: 1500,
            defesa: 0,
            forca: 200
        };

        const isValid = validateCharacter(character);

        expect(isValid).toBe(false);
    });
    // deve retornar falso pra vida, força ou defesa negativas
    it('should return false for character with negative life, strength or defense', () => {
        const character1 = {
            nome: 'Necromante',
            vida: -100,
            defesa: 100,
            forca: 200
        };
        const character2 = {
            nome: 'Arqueiro',
            vida: 1500,
            defesa: -50,
            forca: 200
        };
        const character3 = {
            nome: 'Assassino',
            vida: 1500,
            defesa: 100,
            forca: -150
        };

        const isValid1 = validateCharacter(character1);
        const isValid2 = validateCharacter(character2);
        const isValid3 = validateCharacter(character3);

        expect(isValid1).toBe(false);
        expect(isValid2).toBe(false);
        expect(isValid3).toBe(false);
    });
    //Teste para personagem com informações válidas
    it('should return true for character with valid information', () => {
        const character = {
            nome: 'Guerreiro',
            vida: 1500,
            defesa: 100,
            forca: 200
        };

        const isValid = validateCharacter(character);

        expect(isValid).toBe(true);
    });
});
