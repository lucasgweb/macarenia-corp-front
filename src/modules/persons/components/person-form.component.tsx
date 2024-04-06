import { FormControl, Stack, TextField } from "@mui/material";
import { Input } from "../../../shared/components/input.component";
import { Button } from "../../../shared/components/button.component";
import { DatePicker } from "@mui/x-date-pickers";
import { IoSaveOutline, IoCloseOutline } from "react-icons/io5";
import { FaEraser } from "react-icons/fa6";
import { TPerson } from "../types/person.type";
import { useForm } from "react-hook-form";
import { Dayjs } from "dayjs";

type TPersonFormData = {
    documentNumber: string;
    documentType: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    secondLastName?: string;
    birthDate: Date | null;
    birthCountry: string;
    gender: string;
    maritalStatus: string;
}

type PersonFormProps = {
    onSubmit: (data: TPerson) => void;
}


export function PersonForm({ onSubmit }: PersonFormProps) {
    const form = useForm<TPersonFormData>()

    function handleSubmit(data: TPersonFormData) {
        onSubmit({
            documentNumber: data.documentNumber,
            documentType: data.documentType,
            firstName: data.firstName,
            middleName: data.middleName,
            lastName: data.lastName,
            secondLastName: data.secondLastName,
            birthDate: data.birthDate,
            birthCountry: data.birthCountry,
            gender: data.gender,
            maritalStatus: data.maritalStatus
        });
    }
    return (
        <Stack spacing={2}>
            <form {...form} onSubmit={form.handleSubmit(handleSubmit)}>
                <Stack direction={{
                    xs: 'column',
                    sm: 'row'
                }} spacing={2} >
                    <FormControl fullWidth>
                        <TextField {...form.register('firstName')} label="Primer Nombre" fullWidth size="small" />
                        <p>{form.formState.errors?.firstName?.message}</p>
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField {...form.register('secondLastName')} label="Segundo Nombre" fullWidth size="small" />
                        <p>{form.formState.errors?.secondLastName?.message}</p>
                    </FormControl>
                </Stack>
                <Stack direction={{
                    xs: 'column',
                    sm: 'row'
                }} spacing={2} >
                    <FormControl fullWidth>
                        <TextField {...form.register('lastName')} label="Primer Apellido" fullWidth size="small" />
                        <p>{form.formState.errors?.lastName?.message}</p>
                    </FormControl>

                    <TextField {...form.register('secondLastName')} label="Segundo Apellido" fullWidth size="small" />
                </Stack>
                <Stack direction={{
                    xs: 'column',
                    sm: 'row'
                }} spacing={2} >
                    <DatePicker
                        {...form.register('birthDate')}
                        slotProps={{ textField: { size: 'small', fullWidth: true } }}
                        label="Fecha Nacimiento"
                        onChange={(value: Dayjs | null) => {
                            return form.setValue('birthDate', value?.toDate() ?? null);
                        }}
                    />
                    <FormControl fullWidth>
                        <TextField {...form.register('birthCountry')} label="País de Nacimiento" fullWidth size="small" />
                        <p>{form.formState.errors?.birthCountry?.message}</p>
                    </FormControl>
                </Stack>
                <Stack direction={{
                    xs: 'column',
                    sm: 'row'
                }} spacing={2} >
                    <FormControl fullWidth>
                        <TextField {...form.register('gender')} label="Genero" fullWidth size="small" />
                        <p>{form.formState.errors?.gender?.message}</p>
                    </FormControl>

                    <FormControl fullWidth>
                        <TextField {...form.register('maritalStatus')} label="Estado Civil" fullWidth size="small" />
                        <p>{form.formState.errors?.maritalStatus?.message}</p>
                    </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>

                    <Button variant="outlined" color="info" endIcon={<FaEraser />}>Limpiar</Button>
                    <Button variant="contained" color="primary" type="submit" endIcon={<IoSaveOutline />}>Guardar</Button>
                    <Button variant="contained" color="error" endIcon={<IoCloseOutline />}>Cancelar</Button>
                </Stack>
            </form>
        </Stack>
    );
}