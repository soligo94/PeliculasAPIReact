import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { urlGeneros } from "../utils/endpoints";
import MostrarErrores from "../utils/MostrarErrores";
import FormularioGeneros from "./FormularioGeneros";
import { generoCreacionDTO } from "./generos.model";

export default function CrearGenero()
{
    const history = useHistory();
    const [errores, setErrors] = useState<string[]>([]);

    function isAxiosError(e: Error | AxiosError): boolean {
        return (e as AxiosError).request !== undefined;
    }

    async function crear(genero: generoCreacionDTO)
    {
        try{
            await axios.post(urlGeneros, genero);
            history.push('/generos');
        }
        catch (error)
        {
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
            <h3>Crear Género</h3>
            <MostrarErrores errores={errores} />
            <FormularioGeneros modelo={{nombre:''}} 
                onSubmit={async values => { 
                  await crear(values);  
            }}/>
         
        </>
    )
}