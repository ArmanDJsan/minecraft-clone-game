import { useStore } from '../hooks/useStore'
import * as images from '../images/images'
import { useKeyboard } from '../hooks/useKeyboard'
import { useEffect, useState } from 'react'

export const TextureSelector = () => {
    const [visible, setVisible] = useState(true)
    const [texture, setTexture] = useStore(state => [state.texture, state.setTexture])

    const { dirt, grass, glass, wood, log, wather } = useKeyboard()
   
    useEffect(() => {
        const options = {
            dirt, grass, glass, wood, log, wather
        }

        const selectedTexture = Object.entries(options)
            .find(([texture, isEnabled]) => isEnabled)

        if (selectedTexture) {
            const [textureName] = selectedTexture[0]
            setTexture(selectedTexture[0])
        }

    }, [dirt, grass, glass, wood, log, wather])

    if (!visible) return null
    
    return (
        <div className='texture-selector'>
            {
                Object
                    .entries(images)
                    .map(([imgKey, img]) => {
                        return (
                            <img
                                className={texture == imgKey.replace('Img','')? 'selected' : ''}
                                key={imgKey}
                                src={img}
                                alt={imgKey}
                            />
                        )
                    })
            }
        </div>
    )
}