import React, { useState, useMemo } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'

const styles = {
    backgroundColor: '#002E5D',
    color: 'white',
    padding: '16px 16px',
    height: '56px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    zIndex: 10
}

const headerElements = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '960px'
}

const linkElements = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '960px'
}

const navStyles = {
    position: 'absolute',
    top: '56px',
    left: '0px',
    transition: '.3s',
    color: '#002E5D',
    backgroundColor: 'white',
    width: '100vw',
    borderBottom: '1px solid #002E5D',
    padding: '8px',
    zIndex: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const linkStyles = {
    padding: '4px 0px',
    textDecoration: 'none'
}

const links = [ 
    {
        text: 'James Teela DPM',
        path: ''
    },
    // {
    //     text: 'Locations and Information',
    //     path: 'locations'
    // },
    {
        text: 'Procedures and Services',
        path: 'procedures'
    },
    // {
    //     text: 'Lapiplasty Certification',
    //     path: 'lapiplasty'
    // }
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const {pathname} = useLocation()

    const headerTitle = useMemo(() => {

        const current = links.find((l) =>  l.path ===  pathname.substring(1))
        
        return current ? current.text : 'James Teela DPM'
    }, [pathname])

    return (
        <div style={{position: 'relative'}} >
            <header style={styles} onClick={() => setIsOpen(!isOpen)}>
                <div style={headerElements} >
                    <h3>{headerTitle}</h3>
                    {isOpen ? <BsChevronUp/> : <BsChevronDown />}
                </div>
                
            </header>
            <nav style={{ ...navStyles, top: isOpen ? '56px' : '-56px', opacity: isOpen ? 1 : 0 }} >
                <div style={linkElements} >
                    {links.map(l => <Link onClick={() => setIsOpen(false)} to={`/${l.path}`} key={l.path} style={linkStyles} >{l.text}</Link>)}
                </div>
            </nav>
        </div>
    )
}