export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  imagen_url: string;
  categoriasIds: number[];
}
