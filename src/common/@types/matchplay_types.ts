export interface Series {
  series_id: number,
  name: string,
  status: string,
  scoring: string,
  removed_results: number,
  tournaments: Tournament[],
  test: number
}

export interface Tournament {
  tournament_id: number,
  name: string,
  type: string,
  status: string,
  url_label: string,
  start: string,
  points_map: string,
  test: number,
  linked_tournament_id: number,
  strike_limit: number,
  has_friedly_three_player_strikes: boolean,
  group_strikes_awarded: number,
  games_per_round: number,
  players: Player[],
  arenas: Arena[],
  date: string
}

export interface Player {
  player_id: number,
  user_id: number,
  claimed_by: number,
  ifpa_id: number,
  name: string,
  status: string,
  tournament: PlayerTournament
}

export interface PlayerTournament {
  tournament_id: number,
  status: string,
  seed: number,
  strike_count: number,
}

export interface Arena {
  arena_id: number,
  name: string,
  status: string,
  opdb_id: string,
  tournament: ArenaTournament
}

export interface ArenaTournament {
  tournament_id: number,
  status: string
}

export interface Standings {
  player_id: number,
  position: number,
  byes: string,
  points: number,
  custom_count: number,
  name: string,
  claimed_by: number
}
