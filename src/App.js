import { IonApp, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/react'
import { useState } from 'react'

import BiorhythmCard from './components/BiorhythmCard'

const getTodayDateString = () => {
  return new Date().toISOString().split('T')[0]
}

function App() {
  const [dob, setDob] = useState('')
  const [targetDate, setTargetDate] = useState(getTodayDateString())

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>

          <IonItem>
            <IonLabel position="stacked">Birth Date</IonLabel>
            <IonInput placeholder="Enter your date of birth" type="date" value={dob} onIonChange={(e) => setDob(e.detail.value)}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Target Date</IonLabel>
            <IonInput placeholder="Enter your target date" type="date" value={targetDate} onIonChange={(e) => setTargetDate(e.detail.value)}></IonInput>
          </IonItem>

        </IonList>

        <BiorhythmCard dob={dob} targetDate={targetDate} />

      </IonContent>
    </IonApp>
  )
}

export default App
