import axios, {AxiosError, AxiosResponse} from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.model";
import Cargando from "../utils/Cargando";
import { urlPeliculas } from "../utils/endpoints";
import { convertirPeliculaAFormData } from "../utils/formDataUtils";
import MostrarErrores from "../utils/MostrarErrores";
import FormularioPeliculas from "./FormularioPeliculas";
import { peliculaCreacionDTO, peliculasPostGetDTO } from "./peliculas.model";

export default function CrearPelicula()
{
    const [generosNoSeleccionados, setGenerosNoSeleccionados] = useState<generoDTO[]>([]);
    const [cinesNoSeleccionados, setCinesNoSeleccionados] = useState<cineDTO[]>([]);
    const [cargado, setCargado] = useState(false);
    const history = useHistory();
    const [errores, setErrors] = useState<string[]>([]);

    useEffect(() => {
        axios.get(`${urlPeliculas}/postget`)
        .then((respuesta: AxiosResponse<peliculasPostGetDTO>) => {
            setGenerosNoSeleccionados(respuesta.data.generos);
            setCinesNoSeleccionados(respuesta.data.cines);
            setCargado(true);
        })
    }, [])

    function isAxiosError(e: Error | AxiosError): boolean {
        return (e as AxiosError).request !== undefined;
    }
    
    async function crear(pelicula: peliculaCreacionDTO)
    {
        try{

            const formData = convertirPeliculaAFormData(pelicula);
            console.log("entro aqui");
            console.log(pelicula);
            await axios({
                method: 'post',
                url: urlPeliculas,
                data: formData,
                headers: {'Content-Type': 'multipart/form-data'}
            }).then((respuesta: AxiosResponse<number>) => {
                history.push(`/pelicula/${respuesta.data}`);
            });

        }
        catch(error){
            console.log(error);
            if (error instanceof Error)
            {
                if(isAxiosError(error))
                {
                    let axiosError = error as AxiosError
                    setErrors(axiosError.response?.data);
                }
            }

        }
    }

    return(
        <>
            <h3>Crear peliculas</h3>
            <MostrarErrores errores={errores} />
            {cargado ? <FormularioPeliculas
            actoresSeleccionados={[]}
            cinesNoSeleccionados={cinesNoSeleccionados}
            cinesSeleccionados={[]}
            generosNoSeleccionados={generosNoSeleccionados}
            generosSeleccionados={[]}
            modelo={{titulo: '', enCines: false, trailer:''}}
            onSubmit={async valores => 
                { 
                    //await console.log(valores);
                    await crear(valores);
                }}/> : <Cargando />}
        </>
    )
}
