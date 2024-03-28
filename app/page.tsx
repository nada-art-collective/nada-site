'use client'

// import { Roboto_Mono } from 'next/font/google'
import { useState } from 'react'

import './globals.css'



 
// const mono = Roboto_Mono({
//   weight: ['400', '700'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
//   display: 'swap',
// })

function Art({art} : {art : any}) {
  return (
    art.content
  );
}

const art1 = {
  title: 'The Departure of Vell',
  authors: ['MAGGIE SULLIVAN', 'AUTUMN SHELBY'],
  content: 
  <div key='The Departure of Vell' className='parent'> 
    <p className='child'>
        The Departure of Vell is a 2-part work: it includes a Tarot Deck 
        designed by Maggie Sullivan and a collaborative storytelling game 
        written by Autumn Shelby. The game uses a Tarot Deck to represent 
        and select aspects of the story being told.
    </p>
  </div>,
}

const art2 = {
  title: 'Placeholder 1',
  authors: ['KIER ZIMMERMAN'],
  content: 
  <div key='t2' className='parent'> 
    <p className='child'>
      Placeholder 1 is a project by Kier Zimmerman.
    </p>
  </div>,
}

const art3 = {
  title: 'Placeholder 2',
  authors: ['MAGGIE SULLIVAN'],
  content: 
  <div key='t3' className='parent'> 
    <p className='child'>
      Placeholder 2 is a project by Maggie Sullivan. 
    </p>
  </div>,
}

const art4 = {
  title: 'Placeholder 3',
  authors: ['KIER ZIMMERMAN', 'MAGGIE SULLIVAN'],
  content:
  <div key='t4' className='parent'>
    <p className='child'>
      Placeholder 3 is a project by Kier Zimmerman and Maggie Sullivan.
    </p>
  </div>
}



export default function Home() {
  const initialArts = [art1, art2, art3, art4];
  const [arts, setArts] = useState(initialArts);

  const artists = [
    'KIER ZIMMERMAN',
    'MAGGIE SULLIVAN',
    'AUTUMN SHELBY',
    'TEST ONE',
    'TEST TWO',
    'TEST THREE',
    'TEST FOUR'
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
      <span key={artist.text} className='linker' onClick={buttonClick}>
        WORKS BY {artist.text}
      </span>)
  }
  
  return (
    // <div className={mono.className}>
        // <main className={mono.className}>
        <main>
          <h1 key='1'>N. A. D. A.</h1>
          <h2 key='2'>an art collective</h2>
          <div key='3'>
            <h3 key='1'>1: make art together</h3>
            <h3 key='2'>2: ask questions if you have questions</h3>
            <h3 key='3'>3: offer knowledge if you have knowledge</h3>
          </div>
          <h4 key='4' className='linker' onClick={() => setArts(initialArts)}>ALL WORKS</h4>
          <ul key='5'>
            <p>
              {artists.map(a => <span key={a}><ArtistButton artist={{text: a}} /> </span> )}
            </p>
          </ul>
          <br key='6'/>
          <br key='7'/>
          <div key='8'>
            {arts.map(art => <Art art={art} /> )}
          </div>
          <div key='9'>
            <br key='1'/>
            <br key='2'/>
            <br key='3'/>
            <br key='4'/>
            <br key='5'/>
          </div>
        </main>
    // </div>
)
}
