import './App.css';
import Menu from './components/Menu';
import salat from './img/salat.jpg'
import pervyi from './img/pervyi.jpg'
import vtoroy from './img/vtoroy.jpg'
import burger from './img/burger.webp'
import zakuski from './img/zakuski.jpg'
import vypechka from './img/vypechka.webp'
import souses from './img/souses.jpg'
import garnirs from './img/garnirs.jpg'
import pizza from './img/pizza.jpg'
import bar from './img/bar.jpg'
import banket from './img/banket.jpg'
import BasicModal from './components/Modal'



import { useEffect, useState } from 'react';

export default function App() {
const [state, setState] = useState()
const [img, setImage] = useState()

useEffect(() => {
  if(state == 0) {
    setImage("");
  }
  else if(state == 1) {
    setImage("")
  }
  else if(state == 2) {
    setImage("")
  }
  else if(state == 3) {
    setImage("")
  }
  else if(state == 4) {
    setImage("")
  }
  else if(state == 5) {
    setImage("")
  }
  else if(state == 6) {
    setImage("")
  }
  else if(state == 7) {
    setImage("")
  }
  else if(state == 8) {
    setImage("")
  }
  else if(state == 9) {
    setImage("")
  }
  else if(state == 10) {
    setImage("")
  }
  else {
    setImage()
  }
}, [state])

  let sectionStyle = {
    backgroundImage: `url(${img})`,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    opacity: '30%',
    zIndex: '-1',
    
  };
    
  return (
    <>
    <div style={ sectionStyle }  >
    </div>
    <BasicModal/>
      <Menu setState={setState} state={state}/>
    </>
  );
}
