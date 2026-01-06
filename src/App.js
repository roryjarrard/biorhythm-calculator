import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react'

function App() {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>Add some content here…</p>
      </IonContent>
    </IonApp>
  )
}

export default App
