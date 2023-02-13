export interface PagedData<T> {
  data: T[];
  links: {
    first: string | null;
    last: string | null;
    next: string | null;
    prev: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    total: number;
  };
}

export interface Tournament {
  tournamentId: number;
  name: string;
  status: string;
  type: string; // "group_knockout" | "knockout" | "group_matchplay" | "matchplay" | "frenzy"
  startLocal: string;
  location: TournamentLocation;
  linkedTournamentId: number | null;
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
