import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { ArrowRightIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer
      className="p-6 lg:py-14 lg:px-16"
      style={{ backgroundColor: '#A80030' }}
    >
      <div className="hidden lg:flex">
        <div className="lg:w-1/4">
          <Image
            src="/images/seac_logo.png"
            alt="SEAC Logo"
            width={105.85}
            height={48}
          />
          <p className="mt-4 text-base text-white">
            Empower Lives Through Learning
          </p>
          <div className="flex items-center gap-5 opacity-50 lg:mt-16">
            <Link href="#">
              <Image
                src="/images/facebook_logo.png"
                alt="Facebook Logo"
                width={20}
                height={20}
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/youtube_logo.png"
                alt="Youtube Logo"
                width={22}
                height={15.47}
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/linkedin_logo.png"
                alt="Linkedin Logo"
                width={20}
                height={20}
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/line_logo.png"
                alt="Line Logo"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
        <div className="text-white lg:w-2/4">
          <h3 className="dinProH3">Need more information?</h3>
          <p className="notoBody02 mt-2">
            Talk with our specialists to learn how we can help you achieve your
            goals.
          </p>
          <button className="notoBody01 mt-6 flex items-center bg-black px-6 py-2">
            <span>Become a partner</span>
            <ArrowRightIcon className="ml-3 h-5 w-auto" />{' '}
          </button>
        </div>
        <div className="text-white lg:w-1/4">
          <div className="flex justify-between">
            <div>
              <h6 className="dinProH6">Menu</h6>
              <ol className="dinProOverLine">
                <li className="mt-2">
                  <Link href="/">Home</Link>
                </li>
                <li className="mt-2">
                  <Link href="/aboutus">About Us</Link>
                </li>
                <li className="mt-2">
                  <Link href="/impactstories">Impact Stories</Link>
                </li>
                <li className="mt-2">
                  <Link href="/news">News & Events</Link>
                </li>
                <li className="mt-2">
                  <Link href="/learningplatform">Learning Platform</Link>
                </li>
              </ol>
            </div>
            <div>
              <h6 className="dinProH6">Information</h6>
              <ol className="dinProOverLine">
                <li className="mt-2">
                  <Link href="/careers">Careers</Link>
                </li>
                <li className="mt-2">
                  <Link href="/resources">Resources</Link>
                </li>
                <li className="mt-2">
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li className="mt-2">
                  <Link href="/contact">Contact</Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <Image
          src="/images/seac_logo.png"
          alt="SEAC Logo"
          width={70}
          height={32}
        />
        <p className="mt-4 text-base text-white">
          Empower Lives Through Learning
        </p>
        <div className="mt-[26px] flex items-center gap-5 opacity-50">
          <Link href="#">
            <Image
              src="/images/facebook_logo.png"
              alt="Facebook Logo"
              width={20}
              height={20}
            />
          </Link>
          <Link href="#">
            <Image
              src="/images/youtube_logo.png"
              alt="Youtube Logo"
              width={22}
              height={15.47}
            />
          </Link>
          <Link href="#">
            <Image
              src="/images/linkedin_logo.png"
              alt="Linkedin Logo"
              width={20}
              height={20}
            />
          </Link>
          <Link href="#">
            <Image
              src="/images/line_logo.png"
              alt="Line Logo"
              width={20}
              height={20}
            />
          </Link>
        </div>
        <div className="mt-[50px] text-white">
          <h3 className="dinProH4">Need more information?</h3>
          <p className="notoBody04 mt-2">
            Talk with our specialists to learn how we can help you achieve your
            goals.
          </p>
          <button className="notoBody01 mt-6 flex items-center bg-black px-6 py-2">
            <span>Become a partner</span>
            <ArrowRightIcon className="ml-3 h-5 w-auto" />{' '}
          </button>
        </div>
        <div className="mt-[48px] mb-[60px] text-white">
          <div className="grid grid-cols-2">
            <div>
              <h6 className="dinProH6">Menu</h6>
              <ol className="dinProOverLine">
                <li className="mt-2">
                  <Link href="/">Home</Link>
                </li>
                <li className="mt-2">
                  <Link href="/aboutus">About Us</Link>
                </li>
                <li className="mt-2">
                  <Link href="/impactstories">Impact Stories</Link>
                </li>
                <li className="mt-2">
                  <Link href="/news">News & Events</Link>
                </li>
                <li className="mt-2">
                  <Link href="/learningplatform">Learning Platform</Link>
                </li>
              </ol>
            </div>
            <div>
              <h6 className="dinProH6">Information</h6>
              <ol className="dinProOverLine">
                <li className="mt-2">
                  <Link href="/careers">Careers</Link>
                </li>
                <li className="mt-2">
                  <Link href="/resources">Resources</Link>
                </li>
                <li className="mt-2">
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li className="mt-2">
                  <Link href="/contact">Contact</Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <a href="#section1" className="block text-center text-white">
          <Image
            className="m-auto animate-bounce pb-3 opacity-50"
            src="/images/chevron_up_icon.png"
            alt="Chevron Up"
            width={14}
            height={8}
          />
          <span className="dinProButtonTextSUnselected">
            <b className="text-center">GO TO TOP</b>
          </span>
        </a>
      </div>
      <hr className="mt-3 opacity-50 lg:mt-14" />
      <div className="hidden items-center justify-between pt-5 lg:flex">
        <div className="notoBody02 text-white">
          <span>Copyright by SEAC</span>
          <span className="ml-5">
            {new Date().getFullYear()} all rights reserved
          </span>
        </div>
        <a href="#section1" className="text-white">
          <Image
            className="m-auto animate-bounce pb-3 opacity-50"
            src="/images/chevron_up_icon.png"
            alt="Chevron Up"
            width={14}
            height={8}
          />
          <span className="dinProButtonTextSUnselected">
            <b>GO TO TOP</b>
          </span>
        </a>
        <div className="dinProButtonL flex items-center gap-6 text-white">
          <Link href={'/term'}>
            <b>Term of use</b>
          </Link>
          <Link href={'/policy'}>
            <b>Privacy policy</b>
          </Link>
        </div>
      </div>
      <div className="mt-3 lg:hidden">
        <div className="dinProButtonL flex items-center justify-center gap-6 text-white">
          <Link href={'#'}>
            <b>Term of use</b>
          </Link>
          <Link href={'#'}>
            <b>Privacy policy</b>
          </Link>
        </div>
        <div className="notoBody02 my-3 flex items-center justify-center text-white">
          <span>Copyright by SEAC</span>
          <span className="ml-5">
            {new Date().getFullYear()} all rights reserved
          </span>
        </div>
      </div>
    </footer>
  )
}
