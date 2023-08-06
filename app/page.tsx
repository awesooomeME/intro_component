import Image from 'next/image'
import Link from 'next/link'

import bg_desktop from '@/public/images/bg-intro-desktop.png'
import bg_mobile from '@/public/images/bg-intro-mobile.png'
import { Form } from '@/components/Form'

export default function Home() {
  return (
    <main className='min-h-screen relative grid place-content-center
      bg-red'>
      <picture className='absolute top-0 left-0 desktop:h-full desktop:w-full select-none pointer-events-none'>
        <source srcSet={bg_desktop.src} media='(min-width: 700px)'/>
        <Image src={bg_mobile} alt='' className='w-full h-full'/>
      </picture>
      <article className='px-5 grid desktop:grid-cols-2 gap-10 max-w-[1000px]'>
        <section className='flex gap-5 flex-col desktop:justify-center'>
          <h1 className='text-white text-center font-700
            text-3xl desktop:text-left desktop:text-[3em] desktop:leading-[3.5rem]'>
            Learn to code by watching others
          </h1>
          <p className='text-center text-white/70 desktop:text-left desktop:text-sm'>
            See how experience developers solve problems in real-time.
            Watching scripted tutorials is great, but understanding how developers
            think is invaluable.
          </p>
        </section>
        <section className='grid gap-5'>
          <div className='bg-blue rounded-lg py-4 px-12 shadow-xl'>
            <p className='text-center font-500 text-white'>
              Try it free 7 days <span className='font-400'>then $20/mo. thereafter</span>
            </p>
          </div>
          <Form/>
        </section>
      </article>
    </main>
  )
}
