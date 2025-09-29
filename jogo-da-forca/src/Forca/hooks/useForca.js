import { useState, useRef } from 'react';

// Hook que controla toda a lógica do jogo da forca
export default function useForca() {
    // vetor com pelo menos 10 palavras + dicas
    const palavras = [
        { palavra: 'banana', dica: 'Fruta amarela e comum em vitaminas' },
        { palavra: 'javascript', dica: 'Linguagem de programação web' },
        { palavra: 'cachorro', dica: 'Melhor amigo do homem' },
        { palavra: 'computador', dica: 'Máquina para programar e jogar' },
        { palavra: 'abacaxi', dica: 'Fruta com casca espinhosa' },
        { palavra: 'estrelas', dica: 'Luzes no céu à noite' },
        { palavra: 'paralelepipedo', dica: 'Bloco usado em calçamentos antigos' },
        { palavra: 'bicicleta', dica: 'Veículo de duas rodas movido a pedal' },
        { palavra: 'eclipse', dica: 'Fenômeno envolvendo Sol e Lua' },
        { palavra: 'oceano', dica: 'Grande massa de água salgada' },
        { palavra: 'algoritmo', dica: 'Conjunto de instruções para resolver um problema' },
    ];

    const maxErros = 6; // perde no 6º erro (partes do boneco = 6)
    const ultimoIndice = useRef(null);

    function sorteiaIndiceDiferente() {
        if (palavras.length === 1) return 0;
        let idx;
        do {
            idx = Math.floor(Math.random() * palavras.length);
        } while (idx === ultimoIndice.current);
        ultimoIndice.current = idx;
        return idx;
    }

    const indiceInicial = sorteiaIndiceDiferente();
    const [indicePalavra, setIndicePalavra] = useState(indiceInicial);
    const palavraAtual = palavras[indicePalavra].palavra.toLowerCase();
    const dicaAtual = palavras[indicePalavra].dica;

    const [letrasUsadas, setLetrasUsadas] = useState([]); // lista de letras já tentadas
    const [erros, setErros] = useState(0);
    const [estadoJogo, setEstadoJogo] = useState('jogando'); // 'jogando' | 'vitoria' | 'derrota'

    function verificaVitoria(palavra, letras) {
        // vence se todas as letras da palavra (ignorar espaços) estiverem nas letras usadas
        const letrasUnicas = Array.from(new Set(palavra.replace(/\s+/g, '').split('')));
        return letrasUnicas.every((l) => letras.includes(l));
    }

    function tentarLetra(letra) {
        if (estadoJogo !== 'jogando') return;

        // normalizar letra
        letra = letra.toLowerCase();

        if (letrasUsadas.includes(letra)) {
            // já usada, nada muda
            return;
        }

        const novasLetras = [...letrasUsadas, letra];
        setLetrasUsadas(novasLetras);

        if (palavraAtual.includes(letra)) {
            // acerto
            if (verificaVitoria(palavraAtual, novasLetras)) {
                setEstadoJogo('vitoria');
            }
        } else {
            // erro
            const novosErros = erros + 1;
            setErros(novosErros);
            if (novosErros >= maxErros) {
                setEstadoJogo('derrota');
            }
        }
    }

    function reiniciar() {
        const novoIndice = sorteiaIndiceDiferente();
        setIndicePalavra(novoIndice);
        setLetrasUsadas([]);
        setErros(0);
        setEstadoJogo('jogando');
    }

    function montaPalavraExibida() {
        return palavraAtual
            .split('')
            .map((c) => {
                if (c === ' ') return ' ';
                return letrasUsadas.includes(c) || estadoJogo === 'derrota' ? c : '_';
            })
            .join('');
    }

    return {
        dicaAtual,
        palavraExibida: montaPalavraExibida(),
        letrasUsadas,
        erros,
        maxErros,
        estadoJogo,
        tentarLetra,
        reiniciar,
    };
}