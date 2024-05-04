import { performAttackA } from './performAttackA'; // Importe a função que utiliza validateCharacter diretamente na implementação
import { performAttackB } from './perfomAttackB'; // Importe a função que utiliza inversão de dependências
import { validateCharacter } from './validator'; // Importe a função original de validação de personagem

// Criando um Mock da função validateCharacter para performAttackA
jest.mock('./validator', () => ({
    validateCharacter: jest.fn().mockReturnValue(true) // Mock retorna true por padrão
}));

describe('performAttackA function', () => {
    it('should decrease defender life by 200 points', () => {
        // Define os personagens para o teste
        const attacker = { nome: 'Guerreiro', vida: 1500, defesa: 100, forca: 200 };
        const defender = { nome: 'Inimigo', vida: 1500, defesa: 100, forca: 150 };

        // Chama a função performAttackA
        performAttackA(attacker, defender);

        // Verifica se o defensor perdeu 200 pontos de vida
        expect(defender.vida).toBe(1300); // 1500 - 200 = 1300

        // Verifica se a função validateCharacter foi chamada
        expect(validateCharacter).toHaveBeenCalled();
    });
});

// Criando um Mock da função validateCharacter para performAttackB
const mockValidateCharacterB = jest.fn().mockReturnValue(true);

describe('performAttackB function', () => {
    it('should decrease defender life by 200 points', () => {
        // Define os personagens para o teste
        const attacker = { nome: 'Guerreiro', vida: 1500, defesa: 100, forca: 200 };
        const defender = { nome: 'Inimigo', vida: 1500, defesa: 100, forca: 150 };

        performAttackB(attacker, defender, {
            validateCharacter: mockValidateCharacterB // Passa o mock como validador
        });
        // Verifica se o defensor perdeu 200 pontos de vida
        expect(defender.vida).toBe(1300); // 1500 - 200 = 1300

        // Verifica se a função validateCharacter foi chamada
        expect(mockValidateCharacterB).toHaveBeenCalled();
    });
});

describe('performAttackA function', () => {
    it('should return "Invalid Character" when attacker has invalid information', () => {
        // Define um personagem com informações inválidas (vida negativa)
        const attacker = { nome: 'Guerreiro', vida: -100, defesa: 100, forca: 200 };
        const defender = { nome: 'Inimigo', vida: 1500, defesa: 100, forca: 150 };

        // Chama a função performAttackA
        const result = performAttackA(attacker, defender);

        // Verifica se a função retorna a mensagem de erro esperada
        expect(result).toBe('Invalid Character');

        // Verifica se a função validateCharacter foi chamada apenas uma vez
        expect(validateCharacter).toHaveBeenCalledTimes(1);

        // Verifica o que a função validateCharacter retornou
        expect(validateCharacter).toHaveReturnedWith(false);

        // Verifica quantas vezes a função validateCharacter retornou
        expect(validateCharacter).toHaveReturnedTimes(1);
    });
});

describe('performAttackB function', () => {
    it('should return "Invalid Character" when attacker has invalid information', () => {
        // Define um personagem com informações inválidas (vida negativa)
        const attacker = { nome: 'Guerreiro', vida: -100, defesa: 100, forca: 200 };
        const defender = { nome: 'Inimigo', vida: 1500, defesa: 100, forca: 150 };

        // Chama a função performAttackB
        const result = performAttackB(attacker, defender, {
            validateCharacter: mockValidateCharacterB // Passa o mock como validador
        });

        // Verifica se a função retorna a mensagem de erro esperada
        expect(result).toBe('Invalid Character');

        // Verifica se a função validateCharacter foi chamada apenas uma vez
        expect(mockValidateCharacterB).toHaveBeenCalledTimes(1);

        // Verifica o que a função validateCharacter retornou
        expect(mockValidateCharacterB).toHaveReturnedWith(false);

        // Verifica quantas vezes a função validateCharacter retornou
        expect(mockValidateCharacterB).toHaveReturnedTimes(1);
    });
});
