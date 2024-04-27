import AnimetedText from '@/components/animetedText/AnimetedText'
import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import React from 'react'

export default function Articles() {
  return (
    <>
      <Head>
        <title>VeraCruz | Articles Page</title>
        <meta name='description' content="Articles Page Portofolio" />
      </Head>
      <main className='w-full flex flex-col items-center justify-center'>
        <Layout className='pt-8'>
          <AnimetedText text="Words Can Change The World! " className={"mb-16 text-7xl"} />
        </Layout>
      </main>
    </>
  )
}
