import EditarEntidad from "../utils/EditarEntidad";
import { urlActores } from "../utils/endpoints";
import { convertirActorAFormData } from "../utils/formDataUtils";
import { actorCreacionDTO, actorDTO } from "./actores.model";
import FormularioActores from "./FormularioActores";

export default function EditarActor()
{
    const transformar = (actor: actorDTO) =>
    {
        return{
            nombre: actor.nombre,
            fotoURL: actor.foto,
            biografia: actor.biografia,
            fechaNacimiento: new Date(actor.fechaNacimiento)
        }
    }
    return(
        <>
            <EditarEntidad<actorCreacionDTO, actorDTO>
                url={urlActores}
                urlIndice="/actores"
                nombreEntidad="Actores"
                transformarFormData={convertirActorAFormData}
                transformar={transformar}
                >
                {(entidad, editar) => <FormularioActores modelo={entidad}
                     onSubmit={async values => { 
                        await editar(values);
                        }}/>}
            </EditarEntidad>
        </>
    )
}