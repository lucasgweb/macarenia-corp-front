/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, DialogContent, DialogTitle, TextField, IconButton, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { MdDeleteOutline, MdModeEditOutline } from 'react-icons/md';
import { Title } from '../../../shared/components/title.component';
import { Button } from "../../../shared/components/button.component";
import { usePersonsHook } from "../hooks/use-persons.hook";

type ModalSearchPersonProps = {
    controller: ReturnType<typeof usePersonsHook>;
};

export function ModalSearchPerson({ controller }: ModalSearchPersonProps) {


    const handleSelect = (id: number) => {
        const person = controller.state.persons.find(p => p.id === id);

        if (person) {
            controller.action.handleSelectToEdit(person)
        } else {
            console.log("Person not found");
        }
    }

    const columns = [
        {
            field: 'documentType',
            headerName: 'Tipo documento',
            width: 130,
            flex: 1,
        },
        { field: 'documentNumber', headerName: 'Número documento', width: 130, flex: 1 },
        { field: 'firstName', headerName: 'Primer nombre', width: 130, flex: 1 },
        { field: 'lastName', headerName: 'Primer apellido', width: 130, flex: 1 },
        {
            field: 'action',
            headerName: 'Acción',
            width: 130,
            renderCell: (params: any) => (
                <strong>
                    <IconButton aria-label="edit" onClick={() => handleSelect(params.id)}>
                        <MdModeEditOutline />
                    </IconButton>
                    <IconButton
                        aria-label="delete"
                        onClick={() => controller.action.handleDelete(params.id)}
                    >
                        <MdDeleteOutline />
                    </IconButton>
                </strong>
            ),
        },
    ];

    return (
        <Dialog open={controller.state.isOpenModal} fullWidth maxWidth="lg" onClose={() => controller.action.setIsOpenModal(false)}>
            <DialogTitle><Title title='Búsqueda Avanzada' /></DialogTitle>
            <DialogContent>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Buscar..."
                    margin="normal"
                    value={controller.state.filterText}
                    onChange={(e) => controller.action.setFilterText(e.currentTarget.value)}
                />
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={controller.state.persons}
                        columns={columns}
                    />
                </div>
                <Stack direction='row' spacing={2} mt={2} flex={1} justifyContent='flex-end'>
                    <Button variant="contained" color="primary" onClick={controller.action.handleClearModal}>Limpiar</Button>
                    <Button onClick={() => {
                        controller.action.setIsOpenModal(false)
                        controller.action.handleClearModal()
                    }} variant="contained" color="error">Cancelar</Button>
                </Stack>

            </DialogContent>
        </Dialog>
    );
}
