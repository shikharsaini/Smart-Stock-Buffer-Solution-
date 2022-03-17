const FIREBASE_DOMAIN =
  // "https://react-router-42a29-default-rtdb.firebaseio.com/";
  "https://sih-team-elite-7f7cd-default-rtdb.firebaseio.com/";

  export async function getHumidityData(){
    const response = await fetch(`${FIREBASE_DOMAIN}.json`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Could not fetch data.");
    }
    const Dict = [];
    for (const key in data) {
    const Obj = {
        id: key,
        ...data[key],
    };
    Dict.push(Obj);
    }
    console.log(data);
    console.log(Dict[0].Humidity);
    return Dict[0].Humidity;
  }


  export async function getTempData(){
    const response = await fetch(`${FIREBASE_DOMAIN}.json`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Could not fetch data.");
    }
    const Dict = [];
    for (const key in data) {
    const Obj = {
        id: key,
        ...data[key],
    };
    Dict.push(Obj);
    }
    console.log(data);
    console.log(Dict[0].Temperature);
    return Dict[0].Temperature;
  }



  export async function getData(){
    const response = await fetch(`${FIREBASE_DOMAIN}.json`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Could not fetch data.");
    }
    const transformedNames = [];
    console.log(data)
    console.log("Check: ")
    console.log(data.Humidity);
    console.log("Check over")
    return data;
  }