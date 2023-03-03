import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'
import backgroundImage2 from '../../public/images/smart_learning_by_seac.png'
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline'

export function OurPartners() {
  return (
    <div className="relative bg-white pt-20 pb-20 text-center sm:py-24">
      <Container className="relative">
        <div className="mx-auto">
          <h6 className="dinProH5">Our Co-Creation Partners</h6>

          <div id="default-carousel" class="relative" data-carousel="static">
            {/* <!-- Carousel wrapper --> */}
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
              {/* <!-- Item 1 --> */}
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-white dark:text-gray-800 sm:text-3xl">
                  First Slide
                </span>
                <Image
                  src="/images/smart_learning_by_seac.png"
                  class="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                  width={1000}
                  height={500}
                  alt="..."
                />
              </div>
              {/* <!-- Item 2 --> */}
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="/images/smart_learning_by_seac.png"
                  class="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                  alt="..."
                />
              </div>
              {/* <!-- Item 3 --> */}
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="/images/smart_learning_by_seac.png"
                  class="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                  alt="..."
                />
              </div>
            </div>
            {/* <!-- Slider indicators --> */}
            <div class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
              <button
                type="button"
                class="h-3 w-3 rounded-full"
                aria-current="false"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                class="h-3 w-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                class="h-3 w-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
            </div>
            {/* <!-- Slider controls --> */}
            <button
              type="button"
              class="group absolute top-0 left-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
              data-carousel-prev
            >
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
                <svg
                  aria-hidden="true"
                  class="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              class="group absolute top-0 right-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
              data-carousel-next
            >
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
                <svg
                  aria-hidden="true"
                  class="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}
