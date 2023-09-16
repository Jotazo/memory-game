const getPlayers = (numPlayers: number) => {
  return new Array(numPlayers).fill(null).map(generatePlayer);
};

const generatePlayer = (value: null, index: number) => {
  return {
    id: crypto.randomUUID(),
    pairs: 0,
    numPlayer: index + 1,
    isMyTurn: index === 0,
  };
};
export default getPlayers;
