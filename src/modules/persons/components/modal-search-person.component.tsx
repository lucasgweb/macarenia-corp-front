import React from 'react';
import { Dialog, DialogContent, DialogTitle, TextField, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { MdDeleteOutline, MdModeEditOutline, MdVisibility } from 'react-icons/md';
import { Title } from '../../../shared/components/title.component';
export function ModalSearchPerson() {
    const rows = [
        // Suponha que esses são seus dados, ajuste conforme necessário
        { id: 1, documentNumber: 'ID-00001', fullName: 'Ray Luna Figueroa', specificFilter: 'Ray tiene hijxs', action: '' },
        // ... outros dados
    ];

    const columns = [
        { field: 'documentNumber', headerName: 'Número documento', width: 130 },
        { field: 'fullName', headerName: 'Nome completo', width: 130 },
        { field: 'specificFilter', headerName: 'Filtro específico', width: 130 },
        {
            field: 'action',
            headerName: 'Ação',
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
                    <IconButton aria-label="view">
                        <MdVisibility />
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
