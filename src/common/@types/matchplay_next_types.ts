export interface Tournament {
  tournamentId: number;
  name: string;
  location: TournamentLocation;
}

export interface TournamentLocation {
  locationId: number;
  name: string;
}

export interface TournamentGames {
  tournamentId: number;
  arenaId: number;
  status: string;
  startedAt: string;
  duration: number;
  playerIds: number[];
  arena: GameArena;
}

export interface GameArena {
  arenaId: number;
  name: string;
  categoryId: number;
}