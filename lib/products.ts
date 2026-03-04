import { fetchAllProducts, fetchPriceLists, ApiProduct } from './api'
import { Product } from '@/types'

const PRICE_LIST_NAME = process.env.NEXT_PUBLIC_PRICE_LIST_NAME ?? 'lista-1'

export async function getProducts(): Promise<Product[]> {
  const priceLists = await fetchPriceLists()

  // Buscar por nombre exacto; si no existe, usar el primero disponible
  const priceList =
    priceLists.find((pl) => pl.name.toLowerCase() === PRICE_LIST_NAME.toLowerCase()) ??
    priceLists[0]

  const apiProducts = await fetchAllProducts(priceList?.id)

  return apiProducts.map((p: ApiProduct): Product => ({
    id: p.id,
    code: p.code,
    description: p.name,
    basePrice: Number(p.price),
    price: p.listPrice !== undefined ? p.listPrice : Number(p.price),
    image: p.imageUrl ?? '',
    category: p.category.name,
  }))
}

export function getCategories(products: Product[]): string[] {
  const cats = Array.from(new Set(products.map((p) => p.category)))
  return cats.sort()
}
