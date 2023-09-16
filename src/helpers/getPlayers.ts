const getPlayers = (numPlayers: number) => {
  return new Array(numPlayers).fill(null).map(generatePlayer);
};

const generatePlayer = (_: null, index: number) => {
  return {
    id: crypto.randomUUID(),
    pairs: 0,
    numPlayer: index + 1,
    isMyTurn: index === 0,
    isWinner: false,
  };
};
export default getPlayers;
