'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="glass-button flex items-center gap-2 text-sm"
    aria-label={label}
  >
    <Icon className="h-4 w-4" />
    <span className="hidden sm:inline">{label}</span>
  </Link>
)

export default function Header() {
  return (
    <header className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 relative mb-6">
            <Image
              src="/max.jpg"
              alt="Max Salmi"
              fill
              className="rounded-full object-cover ring-4 ring-white/10"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
            Max Salmi
          </h1>
          <p className="text-xl text-gray-400">Ad Tech | Software development | Sales</p>
        </div>
      </div>
    </header>
  )
} 