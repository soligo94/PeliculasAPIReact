import FormularioCines from "./FormularioCines";

export default function EditarCine()
{
    return(
        <>
            <h3>Editar Cine</h3>
            <FormularioCines
                modelo={{nombre:'Flåm', latitud: 60.861902, longitud: 7.113819}}
                onSubmit={valores=> console.log(valores)}/>
        </>
    )
}