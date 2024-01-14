import { useEffect, useState } from "react"


const ACTIONS_KEYBOARD_MAP = {
    'KeyW': 'moveForward',
    'KeyS': 'moveBackward',
    'KeyA': 'moveLeft',
    'KeyD': 'moveRight',
    'KeyQ:': 'show',
    'Space': 'jump',
    'Digit1': 'dirt',
    'Digit2': 'glass',
    'Digit3': 'grass',
    'Digit4': 'log',
    'Digit5': 'wather',
    'Digit6': 'wood',
    
}

export const useKeyboard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        dirt: false,
        grass: false,
        glass: false,
        wood: false,
        log: false,
        wather: false,
    
    })

    useEffect(() => {
        const handleKeyDown = event => {
            const { code } = event
            const action = ACTIONS_KEYBOARD_MAP[code]
            console.log(action)
            if (action) {
                setActions(prevActions => ({ ...prevActions, [action]: true }))
            }
        }
        const handleKeyUp = event => {
            const { code } = event
            const action = ACTIONS_KEYBOARD_MAP[code]
            if (action) {
                setActions(prevActions => ({ ...prevActions, [action]: false }))
            }
        }

        document.addEventListener('keydown', handleKeyDown)
         document.addEventListener('keyup', handleKeyUp)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [])
    return actions
}