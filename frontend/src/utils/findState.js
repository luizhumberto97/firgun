export default function findState(stateArray, clientState) {
  const currentState = stateArray.find((s) => s.id === clientState);
  return currentState.nome;
}
