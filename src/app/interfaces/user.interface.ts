
export interface User {
  monto:         string;
  monedaOrigen:  string;
  monedaDestino: string;
}

export interface UserResponse {
  user: User
}
