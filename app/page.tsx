'use client'

import { Roboto_Mono } from 'next/font/google'
import { useState } from 'react'

 
const mono = Roboto_Mono({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

function Art({art} : {art : any}) {
  return ( art.content );
}

const art1 = {
  title: 't1',
  authors: ['a1'],
  content: 
  <div key='t1'> 
    t1 is a project by a1 that d1 
  </div>,
}

const art2 = {
  title: 't2',
  authors: ['a2'],
  content: 
  <div key='t2'> 
    t2 is a project by a2 that d2 
  </div>,
}

const art3 = {
  title: 't3',
  authors: ['a2'],
  content: 
  <div key='t3'> 
    t3 is a project by a2 that d3 
  </div>,
}

const art4 = {
  title: 't4',
  authors: ['a1', 'a2'],
  content:
  <div key='t4'>
    t4 is a project by a1 and a2 that d4
  </div>
}



export default function Home() {
  const initialArts = [art1, art2, art3, art4];
  const [arts, setArts] = useState(initialArts);



  const artists = [
    'a1', 'a2',
  ]

  function ArtistButton({artist} : {artist : any}) {
    function buttonClick() {
      let newarts = []
      let i
      for (i in initialArts) {
        if (((initialArts[i]).authors).includes((artist.text))) {
          newarts.push(initialArts[i]);
        }
      }
      setArts(newarts);
    }

    return (
      <button key={artist.text} className='linker' onClick={buttonClick}>
        WORKS BY {artist.text}
      </button>)
  }
  
  return (
    // <div className={mono.className}>
        <main>
          <h1 key='1'>N. A. D. A.</h1>
          <h2 key='2'>an art collective</h2>
          <div key='3'>
            <h3 key='1'>1: make art together</h3>
            <h3 key='2'>2: ask questions if you have questions</h3>
            <h3 key='3'>3: offer knowledge if you have knowledge</h3>
          </div>
          <button key='4' className='linker' onClick={() => setArts(initialArts)}>ALL WORKS</button>
          <div key='5'>
            {artists.map(a => <ArtistButton artist={{text: a}} /> )}
          </div>
          <br key='6'/>
          <br key='7'/>
          <div key='8'>
            {arts.map(art => <Art art={art} /> )}
          </div>
        </main>
    // </div>
)
}
