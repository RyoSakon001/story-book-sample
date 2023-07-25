import Image from 'next/image'
import { Inter } from 'next/font/google'
import Circle from '../stories/Circle'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1 className='text-3xl text-red-300'>Hello</h1>
      <Circle variant="orange" />
    </>
  )
}
