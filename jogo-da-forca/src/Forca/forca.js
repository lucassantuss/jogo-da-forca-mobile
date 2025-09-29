import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    FlatList,
    Keyboard,
} from 'react-native';
import useForca from './hooks/useForca';
import { estilos } from './styles/styles';

export default function Forca() {
    /// Lucas Araujo dos Santos
    /// EC10
    /// 081210009
    const {
        dicaAtual,
        estadoJogo,
        palavraExibida,
        letrasUsadas,
        erros,
        maxErros,
        tentarLetra,
        reiniciar,
    } = useForca();

    const [entrada, setEntrada] = useState('');

    function enviarLetra() {
        const letra = (entrada || '').trim();
        if (!letra) return;
        // aceitar apenas 1 caractere letra (unicode letter)
        if (letra.length !== 1 || !/\p{L}/u.test(letra)) {
            Alert.alert('Entrada inválida', 'Digite apenas uma letra.');
            setEntrada('');
            inputRef.current?.focus();
            return;
        }
        tentarLetra(letra.toLowerCase());
        setEntrada('');
        inputRef.current?.focus();
        Keyboard.dismiss();
    }

    const inputRef = useRef(null);

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Jogo da Forca</Text>

            <View style={estilos.areaJogo}>
                <View style={estilos.areaForca}>
                    {/* Estrutura do poste */}
                    <View style={estilos.posteBase} />
                    <View style={estilos.posteVertical} />
                    <View style={estilos.posteHorizontal} />
                    <View style={estilos.corda} />

                    {/* Partes do boneco - aparecem conforme erros */}
                    {/* 1: cabeça */}
                    <View style={[estilos.cabeca, erros >= 1 ? estilos.visivel : estilos.invisivel]} />
                    {/* 2: tronco */}
                    <View style={[estilos.tronco, erros >= 2 ? estilos.visivel : estilos.invisivel]} />
                    {/* 3: braco esquerdo */}
                    <View style={[estilos.bracoEsquerdo, erros >= 3 ? estilos.visivel : estilos.invisivel]} />
                    {/* 4: braco direito */}
                    <View style={[estilos.bracoDireito, erros >= 4 ? estilos.visivel : estilos.invisivel]} />
                    {/* 5: perna esquerda */}
                    <View style={[estilos.pernaEsquerda, erros >= 5 ? estilos.visivel : estilos.invisivel]} />
                    {/* 6: perna direita */}
                    <View style={[estilos.pernaDireita, erros >= 6 ? estilos.visivel : estilos.invisivel]} />
                </View>

                <View style={estilos.infoArea}>
                    <Text style={estilos.rotuloDica}>Dica:</Text>
                    <Text style={estilos.textoDica}>{dicaAtual}</Text>

                    <Text style={estilos.rotuloPalavra}>Palavra:</Text>
                    <Text style={estilos.palavra}>{palavraExibida}</Text>

                    <Text style={estilos.rotuloLetras}>Letras já usadas:</Text>
                    <View style={estilos.listaLetras}>
                        <FlatList
                            data={letrasUsadas}
                            keyExtractor={(item) => item}
                            horizontal
                            renderItem={({ item }) => (
                                <View style={estilos.bolhaLetra}>
                                    <Text style={estilos.letraBolha}>{item.toUpperCase()}</Text>
                                </View>
                            )}
                            ListEmptyComponent={<Text style={{ color: '#666' }}>Nenhuma</Text>}
                        />
                    </View>

                    <Text style={estilos.erros}>
                        Erros: {erros} / {maxErros}
                    </Text>

                    {estadoJogo === 'jogando' ? (
                        <>
                            <View style={estilos.inputRow}>
                                <TextInput
                                    ref={inputRef}
                                    style={estilos.inputLetra}
                                    value={entrada}
                                    onChangeText={setEntrada}
                                    autoCapitalize="none"
                                    maxLength={1}
                                    placeholder="Digite uma letra"
                                />
                                <TouchableOpacity style={estilos.botao} onPress={enviarLetra}>
                                    <Text style={estilos.textoBotao}>Tentar</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    ) : (
                        <View style={estilos.resultadoArea}>
                            <Text style={estadoJogo === 'vitoria' ? estilos.textoVitoria : estilos.textoDerrota}>
                                {estadoJogo === 'vitoria' ? 'Você ganhou! 🎉' : 'Você perdeu 😞'}
                            </Text>
                            <Text style={estilos.textoRevelar}>
                                Palavra: <Text style={estilos.palavraRevelada}>{palavraExibida.replace(/ /g, '\u00A0')}</Text>
                            </Text>
                            <TouchableOpacity
                                style={[estilos.botao, { marginTop: 10 }]}
                                onPress={() => reiniciar()}
                            >
                                <Text style={estilos.textoBotao}>Reiniciar (nova palavra)</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                    {estadoJogo === 'jogando' && (
                        <TouchableOpacity
                            style={[estilos.botao, { marginTop: 10 }]}
                            onPress={() =>
                                Alert.alert(
                                    'Desistir',
                                    'Deseja reiniciar com outra palavra?',
                                    [
                                        { text: 'Cancelar', style: 'cancel' },
                                        { text: 'Sim', onPress: () => reiniciar() },
                                    ],
                                    { cancelable: true }
                                )
                            }
                        >
                            <Text style={estilos.textoBotao}>Reiniciar (trocar palavra)</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    );
}