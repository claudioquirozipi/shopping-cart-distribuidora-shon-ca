'use client'

import { useState, useMemo } from 'react'
import { Product } from '@/types'
import SearchBar from '@/components/SearchBar'
import CategoryFilter from '@/components/CategoryFilter'
import ProductGrid from '@/components/ProductGrid'
import CartSidebar from '@/components/CartSidebar'

interface ShopClientProps {
  products: Product[]
  categories: string[]
}

export default function ShopClient({ products, categories }: ShopClientProps) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todos')

  const filtered = useMemo(() => {
    let result = products
    if (category !== 'Todos') {
      result = result.filter((p) => p.category === category)
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter((p) => p.description.toLowerCase().includes(q))
    }
    return result
  }, [products, search, category])

  return (
    <>
      <div className="space-y-3 mb-6">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter categories={categories} selected={category} onSelect={setCategory} />
      </div>
      <ProductGrid products={filtered} />
      <CartSidebar />
    </>
  )
}
