export const getTournamentIdTuples = (ids: number[]): [number, number][] => {
  const tournament_ids: [number, number][] = [];
  let i = 0;
  while (i < ids.length) {
    tournament_ids.push([ids[i], ids[i + 1]]);
    i = i + 2;
  }
  return tournament_ids;
};
