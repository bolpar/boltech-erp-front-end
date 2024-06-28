import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const setCookieSchema = z.object({
  name: z.string(),
  value: z.string(),
})

export async function POST(request: NextRequest) {
  const requestBody = await request.json()

  const { name, value } = setCookieSchema.parse(requestBody)

  if (!name) {
    return NextResponse.json({ message: 'Chave do Cookie não fornecido.' })
  }

  if (!value) {
    return NextResponse.json({ message: 'Valor do Cookie não fornecido.' })
  }

  cookies().set({
    name: 'currentOption',
    value: String(value),
    httpOnly: true,
    secure: true,
    path: '/',
    sameSite: 'lax',
  })

  return NextResponse.json({})
}
