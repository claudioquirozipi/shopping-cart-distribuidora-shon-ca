'use client'

interface CategoryFilterProps {
  categories: string[]
  selected: string
  onSelect: (category: string) => void
}

export default function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <button
        onClick={() => onSelect('Todos')}
        className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-label font-medium transition-colors ${
          selected === 'Todos'
            ? 'bg-[#E91E63] text-white shadow'
            : 'bg-white text-[#757575] border border-gray-200 hover:border-[#E91E63] hover:text-[#E91E63]'
        }`}
      >
        Todos
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-label font-medium transition-colors ${
            selected === cat
              ? 'bg-[#E91E63] text-white shadow'
              : 'bg-white text-[#757575] border border-gray-200 hover:border-[#E91E63] hover:text-[#E91E63]'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
