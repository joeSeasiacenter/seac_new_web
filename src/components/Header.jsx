import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'
import { useWindowSize } from '../../lib/getWindowSize'
import { Fragment, useState } from 'react'
import {
  Bars3Icon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  ArrowPathIcon,
  PlayCircleIcon,
  PhoneIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'

import Image from 'next/image'

const navigation = [
  { name: 'Homepage', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Impact Stories', href: '#' },
  { name: 'Organizational Solution', href: '#' },
  { name: 'News & Events', href: '#' },
]

const products = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon,
  },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const size = useWindowSize()

  return (
    <header
      className="fixed w-full"
      style={{ zIndex: mobileMenuOpen ? '0' : '50' }}
    >
      <nav
        className="mx-auto flex items-center justify-between p-6 lg:px-20"
        aria-label="Global"
      >
        <a href="#" className="flex items-center">
          <Image
            src="/images/seac_logo.png"
            className="h-9 w-auto"
            alt="SEAC logo"
            width={86}
            height={39}
          />
          <Image
            src="/images/empower_lives_through_learning.png"
            className="ml-6 h-7 w-auto"
            alt="SEAC logo"
            width={86}
            height={39}
          />
        </a>
        <div className="flex gap-4 lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Search menu</span>
            <MagnifyingGlassIcon
              className="h-6 w-6 text-white"
              aria-hidden="true"
            />
          </button>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-4 items-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="leading-6 py-4 text-white hover-underline-animation"
            >
              {item.name}
            </a>
          ))}
          <select
            id="country"
            name="country"
            autoComplete="country-name"
            className="border-0 bg-transparent text-white"
          >
            <option>EN</option>
            <option>TH</option>
          </select>
          <a
            href="#"
            className="flex items-center justify-self-center py-2 px-4 text-white"
            style={{ backgroundColor: '#A80030' }}
          >
            <Image
              src="/images/cloud_logging.png"
              alt="Cloud Logging"
              width={14}
              height={14}
            />
            <p className="ml-3">Learning Platform</p>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-neutral-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">SEAC LOGO</span>
              <Image
                src="/images/seac_logo.png"
                className="hidden h-9 w-auto"
                alt="SEAC logo"
                width={86}
                height={39}
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root text-center">
            <div className="-my-6">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    style={{ marginTop: '48px' }}
                    className="-mx-3 block rounded-lg py-2 px-3 text-white underline-offset-[16px] hover:underline"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="grid justify-items-stretch py-6">
                <a
                  href="#"
                  className="flex items-center justify-self-center py-2 px-4 text-white"
                  style={{ backgroundColor: '#A80030' }}
                >
                  <Image
                    src="/images/cloud_logging.png"
                    alt="Cloud Logging"
                    width={14}
                    height={14}
                  />
                  <p className="ml-3">Learning Platform</p>
                </a>
              </div>
              {/* <!-- Language --> */}
              <div class="">
                <div class="absolute inset-x-0 bottom-6 text-white">
                  <span>Language</span>
                  <br />
                  <div className="mt-4 flex justify-center gap-4">
                    <button className="border border-white py-2 px-4 text-white hover:bg-slate-50/30">
                      EN
                    </button>
                    <button className="border border-white py-2 px-4 text-white hover:bg-slate-50/30">
                      TH
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
