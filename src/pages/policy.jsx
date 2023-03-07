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

  useEffect(() => {
    window.onscroll = function () {
      myFunction()
    }

    var header = document.getElementById('myMenubar')
    var content = document.getElementById('content')
    var sticky = header.offsetTop

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky')
        content.classList.remove('col-span-2')
        content.classList.add('col-span-3')
        content.classList.add('content')
      } else {
        header.classList.remove('sticky')
        content.classList.remove('col-span-3')
        content.classList.remove('content')
        content.classList.add('col-span-2')
      }
    }
  }, [])

  const selectingHeader = (selectedHeader) => {
    if (selectedHeader === 'selectedHeader1') {
      setSelectedHeader1(true)
    } else {
      setSelectedHeader1(false)
    }
    if (selectedHeader === 'selectedHeader2') {
      setSelectedHeader2(true)
    } else {
      setSelectedHeader2(false)
    }
    if (selectedHeader === 'selectedHeader3') {
      setSelectedHeader3(true)
    } else {
      setSelectedHeader3(false)
    }
    if (selectedHeader === 'selectedHeader4') {
      setSelectedHeader4(true)
    } else {
      setSelectedHeader4(false)
    }
    if (selectedHeader === 'selectedHeader5') {
      setSelectedHeader5(true)
    } else {
      setSelectedHeader5(false)
    }
    if (selectedHeader === 'selectedHeader6') {
      setSelectedHeader6(true)
    } else {
      setSelectedHeader6(false)
    }
    if (selectedHeader === 'selectedHeader7') {
      setSelectedHeader7(true)
    } else {
      setSelectedHeader7(false)
    }
    if (selectedHeader === 'selectedHeader8') {
      setSelectedHeader8(true)
    } else {
      setSelectedHeader8(false)
    }
    if (selectedHeader === 'selectedHeader9') {
      setSelectedHeader9(true)
    } else {
      setSelectedHeader9(false)
    }
    if (selectedHeader === 'selectedHeader10') {
      setSelectedHeader10(true)
    } else {
      setSelectedHeader10(false)
    }
    if (selectedHeader === 'selectedHeader11') {
      setSelectedHeader11(true)
    } else {
      setSelectedHeader11(false)
    }
    if (selectedHeader === 'selectedHeader12') {
      setSelectedHeader12(true)
    } else {
      setSelectedHeader12(false)
    }
    if (selectedHeader === 'selectedHeader13') {
      setSelectedHeader13(true)
    } else {
      setSelectedHeader13(false)
    }
    if (selectedHeader === 'selectedHeader14') {
      setSelectedHeader14(true)
    } else {
      setSelectedHeader14(false)
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
          <div className="hidden grid-cols-3 gap-20 p-[24px] lg:grid lg:p-[60px]">
            <div
              id="myMenubar"
              className="hidden self-start bg-stone-50 py-[16px] px-[8px] lg:grid"
            >
              <ol>
                <a
                  href="#header1"
                  onClick={() => {
                    selectingHeader('selectedHeader1')
                  }}
                >
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      background: selectedHeader1 ? '#A80030' : 'none',
                      color: selectedHeader1 ? 'white' : 'black',
                    }}
                  >
                    SEASIA Leadavation Center Company Limited
                  </li>
                </a>
                <a
                  href="#header2"
                  onClick={() => {
                    selectingHeader('selectedHeader2')
                  }}
                >
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      background: selectedHeader2 ? '#A80030' : 'none',
                      color: selectedHeader2 ? 'white' : 'black',
                    }}
                  >
                    Definition of Personal Data
                  </li>
                </a>
                <a
                  href="#header3"
                  onClick={() => {
                    selectingHeader('selectedHeader3')
                  }}
                >
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      background: selectedHeader3 ? '#A80030' : 'none',
                      color: selectedHeader3 ? 'white' : 'black',
                    }}
                  >
                    Personal data that we collect from you
                  </li>
                </a>
                <a
                  href="#header4"
                  onClick={() => {
                    selectingHeader('selectedHeader4')
                  }}
                >
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      background: selectedHeader4 ? '#A80030' : 'none',
                      color: selectedHeader4 ? 'white' : 'black',
                    }}
                  >
                    <a>Sources of Personal Data</a>
                  </li>
                </a>
                <a
                  href="#header5"
                  onClick={() => {
                    selectingHeader('selectedHeader5')
                  }}
                >
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      background: selectedHeader5 ? '#A80030' : 'none',
                      color: selectedHeader5 ? 'white' : 'black',
                    }}
                  >
                    Purpose of collection, use and disclose of personal data
                  </li>
                </a>
                <a
                  href="#header6"
                  onClick={() => {
                    selectingHeader('selectedHeader6')
                  }}
                >
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      background: selectedHeader6 ? '#A80030' : 'none',
                      color: selectedHeader6 ? 'white' : 'black',
                    }}
                  >
                    Disclosing or sharing your personal data
                  </li>
                </a>
                <a
                  href="#header7"
                  onClick={() => {
                    selectingHeader('selectedHeader7')
                  }}
                >
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      background: selectedHeader7 ? '#A80030' : 'none',
                      color: selectedHeader7 ? 'white' : 'black',
                    }}
                  >
                    SRetention policy and retention period of personal data
                  </li>
                </a>
                <a
                  href="#header8"
                  onClick={() => {
                    selectingHeader('selectedHeader8')
                  }}
                >
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      background: selectedHeader8 ? '#A80030' : 'none',
                      color: selectedHeader8 ? 'white' : 'black',
                    }}
                  >
                    Right of Data Subject
                  </li>
                </a>
                <a
                  href="#header9"
                  onClick={() => {
                    selectingHeader('selectedHeader9')
                  }}
                >
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      background: selectedHeader9 ? '#A80030' : 'none',
                      color: selectedHeader9 ? 'white' : 'black',
                    }}
                  >
                    Marketing activities and promotion
                  </li>
                </a>
                <a
                  href="#header10"
                  onClick={() => {
                    selectingHeader('selectedHeader10')
                  }}
                >
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      background: selectedHeader10 ? '#A80030' : 'none',
                      color: selectedHeader10 ? 'white' : 'black',
                    }}
                  >
                    Cookies policy
                  </li>
                </a>
                <a
                  href="#header11"
                  onClick={() => {
                    selectingHeader('selectedHeader11')
                  }}
                >
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      background: selectedHeader11 ? '#A80030' : 'none',
                      color: selectedHeader11 ? 'white' : 'black',
                    }}
                  >
                    Privacy policy for candidates
                  </li>
                </a>
                <a
                  href="#header12"
                  onClick={() => {
                    selectingHeader('selectedHeader12')
                  }}
                >
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      background: selectedHeader12 ? '#A80030' : 'none',
                      color: selectedHeader12 ? 'white' : 'black',
                    }}
                  >
                    Privacy policy for other websites
                  </li>
                </a>
                <a
                  href="#header13"
                  onClick={() => {
                    selectingHeader('selectedHeader13')
                  }}
                >
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      background: selectedHeader13 ? '#A80030' : 'none',
                      color: selectedHeader13 ? 'white' : 'black',
                    }}
                  >
                    Change of privacy policyt
                  </li>
                </a>
                <a
                  href="#header14"
                  onClick={() => {
                    selectingHeader('selectedHeader14')
                  }}
                >
                  <li
                    className="dinProButtonTextSUnselected py-[12px] px-[24px]"
                    style={{
                      background: selectedHeader14 ? '#A80030' : 'none',
                      color: selectedHeader14 ? 'white' : 'black',
                    }}
                  >
                    Contact
                  </li>
                </a>
              </ol>
            </div>
            <div className="col-span-2" id="content">
              <div>
                <h3 className="dinProH3" id="header1">
                  SEASIA Leadavation Center Company Limited
                </h3>
                <p className="notoBody02 mt-[16px]">
                  We, SEASIA Leadavation Center Company Limited, strictly abide
                  by our customers’privacy. When we use your personal data to
                  run our business and provide service to you, your personal
                  data is protected under the Personal Data Protection Act B.E.
                  2562.
                </p>
                <p className="notoBody02 mt-[16px]">
                  As the data controller, we are obliged by the law to inform
                  you of our privacy policy which explains the way we collect,
                  use or disclosure your personal data as well as your rights to
                  your personal data as the data subject. We reaffirm that we
                  comply with the law to protect your personal data.
                </p>
                <h3 className="dinProH3 mt-[32px]" id="header2">
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
                  behavior, criminal records, health data, disability, trade
                  union information, genetic data and biometric data.
                </p>
                <h3 className="dinProH3 mt-[32px]" id="header3">
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
                    version, time zone setting and location, operation system
                    and platform and other technology on the devices you use to
                    access this website.
                  </p>
                </div>
                <div className="mt-[16px] bg-stone-50 p-[24px]">
                  <h5 className="dinProH5">Usage Data</h5>
                  <p className="notoBody02 mt-[8px]">
                    Includes information about your use of our service through
                    and from our website, websites that you view, elements you
                    viewed or words you searched for in platforms, date and time
                    of visit, and interaction information such as clicks on item
                    in a website.
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
                <h3 className="dinProH3 mt-[32px]" id="header4">
                  Sources of Personal Data
                </h3>
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
                  We receive your personal data from a third party that
                  collects, uses or discloses your personal data as instructed
                  by us or on our behalf. Your personal data will not be used
                  other than the purposes for which we instruct or require such
                  third party to do. We require such third party to protect
                  confidentiality of your personal data and to have measures to
                  protect your personal data as required by the Thai personal
                  data protection law.
                </p>
                <p className="notoBody02 mt-[16px]">
                  We receive your personal data from cookies when you visit our
                  website. This data helps us provide you better, faster, safer
                  services and for your own privacy when you use the service and
                  / or enter the platform.
                </p>
                <h3 className="dinProH3 mt-[32px]" id="header5">
                  Purpose of collection, use and disclose of personal data
                </h3>
                <p className="notoBody02 mt-[16px]">
                  We may use your personal data to the extent permitted by the
                  personal data protection law. We only collect your personal
                  data as necessary and to the extent that is related to
                  provision of our service to you, where it is necessary:
                </p>
                <ul className="notoBody02 mt-[16px]">
                  <li>
                    {' '}
                    - For our legitimate interests or any other person and your
                    interests, which do not override your fundamental rights;
                  </li>
                  <li>
                    {' '}
                    - For the performance of a contract to which you are a
                    party, or in order to take steps at your request to enter
                    into a contract;
                  </li>
                  <li>
                    {' '}
                    - For compliance with a law to which we are subjected or for
                    preventing or suppressing a danger to a person’s life, body
                    or health.
                  </li>
                </ul>
                <p className="notoBody02 mt-[16px]">
                  We explain in the table below about how we use your personal
                  data, and which lawful basis we rely on to do so.
                </p>
                <p className="notoBody02 mt-[16px]">
                  We receive your personal data from cookies when you visit our
                  website. This data helps us provide you better, faster, safer
                  services and for your own privacy when you use the service and
                  / or enter the platform.
                </p>
                <h3 className="dinProH3 mt-[32px]">
                  Purpose of collection, use and disclose of personal data
                </h3>
                <p className="notoBody02 mt-[16px]">
                  We may use your personal data to the extent permitted by the
                  personal data protection law. We only collect your personal
                  data as necessary and to the extent that is related to
                  provision of our service to you, where it is necessary:
                </p>
                <ul className="notoBody02 mt-[16px]">
                  <li>
                    {' '}
                    - For our legitimate interests or any other person and your
                    interests, which do not override your fundamental rights;
                  </li>
                  <li>
                    {' '}
                    - For the performance of a contract to which you are a
                    party, or in order to take steps at your request to enter
                    into a contract;
                  </li>
                  <li>
                    {' '}
                    - For compliance with a law to which we are subjected or for
                    preventing or suppressing a danger to a person’s life, body
                    or health.
                  </li>
                </ul>
                <p className="notoBody02 mt-[16px]">
                  We explain in the table below about how we use your personal
                  data, and which lawful basis we rely on to do so.
                </p>
                <p className="notoBody02 mt-[16px]">
                  We receive your personal data from cookies when you visit our
                  website. This data helps us provide you better, faster, safer
                  services and for your own privacy when you use the service and
                  / or enter the platform.
                </p>
                <h3 className="dinProH3 mt-[32px]" id="header6">
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
                  data, and which lawful basis we rely on to do so.selected
                  third parties as follows:
                </p>
                <ul className="notoBody02 mt-[16px]">
                  <li> - Our affiliated companies;</li>
                  <li> - Online advertising platforms;</li>
                  <li> - Marketing companies or consultants;</li>
                  <li>
                    {' '}
                    - Regulator such as the Office of the Personal Data
                    Protection Committee;
                  </li>
                  <li> - Professional advisors and consultants</li>
                </ul>
                <p className="notoBody02 mt-[16px]">
                  We require that the third parties above protect
                  confidentiality and protect your personal data in accordance
                  with requirements under the Thai personal data protection law.
                  They may use your personal data only for purposes as
                  instructed by us. Your personal data will not be used other
                  than the purposes for which we instruct or require them to do
                  so.
                </p>
                <p className="notoBody02 mt-[16px]">
                  Upon request, we may disclose your personal data to a relevant
                  authority for compliance with a law such as prevention of a
                  danger to a person, legal compliance, setting for an
                  indictment, exercising legal rights, and preventing fraud.
                </p>
                <h3 className="dinProH3 mt-[32px]" id="header7">
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
                    - Provide technological methods to prevent unauthorized
                    access to computer systems.
                  </li>
                  <li>
                    {' '}
                    - Destroy your personal data for security purposes when such
                    information is no longer needed for legal and business
                    purposes.
                  </li>
                  <li>
                    {' '}
                    - Put in place procedures to deal with any suspected
                    personal data breach and will notify a regulator of a breach
                    where we are legally required to do so.
                  </li>
                  <li>
                    {' '}
                    - We will keep your personal data for as long as necessary
                    to fulfil the purposes we collected it for, including to
                    satisfy any legal, accounting, or reporting requirements.
                  </li>
                  <li>
                    {' '}
                    - To determine the appropriate retention period for personal
                    data, we consider the amount, nature, purpose and
                    sensitivity of the personal data, the potential risk of harm
                    from unauthorised use of your personal data, and the
                    applicable legal requirements.
                  </li>
                  <li>
                    {' '}
                    - We collect your personal data obtained from cookies when
                    you use our website. We will keep your personal data for no
                    more than 13 months or as required by relevant laws.
                  </li>
                </ul>
                <h3 className="dinProH3 mt-[32px]" id="header8">
                  Right of Data Subject
                </h3>
                <p className="notoBody02 mt-[16px]">
                  Data subjects have the right to proceed to the extent
                  permitted by law as follow;
                </p>
                <ol className="notoBody02 mt-[16px]">
                  <li>
                    1. The data subject shall have the right to withdraw his or
                    her consent at any time. When processing personal data, you
                    give us consent throughout the duration of your personal
                    data with us (The Right to withdraw).
                  </li>
                  <li>
                    2. The data subject shall have the right to obtain from the
                    controller confirmation as to whether or not personal data
                    concerning him or her are being processed, request for a
                    copy of his or her personal data, including request to
                    disclose personal data acquisition that you did not give us
                    consent to (The Right to Access).
                  </li>
                  <li>
                    3. The data subject shall have the right to obtain from the
                    controller without undue delay the rectification of
                    inaccurate personal data concerning him or her (The Right to
                    Rectification).
                  </li>
                  <li>
                    4. The data subject shall have the right to obtain from the
                    controller the erasure of personal data concerning him or
                    her without undue delay (The Right to Erasure).
                  </li>
                  <li>
                    5. The data subject shall have the right to obtain from the
                    controller restriction of data processing (The Right to
                    Restriction of Processing).
                  </li>
                  <li>
                    6. The data subject shall have the right to transmit their
                    personal data to another controller without hindrance from
                    the controller to which the personal data have been provided
                    (The Right to Data Portability).
                  </li>
                  <li>
                    7. The data subject shall have the right to object, on
                    grounds relating to his or her particular situation, at any
                    time to processing of personal data concerning him or her.
                    (Right to Object)
                  </li>
                </ol>
                <p className="notoBody02 mt-[16px]">
                  You can contact the DPO or company’s staff in order to proceed
                  with the request to exercise the above rights.
                </p>
                <h3 className="dinProH3 mt-[32px]" id="header9">
                  Marketing activities and promotion
                </h3>
                <p className="notoBody02 mt-[16px]">
                  We may conduct marketing activities and promotion or use third
                  parties as instructed by us to do so:
                </p>
                <ul className="notoBody02 mt-[16px]">
                  <li>
                    - In case that we use your personal data for a purpose of
                    providing a direct marketing to you, we will be able to do
                    so only when you give us explicit consent and we have
                    already informed you the purpose of your personal data’s use
                    on direct marketing. However, you can withdraw your consent
                    on direct marketing with us at any time through our opt-out
                    system.
                  </li>
                  <li>
                    - In the case of your participation in our sale promotional
                    activities such as gaming activities or other activities
                    through various social network channels for promoting our
                    products and services to the public, we will not process
                    your data for direct marketing unless you give us an
                    explicit consent to use your personal data for direct
                    marketing and we have already informed you the purpose of
                    your personal data’s use on direct marketing. However, you
                    can withdraw your consent on direct marketing with us at any
                    time through our opt-out system.
                  </li>
                </ul>
                <h3 className="dinProH3 mt-[32px]" id="header10">
                  Cookies policy
                </h3>
                <p className="notoBody02 mt-[16px]">
                  Cookies is text files located in your computer to be used to
                  store details of log data on your internet use or your
                  website&apos;s visiting behavior. You can learn more about
                  Cookies from https://www.allaboutcookies.org/
                </p>
                <p className="notoBody02 mt-[16px]">
                  We use Cookies to collect your data on visiting to our website
                  to help us provide better, faster and safer services and
                  support your privacy when you use our services through our
                  website. We use Cookies in the following cases:
                </p>
                <ul className="notoBody02 mt-[16px]">
                  <li>
                    - Cookies for website operations (Functionality Cookies): We
                    use this type of cookies to help us remember your device or
                    browser. Thus, we can quickly create content in consistent
                    with your personal interests as well as provide the service
                    and platform more convenient and beneficial to you. By
                    disabling this cookie, you can set up your device by
                    watching helping methods on your browser or device.
                  </li>
                  <li>
                    - Cookies for analytics (Analytic cookies): We use Analytics
                    Cookies providing by Facebook and Google for analyzing how
                    visitors use our website with the objective of offering
                    products or services via Social Media. In case you do not
                    allow those third parties process your personal data, you
                    can choose to disable this type of cookies on our website.
                  </li>
                </ul>
                <h3 className="dinProH3 mt-[32px]" id="header11">
                  Privacy policy for candidates
                </h3>
                <p className="notoBody02 mt-[16px]">
                  We, SEASIA Leadavation Center Company Limited strictly abide
                  by our Privacy Policy for Employees. When we use your personal
                  data to provide service to you, your personal data is
                  protected under the Personal Data Protection Act B.E. 2562.
                </p>
                <p className="notoBody02 mt-[16px]">
                  As the data controller, we are obliged by the law to inform
                  you of our privacy policy which explains the way we collect,
                  use or disclosure your personal data as well as your rights to
                  your personal data as the data subject. We reaffirm that we
                  comply with the law to protect your personal data. Click here
                  for more details.
                </p>
                <h3 className="dinProH3 mt-[32px]" id="header12">
                  Privacy policy of other websites
                </h3>
                <p className="notoBody02 mt-[16px]">
                  This Privacy Policy is used for our service and our website
                  use only. If you click on a link to another website (although
                  via our website). You will have to study and comply with the
                  privacy policy displayed on that website separate from ours.
                </p>
                <h3 className="dinProH3 mt-[32px]" id="header13">
                  Change of privacy policy
                </h3>
                <p className="notoBody02 mt-[16px]">
                  We will review our privacy policy regularly. In case of
                  changing privacy policy, it will be announced on our website
                  or other platforms.
                </p>
                <h3 className="dinProH3 mt-[32px]" id="header14">
                  Contact
                </h3>
                <p className="notoBody02 mt-[16px]">
                  Details of the data controller
                </p>
                <div className="mt-[16px]">
                  <ul>
                    <li className="flex gap-10">
                      <b className="dinProOverLineS">Name</b>
                      <p className="notoBody02">
                        SEASIA Leadavation Center Company Limited
                      </p>
                    </li>
                    <li className="flex gap-[22px]">
                      <b className="dinProOverLineS">Address</b>
                      <p className="notoBody02">
                        2525 Building 2 FYI Center, Room No. 2/301-2/310, 3rd
                        floor, Rama 4 Road, Klongtoey, Klongtoey, Bangkok 10110
                      </p>
                    </li>
                    <li className="flex gap-10">
                      <b className="dinProOverLineS">Email</b>
                      <p className="notoBody02">DPO@seasiacenter.com</p>
                    </li>
                    <li className="flex gap-10">
                      <b className="dinProOverLineS">Line@</b>
                      <p className="notoBody02">@yournextu</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="block p-[24px] lg:hidden">
            <div className="bg-stone-50 px-[24px] py-[16px]">
              <div className="flex justify-between">
                <h6 className="dinProH6">
                  SEASIA Leadavation Center Company Limited
                </h6>
                <i
                  className={
                    selectedHeader1 ? 'fa fa-angle-down' : 'fa fa-angle-up'
                  }
                  onClick={() => {
                    selectingHeader('selectedHeader1')
                  }}
                ></i>
              </div>
              <div style={{ display: selectedHeader1 ? 'block' : 'none' }}>
                <p className="notoBody04 mt-[8px]">
                  We, SEASIA Leadavation Center Company Limited, strictly abide
                  by our customers’privacy. When we use your personal data to
                  run our business and provide service to you, your personal
                  data is protected under the Personal Data Protection Act B.E.
                  2562.
                </p>
              </div>
            </div>
            <div className="mt-[24px] bg-stone-50 px-[24px] py-[16px]">
              <div className="flex justify-between">
                <h6 className="dinProH6">Definition of Personal Data</h6>
                <i
                  className={
                    selectedHeader2 ? 'fa fa-angle-down' : 'fa fa-angle-up'
                  }
                  onClick={() => {
                    selectingHeader('selectedHeader2')
                  }}
                ></i>
              </div>
              <div style={{ display: selectedHeader2 ? 'block' : 'none' }}>
                <p className="notoBody04 mt-[8px]">
                  Definition of Personal Data
                </p>
                <h6 className="dinProH6 mt-[16px]">
                  Definition of Personal Data
                </h6>
                <p className="notoBody04 mt-[4px]">
                  Personal Data means any information related to a person, which
                  enables the identification of such person, whether directly or
                  indirectly. For example, name address e-mail address
                  Identification Number.
                </p>
                <h6 className="dinProH6 mt-[16px]">Sensitive Personal Data</h6>
                <p className="notoBody04 mt-[4px]">
                  Sensitive Data is special category of personal data that needs
                  appropriate protection and carefully collect, use or disclose.
                  Sensitive Data pertains racial, ethnic origin, political
                  opinions, cult, religious or philosophical beliefs, sexual
                  behavior, criminal records, health data, disability, trade
                  union information, genetic data and biometric data.
                </p>
              </div>
            </div>
            <div className="mt-[24px] bg-stone-50 px-[24px] py-[16px]">
              <div className="flex justify-between">
                <h6 className="dinProH6">
                  Personal data that we collect from you
                </h6>
                <i
                  className={
                    selectedHeader3 ? 'fa fa-angle-down' : 'fa fa-angle-up'
                  }
                  onClick={() => {
                    selectingHeader('selectedHeader3')
                  }}
                ></i>
              </div>
              <div style={{ display: selectedHeader3 ? 'block' : 'none' }}>
                <p className="notoBody04 mt-[8px]">
                  Personal data that we collect from you
                </p>
                <ul className="notoBody04 mt-[10px]">
                  <li>- You use our website ;</li>
                  <li>
                    - You provide information to us through our website or
                    applications ;
                  </li>
                  <li>
                    - You provide information to us when you make enquiry via
                    online or offline channel.
                  </li>
                </ul>
                <p className="notoBody04 mt-[10px]">
                  We only collect your personal data as necessary to provide the
                  service to you and to correspond to your queries as well as to
                  carry on our business in a way that you would normally
                  anticipate.
                </p>
                <p className="notoBody04 mt-[10px]">
                  We may collect, use, store and transfer different types of
                  personal data about you which we have grouped as follows :
                </p>
                <h6 className="dinProH6">Contact Data</h6>
                <p className="notoBody04 mt-[10px]">
                  Includes name-surname, address, email, telephone number,
                  occupation, position, business types, interested Courses,
                  product, service, budget range.
                </p>
                <h6 className="dinProH6">Technical Data</h6>
                <p className="notoBody04 mt-[10px]">
                  Includes internet protocol (IP) address, browser type and
                  version, time zone setting and location, operation system and
                  platform and other technology on the devices you use to access
                  this website.
                </p>
                <h6 className="dinProH6">Usage Data</h6>
                <p className="notoBody04 mt-[10px]">
                  Includes information about your use of our service through and
                  from our website, websites that you view, elements you viewed
                  or words you searched for in platforms, date and time of
                  visit, and interaction information such as clicks on item in a
                  website.
                </p>
                <h6 className="dinProH6">Communication Data</h6>
                <p className="notoBody04 mt-[10px]">
                  Includes email, notes of conversation, communication notes.
                </p>
                <h6 className="dinProH6">Contract-related Data</h6>
                <p className="notoBody04 mt-[10px]">
                  National identification number, Tax identification number,
                  address, credit card number, date of birth, sex.
                </p>
              </div>
            </div>
            <div className="mt-[24px] bg-stone-50 px-[24px] py-[16px]">
              <div className="flex justify-between">
                <h6 className="dinProH6">Sources of Personal Data</h6>
                <i
                  className={
                    selectedHeader4 ? 'fa fa-angle-down' : 'fa fa-angle-up'
                  }
                  onClick={() => {
                    selectingHeader('selectedHeader4')
                  }}
                ></i>
              </div>
              <div style={{ display: selectedHeader4 ? 'block' : 'none' }}>
                <p className="notoBody04 mt-[8px]">
                  We receive your personal data directly from you through the
                  following channels:
                </p>
                <ul className="notoBody04 mt-[10px]">
                  <li>
                    - You register with us by creating an account on our website
                    or application.
                  </li>
                  <li>
                    - You make a query with us relating to your interested
                    property/ project.
                  </li>
                  <li>
                    - You make an appointment with us to visit the project site.
                  </li>
                  <li>
                    - You provide information to us when you visit the project
                    site.
                  </li>
                  <li>
                    - You participate in our marketing activity through an
                    electronic platform, social media, or an offline platform.
                  </li>
                </ul>
                <p className="notoBody04 mt-[10px]">
                  We receive your personal data from a third party that
                  collects, uses or discloses your personal data as instructed
                  by us or on our behalf. Your personal data will not be used
                  other than the purposes for which we instruct or require such
                  third party to do. We require such third party to protect
                  confidentiality of your personal data and to have measures to
                  protect your personal data as required by the Thai personal
                  data protection law.
                </p>
                <p className="notoBody04 mt-[10px]">
                  We receive your personal data from cookies when you visit our
                  website. This data helps us provide you better, faster, safer
                  services and for your own privacy when you use the service and
                  / or enter the platform.
                </p>
              </div>
            </div>
            <div className="mt-[24px] bg-stone-50 px-[24px] py-[16px]">
              <div className="flex justify-between">
                <h6 className="dinProH6">
                  Purpose of collection, use and disclose of personal data
                </h6>
                <i
                  className={
                    selectedHeader5 ? 'fa fa-angle-down' : 'fa fa-angle-up'
                  }
                  onClick={() => {
                    selectingHeader('selectedHeader5')
                  }}
                ></i>
              </div>
              <div style={{ display: selectedHeader5 ? 'block' : 'none' }}>
                <p className="notoBody04 mt-[8px]">
                  We may use your personal data to the extent permitted by the
                  personal data protection law. We only collect your personal
                  data as necessary and to the extent that is related to
                  provision of our service to you, where it is necessary:
                </p>
                <ul className="notoBody04 mt-[10px]">
                  <li>
                    - For our legitimate interests or any other person and your
                    interests, which do not override your fundamental rights;
                  </li>
                  <li>
                    - For the performance of a contract to which you are a
                    party, or in order to take steps at your request to enter
                    into a contract;
                  </li>
                  <li>
                    - For compliance with a law to which we are subjected or for
                    preventing or suppressing a danger to a person’s life, body
                    or health.
                  </li>
                </ul>
                <p className="notoBody04 mt-[10px]">
                  We explain in the table below about how we use your personal
                  data, and which lawful basis we rely on to do so.
                </p>
                <p className="notoBody04 mt-[10px]">
                  We receive your personal data from cookies when you visit our
                  website. This data helps us provide you better, faster, safer
                  services and for your own privacy when you use the service and
                  / or enter the platform.
                </p>
              </div>
            </div>
            <div className="mt-[24px] bg-stone-50 px-[24px] py-[16px]">
              <div className="flex justify-between">
                <h6 className="dinProH6">
                  Disclosing or sharing your personal data
                </h6>
                <i
                  className={
                    selectedHeader6 ? 'fa fa-angle-down' : 'fa fa-angle-up'
                  }
                  onClick={() => {
                    selectingHeader('selectedHeader6')
                  }}
                ></i>
              </div>
              <div style={{ display: selectedHeader6 ? 'block' : 'none' }}>
                <p className="notoBody04 mt-[8px]">
                  We may have to disclose or share your personal data with For
                  compliance with a law to which we are subjected or for
                  preventing or suppressing a danger to a person’s life, body or
                  health.
                </p>
                <p className="notoBody04 mt-[8px]">
                  We explain in the table below about how we use your personal
                  data, and which lawful basis we rely on to do so.selected
                  third parties as follows:
                </p>
                <ul className="notoBody04 mt-[10px]">
                  <li>- Our affiliated companies;</li>
                  <li>- Online advertising platforms;</li>
                  <li>- Marketing companies or consultants;</li>
                  <li>
                    - Regulator such as the Office o the Personal Data
                    Protection Committee;
                  </li>
                  <li>- Professional advisors and consultants</li>
                </ul>
                <p className="notoBody04 mt-[10px]">
                  We require that the third parties above protect
                  confidentiality and protect your personal data in accordance
                  with requirements under the Thai personal data protection law.
                  They may use your personal data only for purposes as
                  instructed by us. Your personal data will not be used other
                  than the purposes for which we instruct or require them to do
                  so.
                </p>
                <p className="notoBody04 mt-[10px]">
                  Upon request, we may disclose your personal data to a relevant
                  authority for compliance with a law such as prevention of a
                  danger to a person, legal compliance, setting for an
                  indictment, exercising legal rights, and preventing fraud.
                </p>
              </div>
            </div>
            <div className="mt-[24px] bg-stone-50 px-[24px] py-[16px]">
              <div className="flex justify-between">
                <h6 className="dinProH6">
                  Retention policy and retention period of personal data
                </h6>
                <i
                  className={
                    selectedHeader7 ? 'fa fa-angle-down' : 'fa fa-angle-up'
                  }
                  onClick={() => {
                    selectingHeader('selectedHeader7')
                  }}
                ></i>
              </div>
              <div style={{ display: selectedHeader7 ? 'block' : 'none' }}>
                <p className="notoBody04 mt-[8px]">
                  We collect your personal data in our information system and
                  provide standard security to keep our information systems and
                  the use of your personal data secure with following measures:
                </p>
                <ul className="notoBody04 mt-[10px]">
                  <li>
                    - Restrict access to personal data which may be accessed by
                    employees, agents, contractors and other third parties. They
                    can only access your personal data on our instructions, and
                    they are subject to a duty of confidentiality and protection
                    of personal data.
                  </li>
                  <li>
                    - Provide technological methods to prevent unauthorized
                    access to computer systems.
                  </li>
                  <li>
                    - Destroy your personal data for security purposes when such
                    information is no longer needed for legal and business
                    purposes.
                  </li>
                  <li>
                    - Put in place procedures to deal with any suspected
                    personal data breach and will notify a regulator of a breach
                    where we are legally required to do so.
                  </li>
                  <li>
                    - We will keep your personal data for as long as necessary
                    to fulfil the purposes we collected it for, including to
                    satisfy any legal, accounting, or reporting requirements.
                  </li>
                  <li>
                    - To determine the appropriate retention period for personal
                    data, we consider the amount, nature, purpose and
                    sensitivity of the personal data, the potential risk of harm
                    from unauthorised use of your personal data, and the
                    applicable legal requirements.
                  </li>
                  <li>
                    - We collect your personal data obtained from cookies when
                    you use our website. We will keep your personal data for no
                    more than 13 months or as required by relevant laws.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-[24px] bg-stone-50 px-[24px] py-[16px]">
              <div className="flex justify-between">
                <h6 className="dinProH6">Right of Data Subject</h6>
                <i
                  className={
                    selectedHeader8 ? 'fa fa-angle-down' : 'fa fa-angle-up'
                  }
                  onClick={() => {
                    selectingHeader('selectedHeader8')
                  }}
                ></i>
              </div>
              <div style={{ display: selectedHeader8 ? 'block' : 'none' }}>
                <p className="notoBody04 mt-[8px]">
                  Data subjects have the right to proceed to the extent
                  permitted by law as follow;
                </p>
                <ol className="notoBody04 mt-[10px]">
                  <li>
                    1. The data subject shall have the right to withdraw his or
                    her consent at any time. When processing personal data, you
                    give us consent throughout the duration of your personal
                    data with us (The Right to withdraw).
                  </li>
                  <li>
                    2. The data subject shall have the right to obtain from the
                    controller confirmation as to whether or not personal data
                    concerning him or her are being processed, request for a
                    copy of his or her personal data, including request to
                    disclose personal data acquisition that you did not give us
                    consent to (The Right to Access).
                  </li>
                  <li>
                    3. The data subject shall have the right to obtain from the
                    controller without undue delay the rectification of
                    inaccurate personal data concerning him or her (The Right to
                    Rectification).
                  </li>
                  <li>
                    4. The data subject shall have the right to obtain from the
                    controller the erasure of personal data concerning him or
                    her without undue delay (The Right to Erasure).
                  </li>
                  <li>
                    5. The data subject shall have the right to obtain from the
                    controller restriction of data processing (The Right to
                    Restriction of Processing).
                  </li>
                  <li>
                    6. The data subject shall have the right to transmit their
                    personal data to another controller without hindrance from
                    the controller to which the personal data have been provided
                    (The Right to Data Portability).
                  </li>
                  <li>
                    7.The data subject shall have the right to object, on
                    grounds relating to his or her particular situation, at any
                    time to processing of personal data concerning him or her.
                    (Right to Object)
                  </li>
                </ol>
                <p className="notoBody04 mt-[10px]">
                  You can contact the DPO or company’s staff in order to proceed
                  with the request to exercise the above rights.
                </p>
              </div>
            </div>
            <div className="mt-[24px] bg-stone-50 px-[24px] py-[16px]">
              <div className="flex justify-between">
                <h6 className="dinProH6">Marketing activities and promotion</h6>
                <i
                  className={
                    selectedHeader9 ? 'fa fa-angle-down' : 'fa fa-angle-up'
                  }
                  onClick={() => {
                    selectingHeader('selectedHeader9')
                  }}
                ></i>
              </div>
              <div style={{ display: selectedHeader9 ? 'block' : 'none' }}>
                <p className="notoBody04 mt-[8px]">
                  We may conduct marketing activities and promotion or use third
                  parties as instructed by us to do so:
                </p>
                <ul className="notoBody04 mt-[10px]">
                  <li>
                    - In case that we use your personal data for a purpose of
                    providing a direct marketing to you, we will be able to do
                    so only when you give us explicit consent and we have
                    already informed you the purpose of your personal data’s use
                    on direct marketing. However, you can withdraw your consent
                    on direct marketing with us at any time through our opt-out
                    system.
                  </li>
                  <li>
                    - In the case of your participation in our sale promotional
                    activities such as gaming activities or other activities
                    through various social network channels for promoting our
                    products and services to the public, we will not process
                    your data for direct marketing unless you give us an
                    explicit consent to use your personal data for direct
                    marketing and we have already informed you the purpose of
                    your personal data’s use on direct marketing. However, you
                    can withdraw your consent on direct marketing with us at any
                    time through our opt-out system.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-[24px] bg-stone-50 px-[24px] py-[16px]">
              <div className="flex justify-between">
                <h6 className="dinProH6">Cookies policy</h6>
                <i
                  className={
                    selectedHeader10 ? 'fa fa-angle-down' : 'fa fa-angle-up'
                  }
                  onClick={() => {
                    selectingHeader('selectedHeader10')
                  }}
                ></i>
              </div>
              <div style={{ display: selectedHeader10 ? 'block' : 'none' }}>
                <p className="notoBody04 mt-[8px]">
                  Cookies is text files located in your computer to be used to
                  store details of log data on your internet use or your
                  website&apos;s visiting behavior. You can learn more about
                  Cookies from https://www.allaboutcookies.org/
                </p>
                <p className="notoBody04 mt-[8px]">
                  We use Cookies to collect your data on visiting to our website
                  to help us provide better, faster and safer services and
                  support your privacy when you use our services through our
                  website. We use Cookies in the following cases:
                </p>
                <ul className="notoBody04 mt-[10px]">
                  <li>
                    - Cookies for website operations (Functionality Cookies): We
                    use this type of cookies to help us remember your device or
                    browser. Thus, we can quickly create content in consistent
                    with your personal interests as well as provide the service
                    and platform more convenient and beneficial to you. By
                    disabling this cookie, you can set up your device by
                    watching helping methods on your browser or device.
                  </li>
                  <li>
                    - Cookies for analytics (Analytic cookies): We use Analytics
                    Cookies providing by Facebook and Google for analyzing how
                    visitors use our website with the objective of offering
                    products or services via Social Media. In case you do not
                    allow those third parties process your personal data, you
                    can choose to disable this type of cookies on our website.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-[24px] bg-stone-50 px-[24px] py-[16px]">
              <div className="flex justify-between">
                <h6 className="dinProH6">Privacy policy for candidates</h6>
                <i
                  className={
                    selectedHeader11 ? 'fa fa-angle-down' : 'fa fa-angle-up'
                  }
                  onClick={() => {
                    selectingHeader('selectedHeader11')
                  }}
                ></i>
              </div>
              <div style={{ display: selectedHeader11 ? 'block' : 'none' }}>
                <p className="notoBody04 mt-[8px]">
                  We, SEASIA Leadavation Center Company Limited strictly abide
                  by our Privacy Policy for Employees. When we use your personal
                  data to provide service to you, your personal data is
                  protected under the Personal Data Protection Act B.E. 2562.
                </p>
                <p className="notoBody04 mt-[8px]">
                  As the data controller, we are obliged by the law to inform
                  you of our privacy policy which explains the way we collect,
                  use or disclosure your personal data as well as your rights to
                  your personal data as the data subject. We reaffirm that we
                  comply with the law to protect your personal data. Click here
                  for more details.
                </p>
              </div>
            </div>
            <div className="mt-[24px] bg-stone-50 px-[24px] py-[16px]">
              <div className="flex justify-between">
                <h6 className="dinProH6">Privacy policy of other websites</h6>
                <i
                  className={
                    selectedHeader12 ? 'fa fa-angle-down' : 'fa fa-angle-up'
                  }
                  onClick={() => {
                    selectingHeader('selectedHeader12')
                  }}
                ></i>
              </div>
              <div style={{ display: selectedHeader12 ? 'block' : 'none' }}>
                <p className="notoBody04 mt-[8px]">
                  This Privacy Policy is used for our service and our website
                  use only. If you click on a link to another website (although
                  via our website). You will have to study and comply with the
                  privacy policy displayed on that website separate from ours.
                </p>
              </div>
            </div>
            <div className="mt-[24px] bg-stone-50 px-[24px] py-[16px]">
              <div className="flex justify-between">
                <h6 className="dinProH6">Change of privacy policy</h6>
                <i
                  className={
                    selectedHeader13 ? 'fa fa-angle-down' : 'fa fa-angle-up'
                  }
                  onClick={() => {
                    selectingHeader('selectedHeader13')
                  }}
                ></i>
              </div>
              <div style={{ display: selectedHeader13 ? 'block' : 'none' }}>
                <p className="notoBody04 mt-[8px]">
                  We will review our privacy policy regularly. In case of
                  changing privacy policy, it will be announced on our website
                  or other platforms.
                </p>
              </div>
            </div>
            <div className="mt-[24px] bg-stone-50 px-[24px] py-[16px]">
              <div className="flex justify-between">
                <h6 className="dinProH6">Contact</h6>
                <i
                  className={
                    selectedHeader13 ? 'fa fa-angle-down' : 'fa fa-angle-up'
                  }
                  onClick={() => {
                    selectingHeader('selectedHeader13')
                  }}
                ></i>
              </div>
              <div style={{ display: selectedHeader13 ? 'block' : 'none' }}>
                <p className="notoBody04 mt-[8px]">
                  Details of the data controller
                </p>
                <div className="mt-[8px]">
                  <ul>
                    <li className="flex gap-8">
                      <b className="dinProOverLineS">Name</b>
                      <p className="notoBody02">
                        SEASIA Leadavation Center Company Limited
                      </p>
                    </li>
                    <li className="flex gap-4">
                      <b className="dinProOverLineS">Address</b>
                      <p className="notoBody02">
                        2525 Building 2 FYI Center, Room No. 2/301-2/310, 3rd
                        floor, Rama 4 Road, Klongtoey, Klongtoey, Bangkok 10110
                      </p>
                    </li>
                    <li className="flex gap-8">
                      <b className="dinProOverLineS">Email</b>
                      <p className="notoBody02">DPO@seasiacenter.com</p>
                    </li>
                    <li className="flex gap-8">
                      <b className="dinProOverLineS">Line@</b>
                      <p className="notoBody02">@yournextu</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
