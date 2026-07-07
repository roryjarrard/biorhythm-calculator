import { IonApp, IonContent, IonDatetime, IonDatetimeButton, IonHeader, IonItem, IonLabel, IonList, IonModal, IonTitle, IonToolbar } from '@ionic/react'
import { useState } from 'react'

import BiorhythmCard from './components/BiorhythmCard'
import { useStoredState } from './lib/hooks/hooks'
import './App.css'

const getTodayDateString = () => {
  return new Date().toISOString().split('T')[0]
}

function App() {
  const [dob, setDob] = useStoredState('birthDate', '')
  const [targetDate, setTargetDate] = useState(getTodayDateString())

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar className="app-toolbar">
          <IonTitle>Biorhythm Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="page-content">
          {Boolean(dob) &&
            <BiorhythmCard dob={dob} targetDate={targetDate} />
          }

          <IonList>

            <IonItem>
              <IonLabel position="stacked">Birth Date</IonLabel>
              <IonDatetimeButton datetime="dob-datetime"></IonDatetimeButton>
            </IonItem>
            <IonModal keepContentsMounted={true} className="date-picker-modal">
              <IonDatetime
                id="dob-datetime"
                presentation="date"
                value={dob || undefined}
                onIonChange={(e) => setDob(e.detail.value?.split('T')[0] ?? '')}
              ></IonDatetime>
            </IonModal>

            <IonItem>
              <IonLabel position="stacked">Target Date</IonLabel>
              <IonDatetimeButton datetime="target-datetime"></IonDatetimeButton>
            </IonItem>
            <IonModal keepContentsMounted={true} className="date-picker-modal">
              <IonDatetime
                id="target-datetime"
                presentation="date"
                value={targetDate}
                onIonChange={(e) => setTargetDate(e.detail.value?.split('T')[0] ?? getTodayDateString())}
              ></IonDatetime>
            </IonModal>

          </IonList>
        </div>
      </IonContent>
    </IonApp>
  )
}

export default App
