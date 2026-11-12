/**
 * Representa un pedido realizado en CamisFut
 */

export interface Pedido {
  id: number;
  usuario: number;
  fecha: string;
  total: number;
  estado: string;
}
