export interface Search {
  search: string,
  tournament: IfpaTournament[],

}

export interface IfpaTournament {
  tournament_id: string,
  tournament_name: string,
  country_code: string,
  country_name: string,
  event_count: string,
  last_event_date: string,
}

export interface ResultEnvelope {
  tournament_name: string,
  tournament_id: string,
  event_name: string,
  event_date: string,
  event_id: string,
  results: {
    Results: Results[],
  }
}

export interface Results {
  position: string,
  player_id: string,
  first_name: string,
  last_name: string,
  rank: string,
  wppr_value: string,
}