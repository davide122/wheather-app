import { useState } from "react"
import { useEffect } from "react"
import {Form} from "react-bootstrap"
import { Link } from "react-router-dom"

const nuvoloso = []
const url ='http://api.openweathermap.org/geo/1.0/direct?q='
const url2 ="&appid=f780c73ae254ce52f8c488fc1ac62178&lang=it"
const lon =[]
const lati =[]
const country =[]
const citi =[]
const meteo =[
]
console.log(meteo)
const HomePage=()=>{
const [query, setquery]= useState("")
const [city, setcity] = useState([])
const [longitudine, setlongitudine] = useState([])
const [latitudine, setlatitudine] = useState([])
const [countries, setcountries] = useState([])

const url1 =  `https://api.openweathermap.org/data/2.5/weather?lat=${latitudine.slice(-1)}&lon=${longitudine.slice(-1)}&appid=f780c73ae254ce52f8c488fc1ac62178&lang=ita `
const latitudinenew = latitudine.slice(0,1)+"&lon="
const longitudinenew = longitudine.slice(0,1)
const url3="&appid=f780c73ae254ce52f8c488fc1ac62178"

const [citta, setcitta] = useState([])
const [next, setnext] = useState([])





const [cities, setcities] = useState([])
const handlechange = (e)=>{
    setquery(e.target.value)
    getnext()
    
   

}
const handlesubmit = async (e)=>{
    e.preventDefault()


    

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
getcity()


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
       url1
        )
      if (response.ok) {
        let cityfound1 = await response.json()
setcitta(cityfound1)
meteo.push(citta)



console.log(cityfound1)

        console.log("guardaquiiiii",citta)
      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error)
    }
  }
  




  const getnext = async () => {
    try {
      let FoundNext = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitudine.slice(-1)}&lon=${longitudine.slice(-1)}&appid=f780c73ae254ce52f8c488fc1ac62178`

        )
      if (FoundNext.ok) {
        let nextfound = await FoundNext.json()
setnext(nextfound)



console.log("nuovo guarda qui",next)

        console.log("guardaquiiiii",nextfound)
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
   

    <div className="w-100" >
        <div className="d-flex align-items-baseline justify-content-center">
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
        

<div className="d-flex justify-content-center">
<h1 className="Nome">{citta.name}</h1>
</div>
<div className="justify-content-center d-flex">
{citta.weather? <img className="ico" src={`https://openweathermap.org/img/w/${citta.weather[0].icon}.png`}/>: null}
</div>



<div className="d-flex justify-content-center flex-column align-items-center">
{citta.weather? <h1 className="Nome s">{citta.weather[0].description}</h1> : null}
  {citta.main? <h1 className="Nome s a">{Math.floor(citta.main.temp - 273.15)}°C</h1> : null}
<div className="d-flex wrap-wrap my-5 border rounded-5 trasparency align-item-center justify-content-center">
 
{citta.wind? <h1 className="Nome me-5"><svg width={60} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"/></svg>{Math.floor(citta.wind.speed*3.6)}km/h</h1>:null}
{citta.main? <h1 className="Nome"><svg width={60} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M269.5 69.9c11.1-7.9 25.9-7.9 37 0C329 85.4 356.5 96 384 96c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 149.7 417 160 384 160c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4C42.8 92.6 61 83.5 75.3 71.6c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 85.2 165.1 96 192 96c27.5 0 55-10.6 77.5-26.1zm37 288C329 373.4 356.5 384 384 384c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 437.7 417 448 384 448c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 373.2 165.1 384 192 384c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0zm0-144C329 229.4 356.5 240 384 240c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 293.7 417 304 384 304c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 229.2 165.1 240 192 240c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"/></svg>{citta.main.humidity}% Umidità</h1> : null}

</div>

</div>




<div className="Nome d-flex trasp mx-5">
<div className="text-center">
<h1 className="Nome text-primary s ">{citta.name}</h1>
{next.list? <img className="" src={`https://openweathermap.org/img/w/${next.list[0].weather[0].icon}.png`}/>: null}
  {next.list? <h1 className="mx-5 s">{next.list[0].dt_txt}</h1>: null}
  {next.list? <h1 className="mx-5">{next.list[0].weather[0].description}</h1>: null}
</div>

<div className="text-center">
<h1 className="Nome text-primary s">{citta.name}</h1>
{next.list? <img className="" src={`https://openweathermap.org/img/w/${next.list[1].weather[0].icon}.png`}/>: null}
  {next.list? <h1 className="mx-5 s">{next.list[1].dt_txt}</h1>: null}
  {next.list? <h1 className="mx-5">{next.list[1].weather[0].description}</h1>: null}
</div>


<div className="text-center">
<h1 className="Nome text-primary s">{citta.name}</h1>
{next.list? <img className="" src={`https://openweathermap.org/img/w/${next.list[2].weather[0].icon}.png`}/>: null}
  {next.list? <h1 className="mx-5 s">{next.list[2].dt_txt}</h1>: null}
  {next.list? <h1 className="mx-5">{next.list[2].weather[0].description}</h1>: null}
</div>


</div>


    </div>


    
  
      </>

)


}

export default HomePage; 