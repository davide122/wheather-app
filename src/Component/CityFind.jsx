import { useState } from "react"
import state from "state"
const url1 = "https://api.openweathermap.org/data/2.5/weather?lat="
const lon = state.longitudine
const lat = state.latitudine
console.log(lon, lat)
const url2="&appid=f780c73ae254ce52f8c488fc1ac62178"

const CityFind = ()=>{
    const getmeteo = async () => {
        try {
          let resp = await fetch(
  url1+lat+lon+url2
            )
          if (resp.ok) {
            let cityfound = await resp.json()
  
    
          } else {
            console.log('error')
          }
        } catch (error) {
          console.log(error)
        }
      }
      

    return(
<h1>ciao</h1>
    )
}

export default CityFind;

