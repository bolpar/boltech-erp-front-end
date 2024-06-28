import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const getCookieSchema = z.object({
  name: z.string(),
})

export async function POST(request: NextRequest) {
  const requestBody = await request.json()

  const { name } = getCookieSchema.parse(requestBody)

  if (!name) {
    return NextResponse.json({ message: 'Cookie não fornecido.' })
  }

  const cookieStore = cookies()
  const hasCookie = cookieStore.has(name)

  if (!hasCookie) {
    return NextResponse.json({ message: 'Cookie não encontrado.' })
  }

  const cookie = cookieStore.get(name)

  return NextResponse.json({ cookie })
}
