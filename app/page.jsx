import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import CharactersPage from './characters/page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='grid h-screen place-items-center'>
      <section className='section-principal'>
        <img src="http://i.annihil.us/u/prod/marvel/i/mg/f/80/4ce5a6d8b8f2a.jpg" alt="" />
        <img src="http://i.annihil.us/u/prod/marvel/i/mg/2/a0/4c0038fa14452.jpg" alt="" />
        <img src="http://i.annihil.us/u/prod/marvel/i/mg/5/50/4c0035b3630cd.jpg" alt="" />
        <img src="http://i.annihil.us/u/prod/marvel/i/mg/2/40/4c0032754da02.jpg" alt="" />
        <img src="http://i.annihil.us/u/prod/marvel/i/mg/f/10/4c004203f1072.jpg" alt="" />
      </section>
    </div>
  )
}
