import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { SeacSolution } from '@/components/SeacSolution'
import { EmpowerLivesThroughLearning } from '@/components/EmpowerLivesThroughLearning'
import { OurPartners } from '@/components/OurPartners'
import styles from '@/styles/Error.module.css'

export default function Error() {
  return (
    <>
      <Head>
        <title>DeceptiConf - A community-driven design conference</title>
        <meta
          name="description"
          content="At DeceptiConf you’ll learn about the latest dark patterns being developed to trick even the smartest visitors, and you’ll learn how to deploy them without ever being detected."
        />
      </Head>

      <Header />
      <main className={styles.main}>
        <center>
          <h1 className={styles.h1}>404</h1>
          <h2 className={styles.h2}>ERROR</h2>
          <h4 className={styles.h4}>Page not found</h4>
        </center>
      </main>
      <Footer />
    </>
  )
}
