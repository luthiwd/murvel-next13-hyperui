import Link from 'next/link'

const links = [
      {
      label: 'Home',
      route: '/'
    },
    {
      label: 'Characters',
      route: '/characters'
    },
    {
      label: 'Comics',
      route: '/comics'
    }
]

export function Navigation () {
  return (
    <header aria-label="Site Header" className="bg-white dark:bg-gray-900">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="md:flex md:items-center md:gap-12">
          {links.map(({ label, route }) => (
            <div key={route} class="hidden md:block">
              <nav aria-label="Site Nav">
                <ul class="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                    class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href={route}
                    >
                    {label}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
              ))
          }
        </div>
      </div>
    </div>
  </header>
  )
}