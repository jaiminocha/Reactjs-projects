import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const ClickButton = () => {
    const [state, setState] = useState(0);
    const [state1, setState1] = useState(0);

    /*
        useEffect is used to call everytime the page renders, it renders the first time 
        the page loads and everytime useState is called. 
        To achieve this we use useEffect(()=>{})

        To load only the first time we use useEffect(() => {}, [])

        We can also make the useEffect depend on a particular state,
        eg. useEffect(() => {}, [state, state1])
    */
    useEffect(() => {
        window.alert('Call for useEffect');
    }, [state])

  return (
    <div>
        <Button onClick={() => setState(state + 1)}>
            SIU!!! {state}
        </Button>

        <Button onClick={() => setState1(state1 + 1)}>
            Ankara!!! {state1}
        </Button>
    </div>
  )
}

export default ClickButton