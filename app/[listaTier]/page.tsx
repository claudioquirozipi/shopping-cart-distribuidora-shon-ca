import { notFound } from 'next/navigation'
import { getProducts, getCategories } from '@/lib/products'
import Header from '@/components/Header'
import ShopClient from './ShopClient'

interface Props {
  params: Promise<{ listaTier: string }>
}

export default async function TierPage({ params }: Props) {
  const { listaTier } = await params

  if (listaTier !== 'lista-1') notFound()

  const products = await getProducts()
  const categories = getCategories(products)

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-4">
          <h2 className="font-heading font-semibold text-[#212121]">
            Catálogo de Productos
          </h2>
          <p className="font-body text-sm text-[#757575]">
            {products.length} productos disponibles
          </p>
        </div>
        <ShopClient products={products} categories={categories} />
      </main>
    </div>
  )
}
