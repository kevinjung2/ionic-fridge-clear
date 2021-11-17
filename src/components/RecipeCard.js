import React from 'react';
import {IonCard, IonCardContent, IonButton} from '@ionic/react'

const RecipeCard = props => {
  return(
    <IonCard>
      <IonCardContent>
        <h2>{props.name}</h2>
        <IonButton fill="outline" href={props.link} target="_blank">See Recipe</IonButton>
      </IonCardContent>
    </IonCard>
  )
}

export default RecipeCard
