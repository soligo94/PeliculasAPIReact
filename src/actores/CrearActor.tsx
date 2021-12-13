import { actorCreacionDTO } from "./actores.model";
import FormularioActores from "./FormularioActores";

export default function CrearActor()
{
    const initialValues: actorCreacionDTO =
    {
        nombre:'',
        fechaNacimiento: undefined
    }

    return(

        <>
            <h3>Crear actor</h3>
            <FormularioActores
                modelo={initialValues}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}