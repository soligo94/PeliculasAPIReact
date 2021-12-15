import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { generoDTO } from "./generos.model";
import { urlGeneros } from "../utils/endpoints";
import ListadoGenerico from "../utils/ListadoGenerico";
import Button from "../utils/Button";
import Paginacion from "../utils/Paginacion";

export default function IndiceGeneros()
{
    const [generos, setGeneros] = useState<generoDTO[]>();
    const [totalDePaginas, setTotalDePaginas] = useState(0);
    const [recordsPorPagina, setRecordsPorPagina] = useState(5);
    const [pagina, setPagina] = useState(1);
    useEffect(() => 
    {
        axios.get(urlGeneros, {
            params: {pagina, recordsPorPagina}
        })
        .then((respuesta: AxiosResponse<generoDTO[]>) =>
        {
            const totalDeRegistros = parseInt(respuesta.headers['cantidadtotalregistros'], 10);
            setTotalDePaginas(Math.ceil(totalDeRegistros/recordsPorPagina));

            console.log(respuesta.data);
            setGeneros(respuesta.data);
        })
    }, [pagina, recordsPorPagina])

    return(
        <>
            <h3>Géneros</h3>
            <Link className="btn btn-primary" to="generos/crear">Crear Género</Link>
            <Paginacion cantidadTotalDePaginas={totalDePaginas} paginaActual= {pagina} onChange={nuevaPagina => setPagina(nuevaPagina)} /> 
            <ListadoGenerico listado={generos}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generos?.map(genero => 
                        <tr key={genero.id}>
                            <td>
                                <Link className="btn btn-success" to={`/generos${genero.id}`}>
                                    Editar
                                </Link>
                                <Button className="btn btn-danger">Borrar</Button>
                            </td>
                            <td>
                                {genero.nombre}
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </ListadoGenerico>
        </>
    )
}