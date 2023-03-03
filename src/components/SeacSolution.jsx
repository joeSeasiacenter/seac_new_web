import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import andrewGreeneImage from '@/images/avatars/andrew-greene.jpg'
import cathleneBurrageImage from '@/images/avatars/cathlene-burrage.jpg'
import damarisKimuraImage from '@/images/avatars/damaris-kimura.jpg'
import dianneGuilianelliImage from '@/images/avatars/dianne-guilianelli.jpg'
import erhartCockrinImage from '@/images/avatars/erhart-cockrin.jpg'
import giordanoSagucioImage from '@/images/avatars/giordano-sagucio.jpg'
import gordonSandersonImage from '@/images/avatars/gordon-sanderson.jpg'
import heatherTerryImage from '@/images/avatars/heather-terry.jpg'
import ibrahimFraschImage from '@/images/avatars/ibrahim-frasch.jpg'
import jaquelinIschImage from '@/images/avatars/jaquelin-isch.jpg'
import kimberlyParsonsImage from '@/images/avatars/kimberly-parsons.jpg'
import parkerJohnsonImage from '@/images/avatars/parker-johnson.jpg'
import piersWilkinsImage from '@/images/avatars/piers-wilkins.jpg'
import richardAstley from '@/images/avatars/richard-astley.jpg'
import rinaldoBeynonImage from '@/images/avatars/rinaldo-beynon.jpg'
import ronniCantadoreImage from '@/images/avatars/ronni-cantadore.jpg'
import stevenMchailImage from '@/images/avatars/steven-mchail.jpg'
import waylonHydenImage from '@/images/avatars/waylon-hyden.jpg'
import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const days = [
  {
    name: 'Opening Day',
    date: 'April 4',
    dateTime: '2022-04-04',
    speakers: [
      {
        name: 'Steven McHail',
        role: 'Designer at Globex Corporation',
        image: stevenMchailImage,
      },
      {
        name: 'Jaquelin Isch',
        role: 'UX Design at InGen',
        image: jaquelinIschImage,
      },
      {
        name: 'Dianne Guilianelli',
        role: 'General Manager at Initech',
        image: dianneGuilianelliImage,
      },
      {
        name: 'Ronni Cantadore',
        role: 'Design Engineer at Weyland-Yutani',
        image: ronniCantadoreImage,
      },
      {
        name: 'Erhart Cockrin',
        role: 'Product Lead at Cyberdyne Systems',
        image: erhartCockrinImage,
      },
      {
        name: 'Parker Johnson',
        role: 'UI Designer at MomCorp',
        image: parkerJohnsonImage,
      },
    ],
  },
  {
    name: 'Speakers & Workshops',
    date: 'April 5',
    dateTime: '2022-04-05',
    speakers: [
      {
        name: 'Damaris Kimura',
        role: 'Senior Engineer at OCP',
        image: damarisKimuraImage,
      },
      {
        name: 'Ibrahim Frasch',
        role: 'Programmer at Umbrella Corp',
        image: ibrahimFraschImage,
      },
      {
        name: 'Cathlene Burrage',
        role: 'Frontend Developer at Buy n Large',
        image: cathleneBurrageImage,
      },
      {
        name: 'Rinaldo Beynon',
        role: 'Data Scientist at Rekall',
        image: rinaldoBeynonImage,
      },
      {
        name: 'Waylon Hyden',
        role: 'DevOps at RDA Corporation',
        image: waylonHydenImage,
      },
      {
        name: 'Giordano Sagucio',
        role: 'Game Developer at Soylent Corp',
        image: giordanoSagucioImage,
      },
    ],
  },
  {
    name: 'Interviews',
    date: 'April 6',
    dateTime: '2022-04-06',
    speakers: [
      {
        name: 'Andrew Greene',
        role: 'Frontend Developer at Ultratech',
        image: andrewGreeneImage,
      },
      {
        name: 'Heather Terry',
        role: 'Backend Developer at Xanatos Enterprises',
        image: heatherTerryImage,
      },
      {
        name: 'Piers Wilkins',
        role: 'Full stack Developer at BiffCo',
        image: piersWilkinsImage,
      },
      {
        name: 'Gordon Sanderson',
        role: 'Mobile Developer at Cobra Industries',
        image: gordonSandersonImage,
      },
      {
        name: 'Kimberly Parsons',
        role: 'Game Developer at Tyrell Corporation',
        image: kimberlyParsonsImage,
      },
      {
        name: 'Richard Astley',
        role: 'CEO at Roll Out',
        image: richardAstley,
      },
    ],
  },
]

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function SeacSolution() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="seac_solution"
      aria-labelledby="seac_solution_title"
      className="grid gap-4 py-20 px-4 text-white sm:grid-cols-1 sm:py-32 lg:grid-cols-2 lg:px-20 bg-fixed"
      style={{
        backgroundImage: `url(/images/seac_office.png)`,
        backgroundSize: 'cover',
        backgroundColor: 'rgba(0,0,0,0.5)',
        backgroundBlendMode: 'darken',
      }}
    >
      <div className="padding">
        <h1 className="dinProH1">SEAC SOLUTION</h1>
        <p className="mt-4">
          SEAC Solution is an innovation that fosters effective learning through
          well-designed learning experiences, various methods of learning, and
          practical tools for real-life application.
        </p>
        <div className='relative text-center'>
          <Image
            src="/images/online_meeting_with_seac.png"
            alt="Online meeting with SEAC"
            style={{ marginTop: '35px' }}
            width={640}
            height={360}
          />
          <div className="absolute" style={{top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
          <Image src="/images/play.png" alt="Play video about SEAC" width={84} height={84} />
          </div>
        </div>
      </div>
      <div className="lg:w-4/5">
        <div
          className="lg:m-3 mb-6 grid grid-cols-5 px-6 py-4"
          style={{
            background:
              'linear-gradient(133.01deg, rgba(255, 255, 252, 0.4) 12.6%, rgba(255, 255, 252, 0) 101.05%)',
          }}
        >
          <div>
            <Image
              src="/images/4_line_learning.png"
              alt="4 line learning"
              width={67}
              height={36}
            />
          </div>
          <div className="col-span-4">
            <h6 className="dinProH6">4 Line Learning</h6>
            <p className="notoSans mt-1 mb-2">
              An innovative process to weave 4 essential ways of learning to
              deliver maximum effectiveness for learners.
            </p>
            <button
              className="flex items-center"
              style={{
                backgroundColor: '#A80030',
                padding: '8px',
                marginTop: '8px',
              }}
            >
              Download brochure
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
        <div
          className="lg:m-3 mb-6 grid grid-cols-5 px-6 py-4"
          style={{
            background:
              'linear-gradient(133.01deg, rgba(255, 255, 252, 0.4) 12.6%, rgba(255, 255, 252, 0) 101.05%)',
          }}
        >
          <div>
            <Image
              src="/images/5_phase_development.png"
              alt="5 phase development"
              width={67}
              height={36}
            />
          </div>
          <div className="col-span-4">
            <h6 className="dinProH6">5 Phase Development</h6>
            <p className="notoSans mt-1 mb-2">
              The journey learners go through to effectively acquire, retain,
              and apply new skillsets, mindsets, and toolsets.
            </p>
            <button
              className="flex items-center"
              style={{
                backgroundColor: '#A80030',
                padding: '8px',
                marginTop: '8px',
              }}
            >
              Download brochure
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
        <div
          className="lg:m-3 mb-6 grid grid-cols-5 px-6 py-4"
          style={{
            background:
              'linear-gradient(133.01deg, rgba(255, 255, 252, 0.4) 12.6%, rgba(255, 255, 252, 0) 101.05%)',
          }}
        >
          <div>
            <Image
              src="/images/4_line_learning.png"
              alt="4 line learning"
              width={67}
              height={36}
            />
          </div>
          <div className="col-span-4">
            <h6 className="dinProH6">4 Line Learning</h6>
            <p className="notoSans mt-1 mb-2">
              An innovative process to weave 4 essential ways of learning to
              deliver maximum effectiveness for learners.
            </p>
            <button
              className="flex items-center"
              style={{
                backgroundColor: '#A80030',
                padding: '8px',
                marginTop: '8px',
              }}
            >
              Download brochure
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
