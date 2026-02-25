import { CartItem } from '@/types'

const PHONE = '584120000000'

export function buildWhatsAppUrl(items: CartItem[], total: number): string {
  const lines = items.map(
    (item) =>
      `• ${item.description} x${item.quantity} — $${(item.price * item.quantity).toFixed(2)}`
  )

  const message = [
    '🛒 *Pedido - Distribuidora Shon C.A.*',
    '',
    '📦 *Productos:*',
    ...lines,
    '',
    `💰 *Total: $${total.toFixed(2)}*`,
  ].join('\n')

  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`
}
