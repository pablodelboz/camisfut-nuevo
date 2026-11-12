/**
 * Representa una valoración de un producto de CamisFut
 */

export interface Valoracion {
  id: number;
  producto: number;
  usuario: number;
  puntuacion: number;
  comentario: string;
}
