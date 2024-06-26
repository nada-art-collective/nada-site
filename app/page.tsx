'use client'

// import { Roboto_Mono } from 'next/font/google'
import { useState } from 'react'

import './globals.css'
import ExportedImage from 'next-image-export-optimizer'
import sullivanUntitled4 from '../public/images/sullivan-untitled-4.jpg'
import sullivanUntitled5 from '../public/images/sullivan-untitled-5.jpg'
import sullivanDelles from '../public/images/sullivan-delles.jpg'
import sullivanDellesMis from '../public/images/sullivan-delles-misprint.jpg'
import dictionaries from './dict.json'

function Art({art} : {art : any}) {
  return (
    art.content
  );
}



// TEMPLATE FOR ADDING YOUR ART TO THIS PAGE:
// Copy this template, remove the double-slashes that make it not do anything,
// and fill in with your own information.
// Then, add your name JUST AS IT APPEARS HERE to the list
// on the line that starts with "const artists = "
// rename this art object (replacing the big long all caps thing that starts
// PLACEHOLDER_NAME with art11 if yours is the 11th, art73 if yours is the 73rd, etc)
// and then put that new name in the list that starts on the line
// which begins "const: initialArts = "
// const PLACEHOLDER_NAME_REPLACE_WITH_artN_WHERE_N_IS_NEXT_NUMBER = {
//   title: 'PLACEHOLDER TITLE',
//   authors: ['PLACEHOLDER NAME 1', 'PLACEHOLDER NAME 2'],
//   content: 
//   <div key='PLACEHOLDER' className='art'> 
//     <h3>PLACEHOLDER TITLE</h3>
//     <div className='parent'>
//       <p className='left-text'>
//         PLACEHOLDER TEXT
//       </p>
//     </div>


// This chunk here is only necessary if you're including an image.
// Put it in the public/images file and import it as at the top of the page.
// If you don't need an image, just delete this bit.
//     <div className='parent'>
//       <br/>
//       <div className='img-holder'>
//         <ExportedImage
//           src={sullivanUntitled4}
//           alt="Poster of hands overlapping, and the text 'What cannot be told, must be performed.'"
//         />
//       </div>
//     </div>


//   </div>,
// }

const art1 = {
  title: 'The Departure of Vell',
  authors: ['MAGGIE SULLIVAN', 'AUTUMN SHELBY'],
  content: 
  <div key='t1' className='art'> 
    <h3>The Departure of Vell</h3>
    <div className='parent'>
      <p className='left-text'>
        The Departure of Vell is a 2-part work: it includes a Tarot Deck 
        designed by Maggie Sullivan and a collaborative storytelling game 
        written by Autumn Shelby. The game uses a Tarot Deck to represent 
        and select aspects of the story being told.
      </p>
    </div>
  </div>,
}

// const art2 = {
//   title: 'Placeholder 1',
//   authors: ['KIER ZIMMERMAN'],
//   content: 
//   <div key='t2' className='art'> 
//     <h3>Placeholder 1</h3>
//     <div className='parent'>
//       <p className='left-text'>
//         Placeholder 1 is a project by Kier Zimmerman.
//       </p>
//     </div>
//   </div>,
// }

const art3 = {
  title: 'Untitled 4',
  authors: ['MAGGIE SULLIVAN'],
  content: 
  <div key='t3' className='art'> 
    <h3>Untitled 4</h3>
    <div className='parent'>
      <p className='left-text'>
        silk screen on paper
      </p>
    </div>
    <div className='parent'>
      <br/>
      <div className='img-holder'>
        <ExportedImage
          src={sullivanUntitled4}
          alt="Poster of hands overlapping, and the text 'What cannot be told, must be performed.'"
        />
      </div>
    </div>
  </div>,
}

const art4 = {
  title: 'RUR',
  authors: ['KIER ZIMMERMAN'],
  content:
  <div key='t4' className='art'>
    <h3>RUR</h3>
    <div className='parent'>
      <p className='left-text'>
        RUR will be a performance based on Karel Čapek's play Rossum's Universal Robots.
        RUR is to be directed by Kier Zimmerman and will be put on in the APE space in Northampton, Massachusetts.
        The performers will be various other artists associated with NADA. Details to follow.
      </p>
    </div>
  </div>
}

const art5 = {
  title: 'Untitled 5',
  authors: ['MAGGIE SULLIVAN'],
  content: 
  <div key='t5' className='art'> 
    <h3>Untitled 5</h3>
    <div className='parent'>
      <p className='left-text'>
        silk screen on paper
      </p>
    </div>
    <div className='parent'>
      <div className='img-holder'>
        <ExportedImage
          src={sullivanUntitled5}
          alt="Print of a child scared and crouched. Shadows of ghosts across the wall behind them and their face."
        />
      </div>
    </div>
  </div>,
}

const art6 = {
  title: 'Room in Delles',
  authors: ['MAGGIE SULLIVAN'],
  content: 
  <div key='t6' className='art'> 
    <h3>Room in Delles</h3>
    <div className='parent'>
      <p className='left-text'>
        intaglio on paper
      </p>
    </div>
    <div className='parent'>
      <div className='img-holder'>
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
      </div>
    </div>
  </div>,
}

// TEMPLATE FOR ADDING YOUR ART TO THIS PAGE:
// Copy this template, remove the double-slashes that make it not do anything,
// and fill in with your own information.
// Then, add your name JUST AS IT APPEARS HERE to the list
// on the line that starts with "const artists = "
// rename this art object (replacing the big long all caps thing that starts
// PLACEHOLDER_NAME with art11 if yours is the 11th, art73 if yours is the 73rd, etc)
// and then put that new name in the list that starts on the line
// which begins "const: initialArts = "
const art7 = {
  title: 'night at the pond',
  authors: ['AUTUMN SHELBY'],
  content: 
  <div key='night at the pond' className='art'> 
    <h3>night at the pond</h3>
    <div className='parent'>
      <p className='left-text'>
          the moon is slim.<br/>
          a train rolls by.<br/>
          a gentle beast<br/>
          whose yellow lights<br/>
          from there within<br/>
          now phase between<br/>
          the silhouettes<br/>
          of shadow trees<br/>
          across the pond.<br/>
          the gentle wind<br/>
          in silences<br/>
          abides this hush.<br/>
          as circle stones<br/>
          all overgrown<br/>
          left standing lush —<br/>
          they croon to me.<br/>
      </p>
    </div>
  </div>,
}



function getRandomElement(items : any) {
    return items[Math.floor(Math.random()*items.length)];
}

function getAcronym() {
    return (getRandomElement(dictionaries['words_n']) +
        ' ' +
        getRandomElement(dictionaries['words_a']) +
        ' ' +
        getRandomElement(dictionaries['words_d']) +
        ' ' +
        getRandomElement(dictionaries['words_a']))
}

function shuffleArray(array : any) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



export default function Home() {
  const initialArts = [
    art4, art3, art1, art5, 
    art6, art7];
  const [arts, setArts] = useState(initialArts);

  const acronym = getAcronym();

  const artists = [
    'KIER ZIMMERMAN',
    'MAGGIE SULLIVAN',
    'AUTUMN SHELBY'
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

  function randomizeArts() {
    let randomArts = [...initialArts];
    shuffleArray(randomArts);
    setArts(randomArts);
  }



  return (
        <main>
          <h1 className='center-text' key='1'>N. A. D. A.</h1>
          <h3 className='center-text acronym' key='1.5'>({acronym})</h3>
          <h3 className='center-text' key='2'>an art collective:</h3>
          <div key='3'>
            <h3 className='center-text' key='1'>make art together</h3>
            <h3 className='center-text' key='2'>ask questions if you have questions</h3>
            <h3 className='center-text' key='3'>offer knowledge if you have knowledge</h3>
          </div>
          <div key='3.5'>
            <h2>
              Upcoming performance this June in Northampton, Massachusetts!
            </h2>
            <div className='parent'>
              <p className='left-text'>
                RUR is happening soon. Some details below, and more to follow.
              </p>
            </div>
          </div>
          <h4 key='4' className='center-text linker' onClick={() => setArts(initialArts)}>SHOW ALL WORKS</h4>
          <h4 key='4' className='center-text linker' onClick={randomizeArts}>SHOW ALL WORKS IN A RANDOM ORDER</h4>
          <div key='5' className='parent center-text'>
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
          <div key='bottoms'>
            <div className='parent'>
              <p className='center-text'>
                If you want to recieve a (more or less) weekly newsletter, submit your email here. NADA will absolutely never sell your information or send you advertisements.
              </p>
            </div>
            <div className='parent'>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfXRZF-7xeUh0m8etf1WtBgXGgha7PxK5ylwby8f9pUhr6b6w/viewform?embedded=true">Loading…</iframe>
            </div>
            <div className='parent'>
              <p className='center-text'>
                To contribute, submit a pull request at <a href='https://github.com/nada-art-collective/nada-site'>the github repo</a> or email us at nadaartcollective@gmail.com.
              </p>
            </div>
          </div>
        </main>
    // </div>
)
}
