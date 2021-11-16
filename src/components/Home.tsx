import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage } from '@ionic/react';

const Home: React.FC = () => {
  return(
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Fridge Clear</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>Hello World</h2>
      </IonContent>
    </IonPage>
  )
}

export default Home
