//import { db } from "../firebase";
import { db } from "../fierbase";

export const getDocData = async (Collection, Doc) => {
    try {
      var data = await db.collection('Senates').doc('TechSenate').collection(Collection).doc(Doc).get();
      return data.data();
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getData = async (Collection) => {
    try {
      var data = await db.collection(Collection).get();
      var Data = [];
      data.forEach((element) => {
        Data.push(element.data());
      });
      return Data;
    } catch (error) {
      console.log(error);
    }
  };