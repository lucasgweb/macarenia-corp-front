import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField } from "@mui/material";
import { Title } from "../../../shared/components/title.component";
import { Button } from "../../../shared/components/button.component";
import { IoSearch } from "react-icons/io5";
import { PersonForm } from "../components/person-form.component";
import { usePersonsHook } from "../hooks/use-persons.hook";
import { DOCUMENT_TYPES } from "../constants/documents-types.constant";

type PersonsInterfaceProps = {
    controller: ReturnType<typeof usePersonsHook>;
}

export function PersonsInterface({ controller }: PersonsInterfaceProps) {
    const handleChange = (event: SelectChangeEvent) => {
        controller.action.setDocumentType(event.target.value);
    };

    return (
        <div>
            <Title title="Información" />
            <Stack direction={{
                xs: 'column',
                sm: 'row'

            }} width='full' gap={2}>
                <FormControl>
                    <InputLabel size="small">Tipo de Documento</InputLabel>
                    <Select
                        sx={{ minWidth: 200 }}
                        size="small"
                        label="Tipo de Documento"
                        onChange={handleChange}

                    >
                        {DOCUMENT_TYPES.map((documentType) => (
                            <MenuItem key={documentType.value} value={documentType.value}>{documentType.label}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl >
                    <TextField size="small" onChange={(e) => controller.action.setDocumentNumber(e.currentTarget.value)} label="Numero del documento" />
                </FormControl>
                <Button onClick={controller.action.handleSearch} variant="contained" color="primary" endIcon={<IoSearch />}>Buscar</Button>
                <Button variant="outlined" color="primary" endIcon={<IoSearch />} onClick={() => controller.action.setIsOpenModal(true)}>Pesquisa Avanzada</Button>
            </Stack>
            <Title title="Información" />
            <PersonForm onSubmit={controller.action.handleSubmit} form={controller.action.form} type={controller.state.typeOperation} onClear={() => controller.action.handleClearForm()} />
        </div>
    );
}