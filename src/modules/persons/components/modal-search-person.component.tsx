import React from 'react';
import { Dialog, DialogContent, DialogTitle, TextField, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { MdDeleteOutline, MdModeEditOutline, MdVisibility } from 'react-icons/md';
import { Title } from '../../../shared/components/title.component';
export function ModalSearchPerson() {
    const rows = [
        { id: 1, documentType: 'CC', documentNumber: '123456789', firstName: 'Juan', firtsLastName: 'Perez' },
        {
            id: 2, documentType: 'CC', documentNumber: '987654321', firstName: 'Pedro', firtsLastName: 'Gomez'
        },
        { id: 3, documentType: 'CC', documentNumber: '123456789', firstName: 'Juan', firtsLastName: 'Perez' },
        { id: 4, documentType: 'CC', documentNumber: '987654321', firstName: 'Pedro', firtsLastName: 'Gomez' },
        { id: 5, documentType: 'CC', documentNumber: '123456789', firstName: 'Juan', firtsLastName: 'Perez' },
        { id: 6, documentType: 'CC', documentNumber: '987654321', firstName: 'Pedro', firtsLastName: 'Gomez' },
    ];

    const columns = [
        { field: 'documentType ', headerName: 'Tipo documento', width: 130, flex: 1 },
        { field: 'documentNumber', headerName: 'Número documento', width: 130, flex: 1 },
        { field: 'firstName', headerName: 'Primer nombre', width: 130, flex: 1 },
        { field: 'firtsLastName', headerName: 'Primer apellido', width: 130, flex: 1 },
        {
            field: 'action',
            headerName: 'Acción',
            width: 130,
            renderCell: () => (
                <strong>
                    {/* Botões de ação, defina os onClick handlers conforme necessário */}
                    <IconButton aria-label="edit">
                        <MdModeEditOutline />
                    </IconButton>
                    <IconButton aria-label="delete">
                        <MdDeleteOutline />
                    </IconButton>
                </strong>
            ),
        },
    ];

    return (
        <Dialog open={true} fullWidth maxWidth="lg">
            <DialogTitle><Title title='Búsqueda Avanzada' /></DialogTitle>
            <DialogContent>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Buscar..."
                    margin="normal"
                />
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}
