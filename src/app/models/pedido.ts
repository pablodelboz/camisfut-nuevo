import { DetallePedido } from './detalle-pedido';

export interface Pedido {
  id: number;
  idUsuario: number;
  fecha: string;
  total: number;
  estado: string;
  detalles: DetallePedido[];
}
