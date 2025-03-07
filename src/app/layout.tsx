import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './reset.css'
import { ThemeProvider } from '@/context/ThemeContext'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Max Salmi | Ad Tech Manager & Software Engineer',
  description: 'Personal portfolio of Max Salmi - Ad Tech Manager and Software Engineer specializing in digital advertising technology and software development',
  keywords: 'Max Salmi, Ad Tech, Software Engineering, Digital Advertising, Programmatic, Google Ads, GAM, Header Bidding, Prebid.js, JavaScript, TypeScript, React',
  authors: [{ name: 'Max Salmi' }],
  openGraph: {
    title: 'Max Salmi | Ad Tech Manager & Software Engineer',
    description: 'Personal portfolio of Max Salmi - Ad Tech Manager and Software Engineer specializing in digital advertising technology and software development',
    url: 'https://salmi.pro',
    siteName: 'Max Salmi Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Max Salmi | Ad Tech Manager & Software Engineer',
    description: 'Personal portfolio of Max Salmi - Ad Tech Manager and Software Engineer specializing in digital advertising technology and software development',
    creator: '@maex5',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  alternates: {
    canonical: 'https://salmi.pro'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
} 