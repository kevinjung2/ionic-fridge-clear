import React, { useState } from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonGrid, IonRow, IonCol, IonItem, IonButton } from '@ionic/react';

import IngredientInput from './IngredientInput'

const Home: React.FC = () => {
  const [ingredientNumber, setIngredientNumber] = useState(3)

  return(
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Fridge Clear</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            {/*This makes an array with ingredientNumber elements and maps them into inputs so the number of inputs can easily be changed with the buttons*/}
            {[...Array(ingredientNumber).keys()].map(ingredient => <IngredientInput />)}
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-right">
              <IonButton>More Ingredients</IonButton>
            </IonCol>
            <IonCol className="ion-text-left">
              <IonButton>Less Ingredients</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Home
