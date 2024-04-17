
import React from 'react'
import './home.css'
import {Carousel} from 'antd'
import { BsCalendarPlus, BsInstagram } from 'react-icons/bs'

const links = [
    {
        text: 'Schedule an appointment now',
        url: 'https://www.wetreatyourfeet.com/doctors/dr-teela/',
        Icon: BsCalendarPlus
    },
    {
        text: 'Follow Dr. Teela on Instagram',
        url: 'https://www.instagram.com/drjamesteela/',
        Icon: BsInstagram
    },
    {
        text: 'Schedule an appointment now',
        url: 'https://www.wetreatyourfeet.com/doctors/dr-teela/',
    }
]

const baseLinkStyles = {
    textDecoration: 'none',
    color: '#0051a3'
}

const alignCenterStyles = {
    display: 'flex', 
    alignItems: 'center',
}

export default function Home() {
    return (
        <div id='main-bio' >
            <Carousel>
                <div id='dr-teela-outside-center' />
                <div className='text-banner' >
                    <h1>Foot and Ankle surgeon</h1>
                </div>
                <div className='text-banner' >
                    <h1>Diabetic foot Specialist</h1>
                    <h1>Wound Care Specialist</h1>
                </div>
                <div className='text-banner' >
                    <h1>Primary Podiatry Care</h1>
                    <h2>Ingrown Toenails, Fungus nails and much more</h2>
                </div>
            </Carousel>
            <div style={{padding: '16px'}} >
                <div className='links-container'>
                    {links.map((l, idx) => (
                    <>
                        <a style={l?.Icon ? {...baseLinkStyles, ...alignCenterStyles} : baseLinkStyles} href={l.url} target='_blank' rel="noreferrer" >
                            {l.Icon ? (
                                <>
                                    <l.Icon /> 
                                    <div style={{paddingLeft: '8px'}} >{l.text}</div>
                                </>
                            ) : <>{l.text}</>
                            }
                        </a>
                        {idx !== links.length - 1 && <div className='links-divider' >|</div>}
                    </>
                )
                )}
                </div>

                <p>
                    Dr. James Teela is an experienced and qualified Podiatrist with an extensive background in various health care settings. 
                    Proudly serving The Central Valley since 2015, Dr. Teela's practice extends from Reedly to Delano as well as Porterville and Visalia. 
                    His responsibilities have included diagnostic, therapeutic and preventive foot care services to patients of all ages, specializing 
                    in diabetic foot wound care and limb preservation. Dr. Teela has also conducted many foot and ankle surgeries contributing his talents 
                    to work in the local hospitals and surgery centers of The Valley.
                </p>

                <p>
                    Bringing decades of experience to Sequoia Institute for Surgical Services, Dr. Teela's work history is diverse as he has worked for 
                    several health care facilities across America in medical settings including the V.A. Medical System, private practice as well as home 
                    and hospital settings.
                </p>

                <p>
                    Dr. Teela began his medical career with his studies at Des Moines University where he graduated with his Doctorate degree in 2000. 
                    His medical education continued in Lebanon, PA and Fort Meade, SD VAMC where he found great joy in serving the brave veterans of America.
                    He has continued his medical education by attending multiple conferences including The Western held annually in Los Angeles.               
                </p>
                <p>
                    A proud father of six children, Dr. Teela and his wife enjoy spending time with their family. Skiing in Utah and hiking in 
                    Sequoia National Forest are among his favorite hobbies. 
                </p>
            </div>
        </div>
    )
}