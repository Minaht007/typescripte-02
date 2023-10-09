/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/
type Gender = {
  male: "male";
  female: "female"
}


const myGender = (Gender): void =>  {
  console.log(Gender)
} ;

export {};
