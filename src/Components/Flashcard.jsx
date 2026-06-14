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

export default function Flashcard() {
    
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
        if (direction == -1 && index > 0) {
            setIndex(index - 1)
            setSide("front")
        } else if (direction == 1 && index < countries.length-1) {
            setIndex(index + 1)
            setSide("front")
        }
    }

    return (
        <div className="container" style={styles.container}>
            <div className='flashcard' style={{...styles.flashcard, transform: flip ? "rotateX(90deg)" : "rotateX(0deg)"}} onClick={() => sideSwitch()} >
                {side === "front" ? <img style={{height: "200px", width: "400px"}} src={countries[index].flag}/> : <h2 style={{color: "white", fontSize: "50px"}}>{countries[index].name}</h2>}
            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <button className="leftbutton" style={styles.leftbutton} onClick={() => switchCountry(-1)}><FaLongArrowAltLeft size={20} /></button>
                <button className="rightbutton" style={styles.rightbutton} onClick={() => switchCountry(+1)}><FaLongArrowAltRight size={20} /></button>
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
        backgroundColor: "#1f1e1eff",
        transition: "transform 0.15s ease-in-out",
    },

    leftbutton: {
        height: "40px",
        width: "80px",
    },

    rightbutton: {
        height: "40px",
        width: "80px",
    },

}

export const numCards = countries.length