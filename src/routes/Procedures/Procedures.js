import HiddenImage from "../../comp/HiddenImage/HiddenImage"
import "./Procedures.css"

import DiabeticWoundPre from '../../assets/surgical-images/diabetic-pre.jpeg'
import DiabeticWoundPost from '../../assets/surgical-images/diabetic-post.jpeg'
import ToePre from '../../assets/surgical-images/toe-pre.jpeg'
import ToePost from '../../assets/surgical-images/toe-post.jpeg'
import AnkleRepairPre from '../../assets/surgical-images/ankle-repair-pre.jpeg'
import AnkleRepairPost from '../../assets/surgical-images/ankle-repair-post.jpeg'
import BunionectomyPre from '../../assets/surgical-images/bunionectomy-pre.jpeg'
import BunionectomyPost from '../../assets/surgical-images/bunionectomy-post.jpeg'
import { BsQuestionCircle } from "react-icons/bs"

const procedureList = [
    {
        name: 'Bunionectomy (Lapiplasty)',
        beforeImage: BunionectomyPre,
        afterImage: BunionectomyPost,
        show: true,
        link: 'https://www.lapiplasty.com/lapiplasty-3d-bunion-correction/about-lapiplasty/'
    },
    {
        name: 'Ankle Fracture Repair',
        beforeImage: AnkleRepairPre,
        afterImage: AnkleRepairPost,
        show: true
    },
    {
        name: 'Diabetic Wound',
        beforeImage: DiabeticWoundPre,
        afterImage: DiabeticWoundPost,
    },
    {
        name: 'Diabetic Ulcer and Gangrene',    
        beforeImage: ToePre,
        afterImage: ToePost
    },
] 

const otherServices = [
    'Lapiplasty',
    'Bunions',
    'Foot and Ankle surgery',
    'Diabetic Foot Care',
    'Wound Care',
    'Infection Treatment',
    'Ingrown Toenails',
    'Plantar Warts',
    'Painful Callouses',
    'Hammer Toes',
    'Plantar Fascitis',
    'Tendonitis',
    'Fractures and Dislocations',
    'Board Certified in Podiatric Medicine',
    ]

    function goToLapiplasty() {
        window.open('https://www.lapiplasty.com/lapiplasty-3d-bunion-correction/about-lapiplasty/', '_blank')
    }

export default function Proceedures() {
    return(
        <div className="route-container" >
            <h2 style={{ paddingBottom: '8px'}} >All Services</h2>
            <div style={{display: 'flex', flexWrap:'wrap'}} >
                {otherServices.map(s => <h2 className={`chip`} >{s} {s === 'Lapiplasty' && <BsQuestionCircle className="is-link" onClick={goToLapiplasty} style={{paddingLeft: '8px', fontSize: '1.4em'}} /> } </h2>)}
            </div>
            <br />
            <h2>Example Procedures</h2>
            {
                procedureList.map(p => (
                    <div className={`procedure-container`}>
                        <h3>{p.name} {p.link && <BsQuestionCircle className="is-link" onClick={goToLapiplasty} style={{paddingLeft: '8px', fontSize: '1.4em'}} />} </h3>
                        <div className="before-and-after-photos" >
                            <div className="procedure-photo">
                                <h4>Before</h4>
                                {p.show ? <img src={p.beforeImage} alt={`post-${p.name}`} /> : <HiddenImage src={p.beforeImage} alt={`pre-${p.name}`} />}
                            </div>
                            <div className="procedure-photo">
                                <h4>After</h4>
                                <img src={p.afterImage} alt={`post-${p.name}`} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}