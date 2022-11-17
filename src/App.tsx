import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [isDeductive, setIsDeductive] = useState(false)
  const [isSound, setIsSound] = useState(false)
  // const [isValid, setIsValid] = useState(false)
  
  const [isInductive, setIsInductive] = useState(false)
  const [isStrong, setIsStrong] = useState(false)
  // const [isCogent, setIsCogent] = useState(false)
  
  const [isNeither, setIsNeither] = useState(false)

  useEffect(() => {
    // console.log(isValid);
  })

  return (
    <div className="App">
      <form action="" onChange={(e) => {
        if (e.target.value == "inductive") {
          setIsInductive(true)
          setIsDeductive(false)
          setIsNeither(false)
        }
        if (e.target.value == "deductive") {
          setIsDeductive(true)
          setIsInductive(false)
          setIsNeither(false)
        }
        if (e.target.value == "neither") {
          setIsNeither(true)
          setIsDeductive(false)
          setIsInductive(false)
        }
      }}>
        <h2>Does your conclusion follow your premise:</h2>
        <fieldset class="first-choice">
            <label htmlFor="deductive">
             indefinitely? <input name="inductive-or-deductive" id="deductive" type="radio" value="deductive" checked={isDeductive} />
            </label>
            <span>or</span>      
            <label htmlFor="inductive">
              with some probability? <input name="inductive-or-deductive" id="inductive" type="radio" value="inductive" checked={isInductive}/>
            </label>
            <span>or</span>      
            <label htmlFor="neither">
             neither <input name="inductive-or-deductive" id="neither" type="radio" value="neither" checked={isNeither} />
            </label>
        </fieldset>
      </form>
      {isDeductive &&
        <div className="deductive">
          <h2>This is considered <em>deductive reasoning</em>.</h2>
          <form action="" onChange={(e) => {
            if (e.target.value == "true") {
              setIsSound(true)
            } else {
              setIsSound(false)
            }
          }}>
            <h3>Is your premise:</h3>
            <fieldset>
                <label htmlFor="true">
                  true? <input name="premise-true" id="true" type="radio" value="true" checked={isSound}/>
                </label>
                <span>or</span>      
                <label htmlFor="false">
                untrue? <input name="premise-true" id="false" type="radio" value="false" checked={!isSound} />
                </label>
            </fieldset>
          </form> 
          {isSound && 
            <h3>Your argument is both <em>valid</em> and <em>sound</em>.</h3>
          } 
          {!isSound && 
            <h3>Your argument is <em>valid</em>, but <em>unsound</em>.</h3>
          }
        </div>
      }
      {isInductive &&
        <div className="inductive">
          <h2>This is considered <em>inductive reasoning</em>.</h2>
          <form action="" onChange={(e) => {
            if (e.target.value == "strong") {
              setIsStrong(true)
            } else {
              setIsStrong(false)
            }
          }}>
            <h3>Is the probability:</h3>
            <fieldset>
                <label htmlFor="strong">
                  high? <input name="premise-strong" id="strong" type="radio" value="strong" checked={isStrong}/>
                </label>
                <span>or</span>      
                <label htmlFor="weak">
                  low? <input name="premise-strong" id="weak" type="radio" value="weak" checked={!isStrong} />
                </label>
            </fieldset>
          </form> 
          <form action="" onChange={(e) => {
            if (e.target.value == "true") {
              setIsSound(true)
            } else {
              setIsSound(false)
            }
          }}>
            <h3>And your premise:</h3>
            <fieldset>
                <label htmlFor="true">
                  true? <input name="premise-true" id="true" type="radio" value="true" checked={isSound}/>
                </label>
                <span>or</span>      
                <label htmlFor="false">
                untrue? <input name="premise-true" id="false" type="radio" value="false" checked={!isSound} />
                </label>
            </fieldset>
          </form> 
          {(isStrong && isSound) && 
            <h3>Your argument is <em>strong</em> and <em>cogent</em>.</h3>
          } 
          {(!isStrong && !isSound) && 
            <h3>Your argument is <em>weak</em> and <em>uncogent</em> .</h3>
          }
          {(isStrong && !isSound) && 
            <h3>Your argument is <em>strong</em>, but <em>uncogent</em>.</h3>
          }
          {(!isStrong && isSound) && 
            <h3>Your argument is <em>weak</em>, but <em>cogent</em>.</h3>
          }
        </div>
      }
      {isNeither &&
        <div className="neither">
          <h3 className="result">Your argument is <em>invalid</em> since the conclusion does not logically follow your premise.  This is a formal fallacy known as a <em>non-sequitur</em>.</h3>
        </div>
      }
    </div>
  )
}

export default App
