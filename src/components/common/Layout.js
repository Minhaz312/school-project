import React from 'react'
// import Head from 'next/head'
import NavigationBar from './NavigationBar'
import MobileNavbar from './MobileNavbar'
import Footer from '../footer/Footer'
export default function Layout({ children }) {
  return (
    <div>
      {/* <Head>
        <title>সানরাইজ গ্রামার স্কুল (একটি আদর্শ শিক্ষা প্রতিষ্ঠান)</title>
        <meta
          name="description"
          content="বাংলাদেশের বাণিজ্যিক রাজধানী চট্টগ্রাম। চট্টগ্রামের ইতিহাস ও ঐতিহ্য যথেষ্ট সমৃদ্ধ। দেশের অর্থনীতিতে চট্টগ্রামের ভূমিকা শীর্ষে থাকা সত্ত্বেও এখানকার শিক্ষার্থীরা একবিংশ শতাব্দীর চ্যালেঞ্জ মোকাবেলায় একটি সমন্বিত, স্বয়ংসম্পূর্ণ আধুনিক Digital প্রযুক্তি সমৃদ্ধ শিক্ষা প্রতিষ্ঠানের অভাবে পিছিয়ে পড়ছে প্রতিনিয়ত। এর বাস্তবতা দেখা যায় প্রতিবছর Medical, BUET ও ঢাকা বিশ্ববিদ্যালয়সহ অন্যান্য উচ্চ শিক্ষা প্রতিষ্ঠানে চট্টলা হতে চান্সপ্রাপ্ত শিক্ষার্থীর পরিসংখ্যানের দিকে তাকালেই।"
        />
        favicon
        <link rel="icon" href="/images/logowhite.png" />
      </Head> */}

      <main style={{ backgroundColor: '#f5f5f5' }}>
        <NavigationBar />
        <MobileNavbar />
        {children}
      </main>
      <Footer />
    </div>
  )
}
