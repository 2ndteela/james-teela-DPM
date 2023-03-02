import './HiddenImage.css'
import React, {useState} from 'react'

export default function HiddenImage({src, alt}) {
    const [ blur, setBlur ] = useState(true)

    return (
        <div className={`hidden-image-container`} onClick={() => setBlur(!blur)}>
            <img className='hidden-image' src={src} alt={alt} />
            <div className={`button-and-text-container ${blur ? 'blur' : ''} `} >
                <div className={`text-container ${blur ? '' : 'hide-text'}`} >
                    <span>This image contains graphic content.</span>
                </div>
            </div>
            <span className={`toggle-fade-text ${blur ? '' : 'hide-text'}`} >Click or tap to view</span>
        </div>
    )
}