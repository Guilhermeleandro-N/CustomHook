import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// ==========================================
// CUSTOM HOOK
// ==========================================

function useContador(valorInicial = 0) {
  const [valor, setValor] = useState(valorInicial);

  function incrementar() {
    setValor(valorAnterior => valorAnterior + 1);
  }

  function decrementar() {
    setValor(valorAnterior => valorAnterior - 1);
  }

  function zerar() {
    setValor(valorInicial);
  }

  return {
    valor,
    incrementar,
    decrementar,
    zerar,
  };
}

// ==========================================
// COMPONENTE
// ==========================================

export default function App() {
  // O mesmo Custom Hook é utilizado duas vezes.
  // Cada chamada possui seu próprio estado.

  const contador1 = useContador(0);
  const contador2 = useContador(10);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Custom Hook: useContador
      </Text>

      <Text style={styles.subtitulo}>
        Dois contadores utilizando a mesma lógica
      </Text>

      {/* CONTADOR 1 */}
      <View style={styles.card}>
        <Text style={styles.nome}>Contador 1</Text>

        <Text style={styles.valor}>
          {contador1.valor}
        </Text>

        <View style={styles.botoes}>
          <TouchableOpacity
            style={styles.botao}
            onPress={contador1.decrementar}
          >
            <Text style={styles.textoBotao}>−</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={contador1.incrementar}
          >
            <Text style={styles.textoBotao}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.botaoZerar}
          onPress={contador1.zerar}
        >
          <Text style={styles.textoZerar}>Zerar</Text>
        </TouchableOpacity>
      </View>

      {/* CONTADOR 2 */}
      <View style={styles.card}>
        <Text style={styles.nome}>Contador 2</Text>

        <Text style={styles.valor}>
          {contador2.valor}
        </Text>

        <View style={styles.botoes}>
          <TouchableOpacity
            style={styles.botao}
            onPress={contador2.decrementar}
          >
            <Text style={styles.textoBotao}>−</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={contador2.incrementar}
          >
            <Text style={styles.textoBotao}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.botaoZerar}
          onPress={contador2.zerar}
        >
          <Text style={styles.textoZerar}>Zerar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.explicacao}>
        O useContador contém a lógica do contador.
        {'\n\n'}
        A mesma lógica é reutilizada em dois lugares,
        mas cada contador mantém seu próprio estado.
      </Text>
    </SafeAreaView>
  );
}

// ==========================================
// ESTILOS
// ==========================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#FFFFFF',
  },

  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    color: '#B3B3B3',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#1A1A1A',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 5,
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },

  valor: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#E50914',
  },

  botoes: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },

  botao: {
    backgroundColor: '#C00000',
    width: 60,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },

  botaoZerar: {
    marginTop: 15,
    backgroundColor: '#333333',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoZerar: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  explicacao: {
    textAlign: 'center',
    marginTop: 10,
    color: '#AAAAAA',
    lineHeight: 22,
  },
});