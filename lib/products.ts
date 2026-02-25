import priceListData from '@/data/price-list.json'
import { Product } from '@/types'

interface RawProduct {
  code: string
  description: string
  price1: number
  price2: number
  image: string
  category: string
}

const rawProducts = priceListData.products as RawProduct[]

export function getProducts(tier: '1' | '2'): Product[] {
  const priceKey = tier === '1' ? 'price1' : 'price2'
  return rawProducts.map((p) => ({
    code: p.code,
    description: p.description,
    price: p[priceKey],
    image: p.image,
    category: p.category,
  }))
}

export function getCategories(products: Product[]): string[] {
  const cats = Array.from(new Set(products.map((p) => p.category)))
  return cats.sort()
}
