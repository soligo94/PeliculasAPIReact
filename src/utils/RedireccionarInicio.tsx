import { Redirect } from "react-router";

export default function RedireccionarInicio()
{
    return(
        <Redirect to={{pathname: '/'}} />
    )
}