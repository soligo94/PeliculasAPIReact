import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { urlActores } from "../utils/endpoints";
import { actorCreacionDTO } from "./actores.model";
import FormularioActores from "./FormularioActores";
import MostrarErrores from "../utils/MostrarErrores";
import { convertirActorAFormData } from "../utils/formDataUtils";

export default function CrearActor()
{
    const initialValues: actorCreacionDTO =
    {
        nombre:'',
        fechaNacimiento: undefined
    }
    const [errores, setErrores] = useState<string[]>([]);
    const history = useHistory();

    function isAxiosError(e: Error | AxiosError): boolean {
        return (e as AxiosError).request !== undefined;
    }

    async function crear(actor: actorCreacionDTO){
        try{
            const formData = convertirActorAFormData(actor);
            await axios({
                method: 'post',
                url: urlActores,
                data: formData,
                headers: {'Content-Type': 'multipart/form-data'}
            });
            history.push('/actores');
        }
        catch(error)
        {
            if (error instanceof Error)
            {
                if(isAxiosError(error))
                {
                    let axiosError = error as AxiosError
                    setErrores(axiosError.response?.data);
                }
            }
        }
    }

    return(

        <>
            <h3>Crear actor</h3>
            <MostrarErrores errores={errores} />
            <FormularioActores
                modelo={initialValues}
                onSubmit={async valores => await crear(valores)}
            />
        </>
    )
}