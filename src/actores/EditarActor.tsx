import FormularioActores from "./FormularioActores";

export default function EditarActor()
{
    return(
        <>
            <h3>Editar actor</h3>
            <FormularioActores
                modelo={{nombre:'Soligó', fechaNacimiento: new Date('1994-09-01T00:00:00'), fotoURL:'https://media-exp1.licdn.com/dms/image/C5603AQHnQiJQaIB3Yw/profile-displayphoto-shrink_200_200/0/1618994203777?e=1642032000&v=beta&t=ZW2kZcfrCaxdcx6E9a1wuU3G92TWskBKPEJO_yMxaAw'}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}