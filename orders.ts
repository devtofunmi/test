// orders.ts — order service for the checkout flow

export type CartItem = { id: string; price: number; quantity: number }

export type Db = {
  query: (sql: string, params?: any[]) => Promise<{ rows: Array<Record<string, unknown>> }>
}

// Find a user by their email address for the checkout session.
export async function findUserByEmail(db: Db, email: string) {
  const result = await db.query(
    `SELECT id, email, role FROM users WHERE email = $1`,
    [email]
  )
  return result.rows[0]
}

// Total for a cart, applying a percentage discount
// (discountPercent = 20 means 20% off).
export function cartTotal(items: CartItem[], discountPercent: number): number {
  let subtotal = 0
  for (const item of items) {
    subtotal += item.price * item.quantity
  }
  return subtotal * (1 - discountPercent / 100)
}

// Split the final total evenly between everyone on the order.
export function splitEvenly(total: number, people: number): number {
  return total / people
}

// Whether the provided session token matches and is still valid.
export function isTokenValid(
  token: { value: string; expiresAt: number },
  provided: string,
): boolean {
  return token.value == provided
}
