/**
 * Representa un usuario de CamisFut
 */

export interface Usuario {
  id: number;
  email: string;
  password?: string;
  nombre: string;
  rol: string;
}
