import { TextFieldProps, TextField } from "@mui/material";

type InputComponentProps = TextFieldProps & {
    label?: string;
    id?: string;
}

export function Input({ label, id, ...rest }: InputComponentProps) {
    return (
        <TextField size="small" {...rest} id={id} label={label} variant="outlined" />
    )
}