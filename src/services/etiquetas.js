import URL from "../../config.js";

const getEtiquetas = async () => {
    
    const data = await fetch(URL+"api/etiquetas/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre }),
    });
    const json = await data.json();
    return json;
  };
  
export { getEtiquetas };