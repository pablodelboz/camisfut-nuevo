/**
 * Representa un producto de CamisFut
 * Los campos coinciden con los datos del backend Spring Boot
 */

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  imagen_url: string; 
  categorias: number[];
}
