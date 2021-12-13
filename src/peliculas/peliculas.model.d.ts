import { actorPeliculaDTO } from "../actores/actores.model";

export interface pelicula
{
    id: number;
    titulo: string;
    poster: string;
}

export interface peliculaCreacionDTO{
    titulo: string;
    enCines: boolean;
    trailer: string;
    fechaLanzamiento?: Date;
    poster?: File;
    posterUrl?: string;
    generoIds?: number[];
    cinesIds?: number[];
    actores?: actorPeliculaDTO[];
}

export interface landingPageDTO{
    enCartelera?:pelicula[];
    proximosEstrenos?:pelicula[];
}