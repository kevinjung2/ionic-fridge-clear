import React, { useRef, useState } from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonGrid, IonRow, IonCol, IonItem, IonButton, IonLabel, IonInput } from '@ionic/react';

const Home = () => {
  const ingOne = useRef(null);
  const ingTwo = useRef(null);
  const ingThree = useRef(null);
  const ingFour = useRef(null);
  const ingFive = useRef(null);

  const [currentRecipes, setCurrentRecipes] = useState([])

  // const handleAddIngredient = () => {
  //   if (ingredientNumber < 5) {
  //     setIngredientNumber(ingredientNumber + 1)
  //   }
  // }
  //
  // const handleRemoveIngredient = () => {
  //   if (ingredientNumber > 1) {
  //     setIngredientNumber(ingredientNumber - 1)
  //   }
  // }

  const createRecipeList = object => {
    const ids = object.map(recipe => recipe.id)
    const recipeList = []

    for (const id in ids) {
      fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=7ab46aa5f86d43f2addd9e5da1e6a23d&includeNutrition=false`)
      .then(resp => resp.json)
      .then(jsob => recipeList.push({name: jsob.title, link: jsob.sourceUrl}))
    }
    setCurrentRecipes(recipeList)
  }

  const handleSubmit = () => {
    let temp = []
    ingOne.current.value != "" && temp.push(ingOne.current.value)
    ingTwo.current.value != "" && temp.push(ingTwo.current.value)
    ingThree.current.value != "" && temp.push(ingThree.current.value)
    ingFour.current.value != "" && temp.push(ingFour.current.value)
    ingFive.current.value != "" && temp.push(ingFive.current.value)
    const urlString = temp.join(",+")

    let url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=7ab46aa5f86d43f2addd9e5da1e6a23d&ingredients=${urlString}&number=10&ranking=1`
    fetch(url)
    .then(resp => resp.json())
    .then(jsob => createRecipeList(jsob))
  }

  return(
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Fridge Clear</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonItem>
              <IonLabel position="floating">Ingredient One</IonLabel>
              <IonInput ref={ingOne}></IonInput>
            </IonItem>
          </IonRow>
          <IonRow>
            <IonItem>
              <IonLabel position="floating">Ingredient Two</IonLabel>
              <IonInput ref={ingTwo}></IonInput>
            </IonItem>
          </IonRow>
          <IonRow>
            <IonItem>
              <IonLabel position="floating">Ingredient Three</IonLabel>
              <IonInput ref={ingThree}></IonInput>
            </IonItem>
          </IonRow>
          <IonRow>
            <IonItem>
              <IonLabel position="floating">Ingredient Four</IonLabel>
              <IonInput ref={ingFour}></IonInput>
            </IonItem>
          </IonRow>
          <IonRow>
            <IonItem>
              <IonLabel position="floating">Ingredient Five</IonLabel>
              <IonInput ref={ingFive}></IonInput>
            </IonItem>
          </IonRow>
          {/*This makes an array with ingredientNumber elements and maps them into inputs so the number of inputs can easily be changed with the buttons*/}
          {/*[...Array(ingredientNumber).keys()].map((ingredient, ind) => <IngredientInput handleChange={handleChange} number={ind + 1}/>)*/}
          <IonRow>
            {/*<IonCol className="ion-text-right">
              <IonButton onClick={handleAddIngredient} >More Ingredients</IonButton>
            </IonCol>
            <IonCol className="ion-text-center">
              <IonButton onClick={handleRemoveIngredient}>Less Ingredients</IonButton>
            </IonCol>*/}
            <IonCol className="ion-text-left">
              <IonButton onClick={handleSubmit}>Find Recipies</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Home
