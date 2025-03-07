import React from 'react'

interface PortfolioItemProps {
  title: string
  description?: string
  url?: string
  screenshots?: { desktop?: string; mobile?: string }
}

function PortfolioItem({ title, description, url, screenshots }: PortfolioItemProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <p className="text-gray-600 mt-2">
        {description}
        {screenshots && (
          <span className="ml-2">
            (Screenshots:
            {screenshots.desktop && (
              <a href={screenshots.desktop} className="text-blue-600 hover:underline ml-1">
                desktop
              </a>
            )}
            {screenshots.desktop && screenshots.mobile && "/"}
            {screenshots.mobile && (
              <a href={screenshots.mobile} className="text-blue-600 hover:underline">
                mobile
              </a>
            )}
            )
          </span>
        )}
      </p>
    </div>
  )
}

export default function Portfolio() {
  const portfolioItems = {
    webpages: [
      {
        title: "Salmi.pro",
        url: "http://salmi.pro/",
      },
      {
        title: "Housepipe Oy",
        url: "http://housepipe.fi",
      },
      {
        title: "Webshop template",
        url: "http://salmi.pro/shop",
      },
      {
        title: "JEB Nordic",
        url: "http://salmi.pro/jeb",
      },
      {
        title: "Akupunktio & Energia",
        screenshots: {
          desktop: "portfolio/akupunktio_energia_desktop.png",
          mobile: "portfolio/akupunktio_energia_mobile.png",
        },
      },
      {
        title: "Madisson Beauty",
        screenshots: {
          desktop: "portfolio/madissonbeauty_desktop.png",
          mobile: "portfolio/madissonbeauty_mobile.png",
        },
      },
    ],
    involved: [
      {
        title: "Agoedu",
        url: "http://agoedu.com/",
        description: "Agoedu Ltd. provides education-twisted applications for phone and tablet.",
      },
      {
        title: "Galaxy of Words",
        url: "http://www.galaxyofwords.com/",
        description: "Educational mobile game by Agoedu (download app).",
      },
      {
        title: "Tunn.us",
        url: "http://tunn.us/",
        description: "We make many projects together with my brother Kim.",
      },
    ],
    other: [
      {
        title: "Todo app",
        url: "https://github.com/maex5/react-todo",
        description: "Todo list with React and Foundation.",
      },
      {
        title: "Timer app",
        url: "https://github.com/maex5/ReactTimer",
        description: "Countdown and timer with React and Foundation.",
      },
      {
        title: "Weather app",
        url: "https://github.com/maex5/ReactWeather",
        description: "Testing out React and implementing a weather API.",
      },
      {
        title: "Random page",
        url: "http://salmi.pro/cool",
        description: "Smooth scroll, 3d buttons, 3d text, fast-click (eliminating the 300ms delay on mobile).",
      },
      {
        title: "Alarm Center",
        url: "http://salmi.pro/ject/fall/",
        description: "for fall detector (also for mobile and smartwatch).",
      },
      {
        title: "Commercial",
        url: "http://salmi.pro/GoW_video/",
        description: "for Galaxy of Words prototype.",
      },
      {
        title: "Travel Map",
        url: "http://salmi.pro/travelmap/",
        description: "Testing out Google Maps (+ countries I have visited).",
      },
      {
        title: "Unicorn lovers",
        url: "http://salmi.pro/unicorn",
        description: "A site made in two 15 minute sprints at a Scrum course (PSF) (Warning: contains lots of bugs and bad code).",
      },
    ],
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Portfolio</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Webpages</h3>
          <div className="grid gap-4">
            {portfolioItems.webpages.map((item, index) => (
              <PortfolioItem key={index} {...item} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Involved in</h3>
          <div className="grid gap-4">
            {portfolioItems.involved.map((item, index) => (
              <PortfolioItem key={index} {...item} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Other stuff</h3>
          <div className="grid gap-4">
            {portfolioItems.other.map((item, index) => (
              <PortfolioItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 