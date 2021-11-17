import React from 'react';
import {IonRow, IonCol} from '@ionic/react'

import RecipeCard from './RecipeCard'

const Cards = props => {
  return(
    <>
      <IonRow>
        <IonCol>
          <RecipeCard name={props.currentRecipes[0].name} link={props.currentRecipes[0].link}/>
        </IonCol>
        <IonCol>
          <RecipeCard name={props.currentRecipes[1].name} link={props.currentRecipes[1].link}/>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <RecipeCard name={props.currentRecipes[2].name} link={props.currentRecipes[2].link}/>
        </IonCol>
        <IonCol>
          <RecipeCard name={props.currentRecipes[3].name} link={props.currentRecipes[3].link}/>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <RecipeCard name={props.currentRecipes[4].name} link={props.currentRecipes[4].link}/>
        </IonCol>
        <IonCol>
          <RecipeCard name={props.currentRecipes[5].name} link={props.currentRecipes[5].link}/>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <RecipeCard name={props.currentRecipes[6].name} link={props.currentRecipes[6].link}/>
        </IonCol>
        <IonCol>
          <RecipeCard name={props.currentRecipes[7].name} link={props.currentRecipes[7].link}/>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <RecipeCard name={props.currentRecipes[8].name} link={props.currentRecipes[8].link}/>
        </IonCol>
        <IonCol>
          <RecipeCard name={props.currentRecipes[9].name} link={props.currentRecipes[9].link}/>
        </IonCol>
      </IonRow>
    </>
  )
}

export default Cards
