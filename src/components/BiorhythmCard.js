import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react"
import dayjs from "dayjs"

function formatDate(isoString) {
    const day = dayjs(isoString)
    return day.format('D MMMM YYYY')
}

function BiorhythmCard({ dob, targetDate }) {
    console.log('BiorhythmCard props:', { dob, targetDate })
    return (
        <IonCard className="ion-text-center">
            <IonCardHeader>
                <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <p>Physical: ???</p>
                <p>Emotional: ???</p>
                <p>Intellectual: ???</p>
            </IonCardContent>
        </IonCard>
    )
}

export default BiorhythmCard