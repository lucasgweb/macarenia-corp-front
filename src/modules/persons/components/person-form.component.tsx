import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { Button } from "../../../shared/components/button.component";
import { DatePicker } from "@mui/x-date-pickers";
import { IoSaveOutline, IoCloseOutline } from "react-icons/io5";
import { FaEraser } from "react-icons/fa6";
import { TPerson } from "../types/person.type";
import { Controller, UseFormReturn } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import { TPersonFormData } from "../types/person-form-data.type";
import { DOCUMENT_TYPES } from "../constants/documents-types.constant";


type PersonFormProps = {
    onSubmit: (data: TPerson) => void;
    form: UseFormReturn<TPersonFormData>;
    type: 'create' | 'edit';
    onClear: () => void;
}


export function PersonForm({ onSubmit, form, type, onClear }: PersonFormProps) {

    function handleSubmit(data: TPersonFormData) {
        onSubmit({
            id: data.id,
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
            <form onSubmit={form.handleSubmit(handleSubmit)}>

                <TextField sx={{
                    display: 'none'

                }} {...form.register('id')} />


                <Stack direction={{
                    xs: 'column',
                    sm: 'row'
                }} spacing={3} mb={2}>


                    <FormControl fullWidth>
                        <Controller render={({ field: { value, onChange } }) => (
                            <>
                                <InputLabel size="small">Tipo de Documento</InputLabel>
                                <Select
                                    disabled={type === 'edit' ? true : false}
                                    size="small"
                                    {...{ value, onChange }}
                                    label="Tipo de Documento"
                                >
                                    {DOCUMENT_TYPES.map((documentType) => (
                                        <MenuItem key={documentType.value} value={documentType.value}>{documentType.label}</MenuItem>
                                    ))}
                                </Select>
                            </>
                        )} name="documentType" control={form.control} />

                    </FormControl>
                    <FormControl fullWidth>
                        <Controller render={({ field }) => (
                            <TextField  {...field} label="Numero del documento" disabled={type === 'edit' ? true : false} fullWidth size="small" value={field.value} InputLabelProps={{ shrink: !!field.value }}
                            />
                        )} name="documentNumber" control={form.control} />
                    </FormControl>
                </Stack>
                <Stack direction={{
                    xs: 'column',
                    sm: 'row'
                }} spacing={2} mb={2} >
                    <FormControl fullWidth>
                        <Controller render={({ field }) => (
                            <TextField {...field} label="Primer Nombre" fullWidth size="small" value={field.value} InputLabelProps={{ shrink: !!field.value }} />
                        )} name="firstName" control={form.control} />
                    </FormControl>
                    <FormControl fullWidth>
                        <Controller render={({ field }) => (
                            <TextField {...field} label="Segundo Nombre" fullWidth size="small" value={field.value} InputLabelProps={{ shrink: !!field.value }} />
                        )} name="middleName" control={form.control} />
                    </FormControl>
                </Stack>
                <Stack direction={{
                    xs: 'column',
                    sm: 'row'
                }} spacing={2} mb={2}>
                    <FormControl fullWidth>
                        <Controller render={({ field }) => (
                            <TextField {...field} label="Primer Apellido" fullWidth size="small" value={field.value} InputLabelProps={{ shrink: !!field.value }} />
                        )} name="lastName" control={form.control} />
                    </FormControl>
                    <FormControl fullWidth>
                        <Controller render={({ field }) => (
                            <TextField {...field} label="Segundo Apellido" fullWidth size="small" value={field.value} InputLabelProps={{ shrink: !!field.value }} />
                        )} name="secondLastName" control={form.control} />
                    </FormControl>
                </Stack>
                <Stack direction={{
                    xs: 'column',
                    sm: 'row'
                }} spacing={2} mb={2}>
                    <FormControl fullWidth>
                        <Controller render={({ field }) => (
                            <DatePicker
                                {...field}
                                slotProps={{ textField: { size: 'small', fullWidth: true } }}
                                label="Fecha Nacimiento"
                                onChange={(value: Dayjs | null) => {
                                    return form.setValue('birthDate', value?.toDate() ?? null);
                                }}
                                value={field.value ? dayjs(field.value) : null}
                            />
                        )} name="birthDate" control={form.control} />
                    </FormControl>
                    <FormControl fullWidth>
                        <Controller render={({ field }) => (
                            <TextField {...field} label="País de Nacimiento" fullWidth size="small" value={field.value} InputLabelProps={{ shrink: !!field.value }} />
                        )} name="birthCountry" control={form.control} />
                    </FormControl>
                </Stack>
                <Stack direction={{
                    xs: 'column',
                    sm: 'row'
                }} spacing={2} mb={2} >
                    <FormControl fullWidth>
                        <Controller render={({ field }) => (
                            <>
                                <InputLabel size="small">Genero</InputLabel>
                                <Select
                                    size="small"
                                    {...field}
                                    defaultValue={field.value}
                                    label="Genero"
                                >
                                    <MenuItem value='M'>Masculino</MenuItem>
                                    <MenuItem value='F'>Femenino</MenuItem>
                                    <MenuItem value='O'>Otro</MenuItem>
                                </Select>
                            </>
                        )} name="gender" control={form.control} />
                    </FormControl>

                    <FormControl fullWidth>
                        <Controller render={({ field }) => (
                            <TextField {...field} label="Estado Civil" fullWidth size="small" value={field.value} InputLabelProps={{ shrink: !!field.value }} />
                        )} name="maritalStatus" control={form.control} />
                    </FormControl>
                </Stack>
                <Stack direction='row' spacing={2} mt={2} flex={1} justifyContent='flex-end'>

                    <Button variant="outlined" color="info" endIcon={<FaEraser />} onClick={onClear}>Limpiar</Button>
                    <Button variant="contained" color="primary" type="submit" endIcon={<IoSaveOutline />}>Guardar</Button>
                    <Button variant="contained" color="error" endIcon={<IoCloseOutline />} onClick={onClear}>Cancelar</Button>
                </Stack>
            </form >
        </Stack >
    );
}