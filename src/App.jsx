import { useState } from 'react'
//import { Card } from './components/Card.jsx'
import './App.css'

const tutorialData = [
  {
    title: 'Dedica moltes hores',
    description: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de deicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
    bgColor: 'rgb(253, 197, 102)',
    image: './src/assets/meditation.svg',
    alt: 'Imatge sobre la importància de saber organitzar el teu temps.'
  },
  {
    title: 'Programa projectes propis',
    description: 'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
    bgColor: 'rgb(185, 176, 176)',
    image: './src/assets/programming.svg',
    alt: "Imatge d'un noi programant."
  },
  {
    title: 'Procura descansar',
    description: "Descansa bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrés i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
    bgColor: 'cadetblue',
    image: './src/assets/time_managment.svg',
    alt: "Imatge d'una noia fent meditació."
  }
]
console.log(tutorialData)

function App() {

  const [step, setStep] = useState(0)

  const handleClickNext = () => {
    setStep((prevStep) => (prevStep + 1) % tutorialData.length)
  }

  const handleClickPrevious = () => {
    setStep((prevStep) => {
      if (prevStep === 0) {
        return tutorialData.length - 1;
      } else {
        return (prevStep - 1) % tutorialData.length;
      }
    })
  }

  const currentCardData = tutorialData[step]
  console.log("card current", currentCardData)

  return (
    <section className='card-section'>
      <div className='card'>
        <img
          className='card-image'
          src={currentCardData.image}
          alt={currentCardData.alt}
          style={{ backgroundColor: currentCardData.bgColor }}
        />
        <div className='card-title'>
          <strong>{currentCardData.title}</strong>
        </div>
        <div className='card-info'>
          <span>{currentCardData.description}</span>
        </div>
      </div>

      <div>
          <button onClick={handleClickNext}>←</button>
          <button onClick={handleClickPrevious}>→</button>
      </div>
    </section>
  )
}

export default App
