import EditarEntidad from "../utils/EditarEntidad";
import { urlCines } from "../utils/endpoints";
import { cineCreacionDTO, cineDTO } from "./cines.model";
import FormularioCines from "./FormularioCines";

export default function EditarCine()
{
    return(
        <>
            <EditarEntidad<cineCreacionDTO, cineDTO>
                url={urlCines}
                urlIndice="/cines"
                nombreEntidad="Cines">
                {(entidad, editar) => <FormularioCines modelo={entidad}
                     onSubmit={async values => { 
                        await editar(values);
                        }}/>}
            </EditarEntidad>
        </>
    )
}