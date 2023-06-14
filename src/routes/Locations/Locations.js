import { Button, Card } from 'antd'
import './Locations.css'

const styles = {
    alignCenter: {
        textAlign: 'center'
    },
    bold: {
        fontWeight: 'bold'
    },
}

const locations = [
    {
        address: '2300 W Sunnyside Avenue',
        city: 'Visalia',
        state: 'CA',
        zip: '93277',
        img: '2300WSunnyside',
        url: 'https://www.google.com/maps/place/2300+W+Sunnyside+Ave,+Visalia,+CA+93277/@36.3035834,-119.3184596,17z/data=!3m1!4b1!4m6!3m5!1s0x80952f3053545ef5:0xaf346c10d295317f!8m2!3d36.3035834!4d-119.3162709!16s%2Fg%2F11f54ttlzd',
        schedule: ['Thursday']
    },
    {
        address: '460 W Putnam Avenue',
        city: 'Porterville',
        state: 'CA',
        zip: '93257',
        img: '460WPutnam',
        url: 'https://www.google.com/maps/place/460+W+Putnam+Ave,+Porterville,+CA+93257/@36.0697683,-119.0294991,17z/data=!3m1!4b1!4m6!3m5!1s0x80eab86b49700001:0xca64fbd33d4fb961!8m2!3d36.0697683!4d-119.0273104!16s%2Fg%2F11dztqh261',
        schedule: ['Monday', 'Wednesday']
    },
    {
        address: '936 G Street, Suite B',
        city: 'Reedley',
        state: 'CA',
        zip: '93654',
        img: '936GStreet',
        url: 'https://www.google.com/maps/place/936+G+St,+Reedley,+CA+93654/@36.5983503,-119.4547158,17z/data=!3m1!4b1!4m6!3m5!1s0x8094e2c4d3af20cd:0xea9e581688c02544!8m2!3d36.5983503!4d-119.4525271!16s%2Fg%2F11bw3z9p75',
        schedule: ['Friday']
    },
    // {
    //     address: '550 West Grangeville Blvd',
    //     city: 'Handford',
    //     state: 'CA',
    //     zip: '93230',
    //     img: '550WestGrangeville',
    //     url: 'https://www.google.com/maps/place/500+W+Grangeville+Blvd,+Hanford,+CA+93230/@36.3426824,-119.6539309,17z/data=!3m1!4b1!4m5!3m4!1s0x8094c3a0f1b120e9:0x769b09e9d7562070!8m2!3d36.3426824!4d-119.6517422'
    // }
]

export default function Locations() {

    function goToURL(url) {
        window.open(url, '_blank')
    }

    const { Meta } = Card;

    const screenWidth = window.screen.width


    return (
        <div className="route-container" id="contacts-container" >
            <div style={{...styles.alignCenter, paddingBottom: '8px'}} >Come see Dr. Teela at</div>
            <Button onClick={() => goToURL('https://www.sisurgicalservices.com/')} type='primary' >Sequoia Institute for Surgical Services</Button>
            <br />
            <div style={styles.alignCenter} >or call or text</div>
            <h3 style={{...styles.alignCenter, ...styles.bold, padding: '8px 0'}} >(559)-731-2009</h3>

            <div id="location-cards">
                {locations.map(l => (
                    <div style={{
                        paddingTop: screenWidth > 512 ? '0px' : '16px',
                        paddingRight: screenWidth < 512 ? '0px' : '8px',
                        flexGrow: '0',
                        minWidth: '232px',
                        maxWidth: screenWidth > 512 ? '33%' : '100%'
                    }}>
                        <Card 
                            hoverable 
                            onClick={() => goToURL(l.url)} 
                            cover={<img src={require(`../../assets/locations/${l.img}.jpeg`)} alt={l.address} />} 
                        >
                            <Meta title={`${l.city}, ${l.state}`} description={`${l.address}`} />
                            <div style={{padding: '8px 0px'}} >In Office: {l.schedule.join(', ')}</div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}