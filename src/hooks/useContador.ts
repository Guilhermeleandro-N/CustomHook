import { useState } from 'react';

export default function useContador(valorInicial = 0) {
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