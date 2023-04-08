import { useState } from "react"
import { useEffect } from "react"
import {Form} from "react-bootstrap"
const nuvoloso = []
const url ='http://api.openweathermap.org/geo/1.0/direct?q='
const url2 ="&appid=f780c73ae254ce52f8c488fc1ac62178&lang=it"
const lon =[]
const lati =[]
const country =[]
const citi =[]
const meteo =[]
console.log(meteo)
const HomePage=()=>{
const [query, setquery]= useState("")
const [city, setcity] = useState([])
const [longitudine, setlongitudine] = useState([])
const [latitudine, setlatitudine] = useState([])
const [countries, setcountries] = useState([])

const url1 = "https://api.openweathermap.org/data/2.5/weather?lat="
const latitudinenew = latitudine.slice(0,1)+"&lon="
const longitudinenew = longitudine.slice(0,1)
const url3="&appid=f780c73ae254ce52f8c488fc1ac62178"

const [citta, setcitta] = useState([])






const [cities, setcities] = useState([])
const handlechange = (e)=>{
    setquery(e.target.value)
}
const handlesubmit = async (e)=>{
    e.preventDefault()
    getcity()
    meteo.push(citta)

}

useEffect(()=>{
    setlongitudine(lon)
    setlatitudine(lati)
    setcountries(country)
    setcities(citi)
    setcitta(meteo)
    
},[])


useEffect(() => {
    getcordinates()
   
  }, [query])
  

  
  const getcordinates = async (props) => {
    try {
      let resp = await fetch(
url+query+url2
        )
      if (resp.ok) {
        let cityfound = await resp.json()
setcity(cityfound)


        console.log("guarda",city)
      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error)
    }
  }
  


  const getcity = async (a) => {
    try {
      let response = await fetch(
       url1+latitudinenew+longitudinenew+url3
        )
      if (response.ok) {
        let cityfound1 = await response.json()
setcitta(cityfound1)
console.log(cityfound1)

        console.log("guardaquiiiii",citta)
      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error)
    }
  }
  






return(
    <>
    {city.map((item)=>(
       lon.push(item.lon),
       lati.push(item.lat),
       country.push(item.country),
       cities.push(item.name)

    ))}

    



    {console.log("longitudine",meteo)}
   

    <div className="bg-dark Home" >
        <div className="d-flex align-items-baseline">
        <Form onSubmit={handlesubmit}>
            <Form.Control
            className="rounded-5 mt-4 input"
              type="search"
              value={query}
              onChange={handlechange}
              placeholder="type and press Enter"
            />
          </Form>
        </div>
        
<div className="bg-light rounded-5 opacity-25 my-5 centrato">

<h1>{cities.slice(-1)}</h1>
<h2>{longitudine.slice(-1)}</h2>


</div>

    </div>
  
      </>
    
)


}

export default HomePage; 