import axios, { AxiosResponse, AxiosError } from "axios";
import { useState, useEffect } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { useParams, useHistory } from "react-router-dom";
import Cargando from "./Cargando";
import MostrarErrores from "./MostrarErrores";

export default function EditarEntidad<TCreacion, TLectura>(props: editarEntidadProps<TCreacion, TLectura>)
{
    const {id}: any = useParams();
    const [entidad, setEntidad] = useState<TCreacion>();
    const [errores, setErrores] = useState<string[]>([]);
    const history = useHistory();

    useEffect(() => 
    {
        axios.get(`${props.url}/${id}`)
        .then((respuesta: AxiosResponse<TLectura>) =>{
            setEntidad(props.transformar(respuesta.data));
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function isAxiosError(e: Error | AxiosError): boolean {
        return (e as AxiosError).request !== undefined;
    }
    
    async function editar(entidadEditar: TCreacion){
        try
        {
            if(props.transformarFormData)
            {
                const formData = props.transformarFormData(entidadEditar);
                await axios({
                    method: 'put',
                    url: `${props.url}/${id}`,
                    data: formData,
                    headers: {'Content-Type': 'multipart/form-data'}
                });
                history.push('/actores');

            }
            else
            {
                await axios.put(`${props.url}/${id}`, entidadEditar);
            } 
            
            history.push(props.urlIndice);
        }
        catch(error)
        {
            if (error instanceof Error)
            {
                if(isAxiosError(error))
                {
                    let axiosError = error as AxiosError
                    console.log(axiosError.response?.data);
                    /*setErrores(axiosError.response?.data);*/
                }
            }
        }
    }

    return(

        <>                
            <h3>Editar {props.nombreEntidad}</h3>
            <MostrarErrores errores={errores} />
            {entidad ? props.children(entidad, editar): <Cargando />}
        </>
    )
}

interface editarEntidadProps<TCreacion, TLectura>{
    url: string;
    urlIndice: string;
    nombreEntidad: string;
    children(modelo: TCreacion, editar: (entidad:TCreacion) => void): ReactElement;
    transformar(entidad: TLectura) : TCreacion;
    transformarFormData?(modelo: TCreacion): FormData;
}

EditarEntidad.defaultProps ={
    transformar: (entidad: any) => entidad
}