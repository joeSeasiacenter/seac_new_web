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
import { useEffect, useState } from 'react'

export default function Policy() {
  const [selectedHeader1, setSelectedHeader1] = useState(true)
  const [selectedHeader2, setSelectedHeader2] = useState(false)
  const [selectedHeader3, setSelectedHeader3] = useState(false)
  const [selectedHeader4, setSelectedHeader4] = useState(false)
  const [selectedHeader5, setSelectedHeader5] = useState(false)
  const [selectedHeader6, setSelectedHeader6] = useState(false)
  const [selectedHeader7, setSelectedHeader7] = useState(false)
  const [selectedHeader8, setSelectedHeader8] = useState(false)
  const [selectedHeader9, setSelectedHeader9] = useState(false)
  const [selectedHeader10, setSelectedHeader10] = useState(false)
  const [selectedHeader11, setSelectedHeader11] = useState(false)
  const [selectedHeader12, setSelectedHeader12] = useState(false)
  const [selectedHeader13, setSelectedHeader13] = useState(false)
  const [selectedHeader14, setSelectedHeader14] = useState(false)

  const selectingHeader = (selectedHeader) => {
    if (selectedHeader === 'selectedHeader1') {
      setSelectedHeader1(true)
    } else {
      setSelectedHeader1(false)
    }
  }

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
            <h2 className="dinProH2">Privacy policy</h2>
          </div>
        </section>
        <section id="section2" className={styles.section2}>
          <div className="grid grid-cols-3 gap-4 p-[24px] lg:p-[60px]">
            <div className="hidden bg-stone-50 self-start py-[16px] px-[8px] lg:grid">
              <ol>
                <a href="#header1">
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      backgroundColor: selectedHeader1 ? '#A80030' : 'none',
                      color: selectedHeader1 ? 'white' : 'black',
                    }}
                  >
                    SEASIA Leadavation Center Company Limited
                  </li>
                </a>
                <a href="#header2">
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      backgroundColor: selectedHeader2 ? '#A80030' : 'none',
                      color: selectedHeader2 ? 'white' : 'black',
                    }}
                  >
                    Definition of Personal Data
                  </li>
                </a>
                <a href="#header3">
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      backgroundColor: selectedHeader3 ? '#A80030' : 'none',
                      color: selectedHeader3 ? 'white' : 'black',
                    }}
                  >
                    Personal data that we collect from you
                  </li>
                </a>
                <a href="#header4">
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      backgroundColor: selectedHeader4 ? '#A80030' : 'none',
                      color: selectedHeader4 ? 'white' : 'black',
                    }}
                  >
                    <a>Sources of Personal Data</a>
                  </li>
                </a>
                <a href="#header5">
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      backgroundColor: selectedHeader5 ? '#A80030' : 'none',
                      color: selectedHeader5 ? 'white' : 'black',
                    }}
                  >
                    Purpose of collection, use and disclose of personal data
                  </li>
                </a>
                <a href="#header6">
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      backgroundColor: selectedHeader6 ? '#A80030' : 'none',
                      color: selectedHeader6 ? 'white' : 'black',
                    }}
                  >
                    Disclosing or sharing your personal data
                  </li>
                </a>
                <a href="#header7">
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      backgroundColor: selectedHeader7 ? '#A80030' : 'none',
                      color: selectedHeader7 ? 'white' : 'black',
                    }}
                  >
                    SRetention policy and retention period of personal data
                  </li>
                </a>
                <a href="#header8">
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      backgroundColor: selectedHeader8 ? '#A80030' : 'none',
                      color: selectedHeader8 ? 'white' : 'black',
                    }}
                  >
                    Right of Data Subject
                  </li>
                </a>
                <a href="#header9">
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      backgroundColor: selectedHeader9 ? '#A80030' : 'none',
                      color: selectedHeader9 ? 'white' : 'black',
                    }}
                  >
                    Marketing activities and promotion
                  </li>
                </a>
                <a href="#header10">
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      backgroundColor: selectedHeader10 ? '#A80030' : 'none',
                      color: selectedHeader10 ? 'white' : 'black',
                    }}
                  >
                    Cookies policy
                  </li>
                </a>
                <a href="#header11">
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      backgroundColor: selectedHeader11 ? '#A80030' : 'none',
                      color: selectedHeader11 ? 'white' : 'black',
                    }}
                  >
                    Privacy policy for candidates
                  </li>
                </a>
                <a href="#header12">
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      backgroundColor: selectedHeader12 ? '#A80030' : 'none',
                      color: selectedHeader12 ? 'white' : 'black',
                    }}
                  >
                    Privacy policy for other websites
                  </li>
                </a>
                <a href="#header13">
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      backgroundColor: selectedHeader13 ? '#A80030' : 'none',
                      color: selectedHeader13 ? 'white' : 'black',
                    }}
                  >
                    Change of privacy policyt
                  </li>
                </a>
                <a href="#header14">
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      backgroundColor: selectedHeader13 ? '#A80030' : 'none',
                      color: selectedHeader13 ? 'white' : 'black',
                    }}
                  >
                    Contact
                  </li>
                </a>
              </ol>
            </div>
            <div className="col-span-2">
              <h3 className="dinProH3">
                SEASIA Leadavation Center Company Limited
              </h3>
              <p className="notoBody02">
                We, SEASIA Leadavation Center Company Limited, strictly abide by
                our customers’privacy. When we use your personal data to run our
                business and provide service to you, your personal data is
                protected under the Personal Data Protection Act B.E. 2562.
              </p>
              <p className="notoBody02 mt-[16px]">
                As the data controller, we are obliged by the law to inform you
                of our privacy policy which explains the way we collect, use or
                disclosure your personal data as well as your rights to your
                personal data as the data subject. We reaffirm that we comply
                with the law to protect your personal data.
              </p>
              <h3 className="dinProH3 mt-[32px]">
                Definition of Personal Data
              </h3>
              <p className="notoBody02 mt-[16px]">
                Definition of Personal Data
              </p>
              <h5 className="dinProH6 mt-[16px]">
                Definition of Personal Data
              </h5>
              <p className="notoBody02 mt-[16px]">
                Personal Data means any information related to a person, which
                enables the identification of such person, whether directly or
                indirectly. For example, name address e-mail address
                Identification Number.
              </p>
              <h5 className="dinProH6 mt-[16px]">Sensitive Personal Data</h5>
              <p className="notoBody02 mt-[16px]">
                Sensitive Data is special category of personal data that needs
                appropriate protection and carefully collect, use or disclose.
                Sensitive Data pertains racial, ethnic origin, political
                opinions, cult, religious or philosophical beliefs, sexual
                behavior, criminal records, health data, disability, trade union
                information, genetic data and biometric data.
              </p>
              <h3 className="dinProH3 mt-[32px]">
                Personal data that we collect from you
              </h3>
              <p className="notoBody02 mt-[16px]">
                Personal data that we collect from you
              </p>
              <ul className="notoBody02 mt-[16px]">
                <li> - You use our website ;</li>
                <li>
                  {' '}
                  - You provide information to us through our website or
                  applications ;
                </li>
                <li>
                  {' '}
                  - You provide information to us when you make enquiry via
                  online or offline channel.
                </li>
              </ul>
              <p className="notoBody02 mt-[16px]">
                We only collect your personal data as necessary to provide the
                service to you and to correspond to your queries as well as to
                carry on our business in a way that you would normally
                anticipate.
              </p>
              <p className="notoBody02 mt-[16px]">
                We may collect, use, store and transfer different types of
                personal data about you which we have grouped as follows :
              </p>
              <div className="mt-[16px] bg-stone-50 p-[24px]">
                <h5 className="dinProH5">Contact Data</h5>
                <p className="notoBody02 mt-[8px]">
                  Includes name-surname, address, email, telephone number,
                  occupation, position, business types, interested Courses,
                  product, service, budget range.
                </p>
              </div>
              <div className="mt-[16px] bg-stone-50 p-[24px]">
                <h5 className="dinProH5">Technical Data</h5>
                <p className="notoBody02 mt-[8px]">
                  Includes internet protocol (IP) address, browser type and
                  version, time zone setting and location, operation system and
                  platform and other technology on the devices you use to access
                  this website.
                </p>
              </div>
              <div className="mt-[16px] bg-stone-50 p-[24px]">
                <h5 className="dinProH5">Usage Data</h5>
                <p className="notoBody02 mt-[8px]">
                  Includes information about your use of our service through and
                  from our website, websites that you view, elements you viewed
                  or words you searched for in platforms, date and time of
                  visit, and interaction information such as clicks on item in a
                  website.
                </p>
              </div>
              <div className="mt-[16px] bg-stone-50 p-[24px]">
                <h5 className="dinProH5">Communication Data</h5>
                <p className="notoBody02 mt-[8px]">
                  Includes email, notes of conversation, communication notes.
                </p>
              </div>
              <div className="mt-[16px] bg-stone-50 p-[24px]">
                <h5 className="dinProH5">Contract-related Data</h5>
                <p className="notoBody02 mt-[8px]">
                  National identification number, Tax identification number,
                  address, credit card number, date of birth, sex.
                </p>
              </div>
              <h3 className="dinProH3 mt-[32px]">Sources of Personal Data</h3>
              <p className="notoBody02 mt-[16px]">
                We receive your personal data directly from you through the
                following channels:
              </p>
              <ul className="notoBody02 mt-[16px]">
                <li>
                  {' '}
                  - You register with us by creating an account on our website
                  or application.
                </li>
                <li>
                  {' '}
                  - You make a query with us relating to your interested
                  property/ project.
                </li>
                <li>
                  {' '}
                  - You make an appointment with us to visit the project site.
                </li>
                <li>
                  {' '}
                  - You provide information to us when you visit the project
                  site.
                </li>
                <li>
                  {' '}
                  - You participate in our marketing activity through an
                  electronic platform, social media, or an offline platform.
                </li>
              </ul>
              <p className="notoBody02 mt-[16px]">
                We receive your personal data from a third party that collects,
                uses or discloses your personal data as instructed by us or on
                our behalf. Your personal data will not be used other than the
                purposes for which we instruct or require such third party to
                do. We require such third party to protect confidentiality of
                your personal data and to have measures to protect your personal
                data as required by the Thai personal data protection law.
              </p>
              <p className="notoBody02 mt-[16px]">
                We receive your personal data from cookies when you visit our
                website. This data helps us provide you better, faster, safer
                services and for your own privacy when you use the service and /
                or enter the platform.
              </p>
              <h3 className="dinProH3 mt-[32px]">
                Purpose of collection, use and disclose of personal data
              </h3>
              <p className="notoBody02 mt-[16px]">
                We may use your personal data to the extent permitted by the
                personal data protection law. We only collect your personal data
                as necessary and to the extent that is related to provision of
                our service to you, where it is necessary:
              </p>
              <ul className="notoBody02 mt-[16px]">
                <li>
                  {' '}
                  - For our legitimate interests or any other person and your
                  interests, which do not override your fundamental rights;
                </li>
                <li>
                  {' '}
                  - For the performance of a contract to which you are a party,
                  or in order to take steps at your request to enter into a
                  contract;
                </li>
                <li>
                  {' '}
                  - For compliance with a law to which we are subjected or for
                  preventing or suppressing a danger to a person’s life, body or
                  health.
                </li>
              </ul>
              <p className="notoBody02 mt-[16px]">
                We explain in the table below about how we use your personal
                data, and which lawful basis we rely on to do so.
              </p>
              <p className="notoBody02 mt-[16px]">
                We receive your personal data from cookies when you visit our
                website. This data helps us provide you better, faster, safer
                services and for your own privacy when you use the service and /
                or enter the platform.
              </p>
              <h3 className="dinProH3 mt-[32px]">
                Purpose of collection, use and disclose of personal data
              </h3>
              <p className="notoBody02 mt-[16px]">
                We may use your personal data to the extent permitted by the
                personal data protection law. We only collect your personal data
                as necessary and to the extent that is related to provision of
                our service to you, where it is necessary:
              </p>
              <ul className="notoBody02 mt-[16px]">
                <li>
                  {' '}
                  - For our legitimate interests or any other person and your
                  interests, which do not override your fundamental rights;
                </li>
                <li>
                  {' '}
                  - For the performance of a contract to which you are a party,
                  or in order to take steps at your request to enter into a
                  contract;
                </li>
                <li>
                  {' '}
                  - For compliance with a law to which we are subjected or for
                  preventing or suppressing a danger to a person’s life, body or
                  health.
                </li>
              </ul>
              <p className="notoBody02 mt-[16px]">
                We explain in the table below about how we use your personal
                data, and which lawful basis we rely on to do so.
              </p>
              <p className="notoBody02 mt-[16px]">
                We receive your personal data from cookies when you visit our
                website. This data helps us provide you better, faster, safer
                services and for your own privacy when you use the service and /
                or enter the platform.
              </p>
              <h3 className="dinProH3 mt-[32px]">
                Disclosing or sharing your personal data
              </h3>
              <p className="notoBody02 mt-[16px]">
                We may have to disclose or share your personal data with For
                compliance with a law to which we are subjected or for
                preventing or suppressing a danger to a person’s life, body or
                health.
              </p>
              <p className="notoBody02 mt-[16px]">
                We explain in the table below about how we use your personal
                data, and which lawful basis we rely on to do so.selected third
                parties as follows:
              </p>
              <ul className="notoBody02 mt-[16px]">
                <li> - Our affiliated companies;</li>
                <li> - Online advertising platforms;</li>
                <li> - Marketing companies or consultants;</li>
                <li>
                  {' '}
                  - Regulator such as the Office of the Personal Data Protection
                  Committee;
                </li>
                <li> - Professional advisors and consultants</li>
              </ul>
              <p className="notoBody02 mt-[16px]">
                We require that the third parties above protect confidentiality
                and protect your personal data in accordance with requirements
                under the Thai personal data protection law. They may use your
                personal data only for purposes as instructed by us. Your
                personal data will not be used other than the purposes for which
                we instruct or require them to do so.
              </p>
              <p className="notoBody02 mt-[16px]">
                Upon request, we may disclose your personal data to a relevant
                authority for compliance with a law such as prevention of a
                danger to a person, legal compliance, setting for an indictment,
                exercising legal rights, and preventing fraud.
              </p>
              <h3 className="dinProH3 mt-[32px]">
                Retention policy and retention period of personal data
              </h3>
              <p className="notoBody02 mt-[16px]">
                We collect your personal data in our information system and
                provide standard security to keep our information systems and
                the use of your personal data secure with following measures:
              </p>
              <ul className="notoBody02 mt-[16px]">
                <li>
                  {' '}
                  - Restrict access to personal data which may be accessed by
                  employees, agents, contractors and other third parties. They
                  can only access your personal data on our instructions, and
                  they are subject to a duty of confidentiality and protection
                  of personal data.
                </li>
                <li>
                  {' '}
                  - Provide technological methods to prevent unauthorized access
                  to computer systems.
                </li>
                <li>
                  {' '}
                  - Destroy your personal data for security purposes when such
                  information is no longer needed for legal and business
                  purposes.
                </li>
                <li>
                  {' '}
                  - Put in place procedures to deal with any suspected personal
                  data breach and will notify a regulator of a breach where we
                  are legally required to do so.
                </li>
                <li>
                  {' '}
                  - We will keep your personal data for as long as necessary to
                  fulfil the purposes we collected it for, including to satisfy
                  any legal, accounting, or reporting requirements.
                </li>
                <li>
                  {' '}
                  - To determine the appropriate retention period for personal
                  data, we consider the amount, nature, purpose and sensitivity
                  of the personal data, the potential risk of harm from
                  unauthorised use of your personal data, and the applicable
                  legal requirements.
                </li>
                <li>
                  {' '}
                  - We collect your personal data obtained from cookies when you
                  use our website. We will keep your personal data for no more
                  than 13 months or as required by relevant laws.
                </li>
              </ul>
              <h3 className="dinProH3 mt-[32px]">Right of Data Subject</h3>
              <p className="notoBody02 mt-[16px]">
                Data subjects have the right to proceed to the extent permitted
                by law as follow;
              </p>
              <ol>
                <li>
                  The data subject shall have the right to withdraw his or her
                  consent at any time. When processing personal data, you give
                  us consent throughout the duration of your personal data with
                  us (The Right to withdraw).
                </li>
                <li>
                  The data subject shall have the right to obtain from the
                  controller confirmation as to whether or not personal data
                  concerning him or her are being processed, request for a copy
                  of his or her personal data, including request to disclose
                  personal data acquisition that you did not give us consent to
                  (The Right to Access).
                </li>
                <li>
                  The data subject shall have the right to obtain from the
                  controller without undue delay the rectification of inaccurate
                  personal data concerning him or her (The Right to
                  Rectification).
                </li>
                <li>
                  The data subject shall have the right to obtain from the
                  controller the erasure of personal data concerning him or her
                  without undue delay (The Right to Erasure).
                </li>
                <li>
                  The data subject shall have the right to obtain from the
                  controller restriction of data processing (The Right to
                  Restriction of Processing).
                </li>
                <li>
                  The data subject shall have the right to transmit their
                  personal data to another controller without hindrance from the
                  controller to which the personal data have been provided (The
                  Right to Data Portability).
                </li>
                <li>
                  The data subject shall have the right to object, on grounds
                  relating to his or her particular situation, at any time to
                  processing of personal data concerning him or her. (Right to
                  Object)
                </li>
              </ol>
              <p className="notoBody02 mt-[16px]">
                You can contact the DPO or company’s staff in order to proceed
                with the request to exercise the above rights.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
