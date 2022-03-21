export interface Route {
  route_id?: string;
  agency_id: number;
  route_label?: string;
}

export interface Direction {
  direction_id: number;
  direction_name?: string;
}

export interface Place {
  place_code?: string;
  description?: string;
}
