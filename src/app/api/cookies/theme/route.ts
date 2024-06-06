import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const switchThemeSchema = z.object({
  theme: z.string(),
})

export async function POST(request: NextRequest) {
  const requestBody = await request.json()

  const { theme } = switchThemeSchema.parse(requestBody)

  if (!theme) {
    return NextResponse.json({ message: 'Tema não fornecido.' })
  }

  cookies().set({
    name: 'theme',
    value: String(theme),
    httpOnly: true,
    secure: true,
    path: '/',
  })

  return NextResponse.json({})
}
