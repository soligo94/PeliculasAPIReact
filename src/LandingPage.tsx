import { useState, useEffect } from "react"
import ListadoPeliculas from "./peliculas/ListadoPeliculas"
import { landingPageDTO } from "./peliculas/peliculas.model"

export default function LandingPage()
{

    const [peliculas, setPeliculas] = useState<landingPageDTO>({})

    useEffect(() =>{
        const timerId = setTimeout(()=>
        {
            setPeliculas({
            
            enCartelera:[
            {
                id:1, titulo:'Spider-man', 
                poster:'https://i2.wp.com/omglobalnews.com/wp-content/uploads/2019/01/spider-man-far-from-home-poster-1153868_yqdt.jpg?fit=809%2C1199&ssl=1'
            },
            {
                id:2, titulo:'Moana', 
                poster:'https://kbimages1-a.akamaihd.net/b139f6bd-5c8f-4670-a63f-fe815530bcaf/1200/1200/False/moana-spanish-edition.jpg'
            }
            ],
            proximosEstrenos:[
            {
            id:3, titulo:'Soul', 
            poster:'https://lumiere-a.akamaihd.net/v1/images/image_5e27f8d3.jpeg?region=0,0,648,972'
            }]
        })
        }, 1000) 

        return () => clearTimeout(timerId);
    })

    return(
        <>
            <h3>En cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCartelera}/>

            <h3>Próximos estrenos</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos}/>
        </>
    )
}