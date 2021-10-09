import React, { useState, useMemo } from 'react'

const UseMemoCounter = () => {
    const [counteOne, setCounteOne] = useState(0)
    const [counteTwo, setCounteTwo] = useState(0)

    const incrementOne = () => {
        setCounteOne(counteOne + 1)
    }
    const incrementTwo = () => {
        setCounteTwo(counteTwo + 2)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return counteOne % 2 === 0
    }, [counteOne])

    return (
        <div>
            <div>
                <button onClick={incrementOne} >Count one - {counteOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo} >Count Two - {counteTwo}</button>
            </div>
        </div>
    )
}

export default UseMemoCounter
