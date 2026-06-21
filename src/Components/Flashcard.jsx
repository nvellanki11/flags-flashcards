import {useState} from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const countries = [
    {name: "Scotland", flag: "https://flagcdn.com/w160/gb-sct.png"},
    {name: "Senegal", flag: "https://flagcdn.com/w160/sn.png"},
    {name: "Haiti", flag: "https://flagcdn.com/w160/ht.png"},
    {name: "Qatar", flag: "https://flagcdn.com/w160/qa.png"},
    {name: "Croatia", flag: "https://flagcdn.com/w160/hr.png"},
    {name: "Paraguay", flag: "https://flagcdn.com/w160/py.png"},
    {name: "France", flag: "https://flagcdn.com/w160/fr.png"},
    {name: "Ecuador", flag: "https://flagcdn.com/w160/ec.png"},
    {name: "Netherlands", flag: "https://flagcdn.com/w160/nl.png"},
    {name: "Iran", flag: "https://flagcdn.com/w160/ir.png"},
    {name: "Saudi Arabia", flag: "https://flagcdn.com/w160/sa.png"},
    {name: "Türkiye", flag: "https://flagcdn.com/w160/tr.png"},
]

export default function Flashcard({streak, setStreak}) {
    
    const [side, setSide] = useState("front")
    const [index, setIndex] = useState(0)
    const [flip, setFlip] = useState(false)
    const sideSwitch = () => {
        setFlip(true)
        setTimeout(() => {
            setSide(s => s === "front" ? "back" : "front")
            setFlip(false)
        }, 200)
    }
    const switchCountry = (direction) => {
        let tempIndex = index
        if (direction == -1 && index > 0) {
            tempIndex = index - 1
        } else if (direction == 1 && index < countries.length-1) {
            tempIndex = index + 1   
        }
        setIndex(tempIndex)
        setSide("front")
        setAnswer(countries[tempIndex].name)
        setCheckAnswer("")
        setUserGuess("")
    }

    const [userGuess, setUserGuess] = useState("")
    const [answer, setAnswer] = useState(countries[0].name)
    const [checkAnswer, setCheckAnswer] = useState("")
    const onCheckGuess = () => {
        let temp = userGuess.trim().toLowerCase() == answer.trim().toLowerCase()
        temp ? setCheckAnswer("right") : setCheckAnswer("wrong")
        setUserGuess("")
        setStreak((prev) => temp ? prev + 1 : 0)
    }


    return (
        <div className="container" style={styles.container}>
            <div className='flashcard' style={{...styles.flashcard, 
            transform: flip ? "rotateX(90deg)" : "rotateX(0deg)", 
            backgroundColor: checkAnswer === "wrong" ? "rgb(247, 2, 2)" : checkAnswer === "right" ? "rgb(7, 242, 7)" : "rgb(43, 42, 42)"
            }} onClick={() => sideSwitch()} >
                {side === "front" ? <img style={{height: "200px", width: "400px"}} src={countries[index].flag}/> : <h2 style={{color: "white", fontSize: "50px"}}>{countries[index].name}</h2>}
            </div>
            <div className='guess-container'>
                <form>
                    <input className='guess' type="text" value={userGuess}
                    onChange={(i) => setUserGuess((i.target.value))}/>
                    <button type="button" className='submitbutton' onClick={onCheckGuess}>Submit Guess</button>
                </form>
            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <button className="leftbutton" style={styles.leftbutton} onClick={() => switchCountry(-1)}>
                    <FaLongArrowAltLeft size={20} color={index === 0 ? "grey" : "black"}/>
                </button>
                <button className="rightbutton" style={styles.rightbutton} onClick={() => switchCountry(+1)}>
                    <FaLongArrowAltRight size={20} color={index === countries.length - 1 ? "grey" : "black"}/>
                </button>
            </div>
        </div>        
    )
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "40px",
    },

    flashcard: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid black",
        boxSizing: "border-box",
        height: "300px",
        width: "500px",
        marginBottom: "30px",
        transition: "transform 0.15s ease-in-out",
    },

    leftbutton: {
        height: "40px",
        width: "80px",
        marginTop: "15px",
        marginRight: "10px",
    },

    rightbutton: {
        height: "40px",
        width: "80px",
        marginTop: "15px",
        marginRight: "10px",
    },

}

export const numCards = countries.length