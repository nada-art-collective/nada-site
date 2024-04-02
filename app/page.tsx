'use client'

// import { Roboto_Mono } from 'next/font/google'
import { useState } from 'react'

import './globals.css'
import ExportedImage from 'next-image-export-optimizer'
import sullivanUntitled4 from '../public/images/sullivan-untitled-4.jpg'
import sullivanUntitled5 from '../public/images/sullivan-untitled-5.jpg'
import sullivanDelles from '../public/images/sullivan-delles.jpg'
import sullivanDellesMis from '../public/images/sullivan-delles-misprint.jpg'


 
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
    <p className='left-text'>
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
    <p className='left-text'>
      Placeholder 1 is a project by Kier Zimmerman.
    </p>
  </div>,
}

const art3 = {
  title: 'untitled 4',
  authors: ['MAGGIE SULLIVAN'],
  content: 
  <div key='t3' className='parent'> 
    <ExportedImage
      src={sullivanUntitled4}
      alt="Poster of hands overlapping, and the text 'What cannot be told, must be performed.'"
    />
  </div>,
}

const art4 = {
  title: 'Placeholder 3',
  authors: ['KIER ZIMMERMAN', 'MAGGIE SULLIVAN'],
  content:
  <div key='t4' className='parent'>
    <p className='left-text'>
      Placeholder 3 is a project by Kier Zimmerman and Maggie Sullivan.
    </p>
  </div>
}

const art5 = {
  title: 'untitled 5',
  authors: ['MAGGIE SULLIVAN'],
  content: 
  <div key='t5' className='parent'> 
    <ExportedImage
      src={sullivanUntitled5}
      alt="Print of a child scared and crouched. Shadows of ghosts across the wall behind them and their face."
    />
  </div>,
}

const art6 = {
  title: 'Delles',
  authors: ['MAGGIE SULLIVAN'],
  content: 
  <div key='t5' className='parent'> 
    <ExportedImage
      key='1'
      src={sullivanDelles}
      alt="Print of a room."
    />
    <ExportedImage
      key='2'
      src={sullivanDellesMis}
      alt="Print of a room, but half the elements are upside-down and backwards printed."
    />
  </div>,
}



export default function Home() {
  const initialArts = [
    art1, art2, art3, art4, art5, 
    art6];
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
        | WORKS BY {artist.text} |
      </span>)
  }

  let counter = 0;

  return (
        <main>
          <h1 key='1'>N. A. D. A.</h1>
          <h2 key='2'>an art collective</h2>
          <div key='3'>
            <h3 key='1'>1: make art together</h3>
            <h3 key='2'>2: ask questions if you have questions</h3>
            <h3 key='3'>3: offer knowledge if you have knowledge</h3>
          </div>
          <h4 key='4' className='linker' onClick={() => setArts(initialArts)}>ALL WORKS</h4>
          <div key='5' className='parent'>
            <p>
              {
                artists.map(a => <ArtistButton artist={{text: a}} /> )
              }
            </p>
          </div>
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
