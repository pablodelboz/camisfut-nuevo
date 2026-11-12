/**
 * Representa cada producto incluido en un pedido
 */

export interface DetallePedido {
  id: number;
  pedido: number;
  producto: number;
  cantidad: number;
  subtotal: number;
}
