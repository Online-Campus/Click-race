import React, { useEffect, useState } from 'react'
import { COLORS } from '../utils/utils'
import './ColorMatch.css'

const ColorMatch = () => {
    
    const [name, setName] = useState(COLORS[Math.floor(Math.random() * (COLORS.length-1))])
    const [color, setColor] = useState(COLORS[Math.floor(Math.random() * (COLORS.length-1))])
    
    useEffect(() => {
        const timer = setInterval(
            () => {
                setName(COLORS[Math.floor(Math.random() * (COLORS.length-1))])
                setColor(COLORS[Math.floor(Math.random() * (COLORS.length-1))])
            }, 
            1000)
            return () => clearInterval(timer)
    },[])

    const check = () => {
        console.log(name, color)
    }

    return <div onClick={()=>{check()}} className={`box font-${color}`}> 
        {name}
    </div>
}

export default ColorMatch
