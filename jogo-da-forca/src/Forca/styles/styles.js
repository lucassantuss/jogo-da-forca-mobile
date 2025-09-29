import { StyleSheet } from 'react-native';

export const estilosGlobais = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7FB',
        padding: 12,
    },
});

export const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 28,
        fontWeight: '700',
        marginVertical: 12,
        color: '#222',
    },
    areaJogo: {
        flexDirection: 'row',
        width: '100%',
        flex: 1,
    },
    areaForca: {
        width: '45%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 10,
        position: 'relative',
        minHeight: 300,
    },

    // postes (gallows)
    posteBase: {
        position: 'absolute',
        bottom: 10,
        width: 120,
        height: 10,
        backgroundColor: '#5D4037',
        borderRadius: 4,
    },
    posteVertical: {
        position: 'absolute',
        bottom: 20,
        left: 50,
        width: 10,
        height: 200,
        backgroundColor: '#5D4037',
        borderRadius: 4,
    },
    posteHorizontal: {
        position: 'absolute',
        top: 10,
        left: 55,
        width: 120,
        height: 10,
        backgroundColor: '#5D4037',
        borderRadius: 4,
        transform: [{ translateX: 0 }],
    },
    corda: {
        position: 'absolute',
        top: 22,
        left: 165,
        width: 2,
        height: 30,
        backgroundColor: '#000',
    },

    // boneco
    cabeca: {
        position: 'absolute',
        top: 54,
        left: 140,
        width: 48,
        height: 48,
        borderRadius: 24,
        borderWidth: 3,
        borderColor: '#000',
        backgroundColor: 'transparent',
    },
    tronco: {
        position: 'absolute',
        top: 102,
        left: 160,
        width: 4,
        height: 70,
        backgroundColor: '#000',
    },
    bracoEsquerdo: {
        position: 'absolute',
        top: 110,
        left: 120,
        width: 50,
        height: 4,
        backgroundColor: '#000',
        transform: [{ rotate: '-45deg' }],
        borderRadius: 2,
    },
    bracoDireito: {
        position: 'absolute',
        top: 110,
        left: 166,
        width: 50,
        height: 4,
        backgroundColor: '#000',
        transform: [{ rotate: '45deg' }],
        borderRadius: 2,
    },
    pernaEsquerda: {
        position: 'absolute',
        top: 170,
        left: 146,
        width: 50,
        height: 4,
        backgroundColor: '#000',
        transform: [{ rotate: '45deg' }],
        borderRadius: 2,
    },
    pernaDireita: {
        position: 'absolute',
        top: 170,
        left: 166,
        width: 50,
        height: 4,
        backgroundColor: '#000',
        transform: [{ rotate: '-45deg' }],
        borderRadius: 2,
    },

    visivel: {
        opacity: 1,
    },
    invisivel: {
        opacity: 0,
    },

    infoArea: {
        width: '55%',
        paddingLeft: 14,
        paddingTop: 10,
    },
    rotuloDica: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    textoDica: {
        fontSize: 16,
        marginBottom: 12,
        color: '#111',
    },
    rotuloPalavra: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 6,
    },
    palavra: {
        fontSize: 28,
        letterSpacing: 3,
        marginVertical: 8,
        color: '#000',
    },
    rotuloLetras: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 6,
    },
    listaLetras: {
        minHeight: 36,
        marginTop: 6,
        marginBottom: 8,
    },
    bolhaLetra: {
        borderWidth: 1,
        borderColor: '#DDD',
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 6,
        marginRight: 6,
        backgroundColor: '#FFF',
    },
    letraBolha: {
        fontSize: 16,
        fontWeight: '700',
    },
    erros: {
        marginTop: 8,
        fontSize: 14,
        color: '#333',
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    inputLetra: {
        borderWidth: 1,
        borderColor: '#CCC',
        padding: 10,
        width: 100,
        height: 50,
        marginRight: 8,
        borderRadius: 6,
        fontSize: 22,
        textAlign: 'center',
        backgroundColor: '#FFF',
    },
    botao: {
        backgroundColor: '#2e7d32',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotao: {
        color: '#FFF',
        fontWeight: '700',
    },
    resultadoArea: {
        marginTop: 10,
        alignItems: 'flex-start',
    },
    textoVitoria: {
        color: '#2e7d32',
        fontSize: 20,
        fontWeight: '800',
    },
    textoDerrota: {
        color: '#c62828',
        fontSize: 20,
        fontWeight: '800',
    },
    textoRevelar: {
        marginTop: 6,
        fontSize: 16,
    },
    palavraRevelada: {
        fontWeight: '700',
        fontSize: 16,
    },
});
