import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios, { AxiosError, AxiosResponse } from "axios";
import { generoDTO } from "./generos.model";
import { urlGeneros } from "../utils/endpoints";
import ListadoGenerico from "../utils/ListadoGenerico";
import Button from "../utils/Button";
import Paginacion from "../utils/Paginacion";
import confirmar from "../utils/Confirmar";
import IndiceEntidad from "../utils/IndiceEntidad";

export default function IndiceGeneros()
{
  

    return(
        <>
            <IndiceEntidad<generoDTO>
                url={urlGeneros} urlCreacion="generos/crear" 
                titulo="Géneros"
                nombreEntidad="Géneros" >
                    {(generos, botones) => <>
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
                                    {botones(`generos/editar/${genero.id}`, genero.id)}
                                </td>
                                <td>
                                    {genero.nombre}
                                </td>
                            </tr>)}
                        </tbody>
                    </>}

            </IndiceEntidad>
        </>
    )
}