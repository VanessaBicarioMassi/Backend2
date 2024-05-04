// validator.ts funcao que valida as informacoes/caracteristicas dos personagens
import { Character } from './character';

export const validateCharacter = (input: Character): boolean => {
    // Verifica se algum dos atributos está vazio
    if (!input.nome || input.vida === undefined || input.defesa === undefined || input.forca === undefined) {
        return false;
    }
    
    // Verifica se vida, defesa e força são maiores que 0
    if (input.vida <= 0 || input.defesa <= 0 || input.forca <= 0) {
        return false;
    }

    // Se passou por todas as validações, retorna true
    return true;
};

