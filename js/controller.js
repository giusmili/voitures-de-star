    //async for API https://picsum.photos
    /* https://picsum.photos/v2/list?page=2&limit=500 */

class ControllerCar{
        
    loadContent = async () => {
            console.log("loaded")
            
            const results = await fetch("./api/data.json",{
            cache: 'no-cache'
              })
          
              const data = await results.json()
              const parent = document.querySelector("section")
              const el = document.createElement("ul")
              const addElement = parent.appendChild(el)
              console.table(el)
          
              /* itération pour l'affichage des noms */
              
            for(let index of data){
                  console.log(`${index.marque} ${index.annee}`)
                  addElement.innerHTML+= `<li><strong>Marque</strong> : ${index.marque} 
                                    </li>
                                    <li><strong>Année</strong> : ${index.annee}</li>
                                    <li><strong>Type</strong> : ${index.type}</li>
                                    <li><strong>Etat</strong> : ${index.etat}</li>
                                    <li><strong>Déscription</strong> : ${index.description}</li>
                                    <li><img src="${index.image}" alt=" ${index.marque}"></li>
                                    `
                                    
            }

    
    }
}

export const newControllerCar = new ControllerCar()

  
     