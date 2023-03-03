import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'
import backgroundImage2 from '../../public/images/smart_learning_by_seac.png'
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline'

export function Hero() {
  return (
    <div className="relative text-center pt-20 pb-20 sm:py-24 main-background bg-fixed">
      <Container className="relative">
        <div className="mx-auto max-w-2xl mt-10 lg:max-w-4xl lg:px-12">
          <Image
            src="/images/learning_with_seac.png"
            className='w3-animate-bottom delay-100 duration-300'
            alt="Smart learning by SEAC"
            width={760}
            height={288}
          />
          <h1 className="font-display text-5xl font-bold tracking-tighter text-white sm:text-7xl mt-6 w3-animate-bottom delay-200 duration-300">
            Empower Lives Through Learning
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-white w3-animate-bottom delay-200 duration-300">
            <p>
              SEAC strives to promote lifelong learning through experiences
              designed to nurture learning and real-life application. With our
              world-class content and the crème de la crème of trainers, we can
              help you achieve any goals in life with the right life skills.
            </p>
          </div>
          <p className='mt-14 md:mt-36 text-white w3-animate-top delay-300 duration-300'>Scroll to explore</p>
          <button href="#" className="mt-4 animate-bounce w3-animate-top delay-300 duration-300">
            <Image src="/images/arrow_down.png" alt='Arrow down' width={42} height={42} />
          </button>
        </div>
      </Container>
    </div>
  )
}
