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
import styles from '../../src/styles/Term.module.css'

export default function Term() {
  return (
    <>
      <Head>
        <title>SEAC - seasiacenter.com</title>
        <meta
          name="description"
          content="SEAC (ซีแอค) ผู้นำด้านการพัฒนาผู้บริหาร บุคลากร และองค์กร FYI Center, Building 2, 2nd-4th Floor, 2525 Rama 4 Road, กรุงเทพมหานคร."
        />
      </Head>

      <Header />
      <main>
        <section id="section1" className={styles.section1}>
          <div className="px-[39px] pt-[269px] pb-[169px] lg:px-[172px] lg:pb-[165px] lg:pt-[251px]">
            <h2 className="dinProH2">Terms of use</h2>
          </div>
        </section>
        <section id="section2" className={styles.section2}>
          <div className="p-[24px] md:px-[173px] md:py-[80px]">
            <h5 className="dinProH5">
              {"The data we collect, how it's used, and who we share it with"}
            </h5>
            <p className="notoBody02">
              We care about your privacy and want to help you understand how we
              collect, use, and share your personal information.
            </p>
            <h5 className="dinProH5 mt-[16px]">
              SEASIA Leadavation Center Company Limited
            </h5>
            <p className="notoBody02">
              We, SEASIA Leadavation Center Company Limited, strictly abide by
              our customers’privacy. When we use your personal data to run our
              business and provide service to you, your personal data is
              protected under the Personal Data Protection Act B.E. 2562.As the
              data controller, we are obliged by the law to inform you of our
              privacy policy which explains the way we collect, use or
              disclosure your personal data as well as your rights to your
              personal data as the data subject. We reaffirm that we comply with
              the law to protect your personal data.
            </p>
            <h5 className="dinProH5 mt-[16px]">Definition of Personal Data</h5>
            <p className="notoBody02">
              Personal Data can be divided in 2 categoriesPersonal Data
              (General)
            </p>
            <p className="notoBody02">
              Personal Data means any information related to a person, which
              enables the identification of such person, whether directly or
              indirectly. For example, name address e-mail address
              Identification Number.Sensitive Personal Data
            </p>
            <p className="notoBody02">
              Sensitive Data is special category of personal data that needs
              appropriate protection and carefully collect, use or disclose. 
              Sensitive Data pertains racial, ethnic origin, political opinions,
              cult, religious or philosophical beliefs, sexual behavior,
              criminal records, health data, disability, trade union
              information, genetic data and biometric data.
            </p>
            <h5 className="dinProH5 mt-[16px]">
              Personal data that we collect from you
            </h5>
            <p className="notoBody02">We collect your information when:</p>
            <ul className="notoBody02">
              <li>You use our website ;</li>
              <li>
                You provide information to us through our website or
                applications ;
              </li>
              <li>
                You provide information to us when you make enquiry via online
                or offline channel.
              </li>
            </ul>
            <p className="notoBody02">
              We only collect your personal data as necessary to provide the
              service to you and to correspond to your queries as well as to
              carry on our business in a way that you would normally
              anticipate.We may collect, use, store and transfer different types
              of personal data about you which we have grouped as follows :
            </p>
            <h5 className="dinProH5 mt-[16px]">Contact Data</h5>
            <p className="notoBody02">
              SIncludes name-surname, address, email, telephone number,
              occupation, position, business types, interested Courses, product,
              service, budget range.
            </p>
            <h5 className="dinProH5 mt-[16px]">Technical Data</h5>
            <p className="notoBody02">
              Includes internet protocol (IP) address, browser type and version,
              time zone setting and location, operation system and platform and
              other technology on the devices you use to access this website.
            </p>
            <h5 className="dinProH5 mt-[16px]">Usage Data</h5>
            <p className="notoBody02">
              Includes information about your use of our service through and
              from our website, websites that you view, elements you viewed or
              words you searched for in platforms, date and time of visit, and
              interaction information such as clicks on item in a website.
            </p>
            <h5 className="dinProH5 mt-[16px]">Communication Data</h5>
            <p className="notoBody02">
              Includes email, notes of conversation, communication notes.
            </p>
            <h5 className="dinProH5 mt-[16px]">Contract-related Data</h5>
            <p className="notoBody02">
              National identification number, Tax identification number,
              address, credit card number, date of birth, sex.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
