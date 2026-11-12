/**
 * Representa la relación entre un producto y una categoría
 */

export interface ProductoCategorias {
  id: ProductoCategoriasId;
  producto: number;
  categoria: number;
}

import { ProductoCategoriasId } from './producto-categorias-id';
