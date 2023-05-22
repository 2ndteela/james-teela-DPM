
import React from 'react'
import './home.css'
import {Button, Carousel} from 'antd'

export default function Home() {

    function openNewWindow() {
        window.open('https://www.sisurgicalservices.com/', '_blank')
    }

    return (
        <div id='main-bio' >
            <Carousel autoplay>
                <div id='dr-teela-outside-center' />
                <div id='dr-teela-portrait-pic' />
                <div id='dr-teela-hike' />
            </Carousel>
            <div style={{padding: '16px'}} >
                <div style={{display: 'flex', width: '100%', justifyContent: 'center' }}>
                    <Button type='primary'  onClick={openNewWindow}>Schedule an appointment now</Button>
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