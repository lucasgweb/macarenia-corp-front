import { Stack } from "@mui/material";
import { Input } from "../../../shared/components/input.component";
import { Button } from "../../../shared/components/button.component";
import { DatePicker } from "@mui/x-date-pickers";
import { IoSaveOutline, IoCloseOutline } from "react-icons/io5";
import { FaEraser } from "react-icons/fa6";

export function PersonForm() {
    // Aqui você pode adicionar estados e lógicas para manipular os dados do formulário

    return (
        <Stack spacing={2}>
            <Stack direction={{
                xs: 'column',
                sm: 'row'
            }} spacing={2} >
                <Input label="Primer Nombre" fullWidth />
                <Input label="Segundo Nombre" fullWidth />
            </Stack>
            <Stack direction={{
                xs: 'column',
                sm: 'row'
            }} spacing={2} >
                <Input label="Primer Apellido" fullWidth />
                <Input label="Segundo Apellido" fullWidth />
            </Stack>
            <Stack direction={{
                xs: 'column',
                sm: 'row'
            }} spacing={2} >
                <DatePicker
                    slotProps={{ textField: { size: 'small', fullWidth: true } }}
                    label="Fecha Nacimiento" />
                <Input label="País de Nacimiento" fullWidth />
            </Stack>
            <Stack direction={{
                xs: 'column',
                sm: 'row'
            }} spacing={2} >
                <Input label="Genero" fullWidth />
                <Input label="Estado Civil" fullWidth />
            </Stack>
            <Stack direction="row" spacing={2}>

                <Button variant="outlined" color="info" endIcon={<FaEraser />}>Limpiar</Button>
                <Button variant="contained" color="primary" endIcon={<IoSaveOutline />}>Guardar</Button>
                <Button variant="contained" color="error" endIcon={<IoCloseOutline />}>Cancelar</Button>
                {/* Incluir outros botões conforme necessário */}
            </Stack>
        </Stack>
    );
}
