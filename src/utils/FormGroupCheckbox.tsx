import { Field } from "formik";

export default function FormGroupCheckbox(props: formGroupCheckboxProps)
{
    return(
        <div className="form-group form-check">
            <Field className="form-check-input" id={props.campo} name={props.campo} type="checkbox"/>
            <label htmlFor={props.campo}>{props.label}</label>
        </div>
    )
}

interface formGroupCheckboxProps{
    label: string;
    campo: string;
}