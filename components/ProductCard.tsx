'use client'

import { useCart } from '@/context/CartContext'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col gap-3 hover:shadow-md transition-shadow">
      <div className="flex-1">
        <p className="font-label text-xs text-[#E91E63] uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <p className="font-body text-sm text-[#212121] leading-snug line-clamp-3">
          {product.description}
        </p>
        <p className="font-label text-xs text-[#757575] mt-1">Cód: {product.code}</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-heading font-bold text-lg text-[#212121]">
          ${product.price.toFixed(2)}
        </span>
        <button
          onClick={() => addItem(product)}
          className="bg-[#E91E63] hover:bg-[#C2185B] text-white text-sm font-semibold px-4 py-1.5 rounded-xl transition-colors"
        >
          Agregar
        </button>
      </div>
    </div>
  )
}
