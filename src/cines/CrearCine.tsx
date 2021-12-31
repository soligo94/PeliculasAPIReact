import axios, { AxiosError } from "axios";
import { useHistory } from "react-router-dom";
import { urlCines } from "../utils/endpoints";
import { cineCreacionDTO } from "./cines.model";
import FormularioCines from "./FormularioCines";

export default function CrearCine()
{
    const history = useHistory();
    
    function isAxiosError(e: Error | AxiosError): boolean {
        return (e as AxiosError).request !== undefined;
    }

    async function crear(cine: cineCreacionDTO)
    {
        try{
            await axios.post(urlCines, cine);
            history.push('/cines');
        }
        catch(error)
        {
            if (error instanceof Error)
            {
                if(isAxiosError(error))
                {
                    let axiosError = error as AxiosError
                    console.log(axiosError.response?.data);
                }
            }

        }
    }
    return(
        <>
            <h3>Crear Cine</h3>
            <FormularioCines
                modelo={{nombre:''}}
                onSubmit={async valores=> await crear(valores)}/>
        </>
    )
}