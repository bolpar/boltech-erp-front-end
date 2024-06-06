import { SideBar } from '@/components/side-bar'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="antialiased">
      <body className={inter.className}>
        <div className="grid min-h-screen grid-cols-app dark:bg-darkMode">
          <SideBar />

          <main className="bg-white px-4 pb-12 dark:bg-darkMode lg:col-start-2 lg:px-8">
            <ThemeProvider attribute="class">{children}</ThemeProvider>
          </main>
        </div>
      </body>
    </html>
  )
}
