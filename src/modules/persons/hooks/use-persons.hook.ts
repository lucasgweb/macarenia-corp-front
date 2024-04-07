
import { useState } from 'react';
import { createPersonService } from '../services/create-person.service';
import { TPerson } from '../types/person.type';
import { useForm } from 'react-hook-form';
import { TPersonFormData } from '../types/person-form-data.type';
import { api } from '../../../shared/libs/axios';
import Swal from 'sweetalert2'
import { searchPersonsService } from '../services/search-person.service';

export function usePersonsHook() {

    const [documentType, setDocumentType] = useState('');
    const [documentNumber, setDocumentNumber] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [typeOperation, setTypeOperation] = useState<'create' | 'edit'>('create');

    const form = useForm<TPersonFormData>({
        defaultValues: {
            documentNumber: '',
            documentType: '',
            firstName: '',
            middleName: '',
            lastName: '',
            secondLastName: '',
            birthDate: null,
            birthCountry: '',
            gender: '',
            maritalStatus: '',
        }
    })

    const handleSubmit = (data: TPersonFormData) => {
        if (typeOperation === 'create') {
            createPerson(data);
        }

        if (typeOperation === 'edit') {
            updatePerson(data);
        }
    };

    function clearForm() {

        form.reset({
            documentNumber: '',
            documentType: '',
            firstName: '',
            middleName: '',
            lastName: '',
            secondLastName: '',
            birthDate: null,
            birthCountry: '',
            gender: '',
            maritalStatus: '',
        });

        setTypeOperation('create');
    }

    function handleClearForm() {
         Swal.fire({
            title: '¿Estás seguro de que desea limpiar el formulario?',
            showDenyButton: true,
            confirmButtonText: 'Confirmar',
            denyButtonText: 'Cancelar',
            confirmButtonColor: '#042F4A',
            cancelButtonColor: '#DE1616',
            icon: 'question',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }).then(async (result: any) => {
            if (result.isConfirmed) {
                clearForm();
            }
        });
    }

    const handleSelectToEdit = (person: TPerson) => {
        setTypeOperation('edit');

        form.reset({
            id: person.id ?? undefined,
            firstName: person.firstName,
            middleName: person.middleName,
            lastName: person.lastName,
            secondLastName: person.secondLastName,
            birthDate: person.birthDate,
            birthCountry: person.birthCountry,
            documentNumber: person.documentNumber,
            documentType: person.documentType,
            gender: person.gender,
            maritalStatus: person.maritalStatus
        });

        setIsOpenModal(false)
    }

    const updatePerson = async (data: TPerson) => {

        Swal.fire({
            title: '¿Estás seguro de que desea actualizar este registro?',
            showDenyButton: true,
            confirmButtonText: 'Confirmar',
            denyButtonText: 'Cancelar',
            confirmButtonColor: '#042F4A',
            cancelButtonColor: '#DE1616',
            icon: 'question',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }).then(async (result: any) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                try {
                    await api.put(`/persons/${data.id}`, data);
                } catch (error) {
                    console.error(error);
                }
            }
        });

    }

    const createPerson = async (data: TPerson) => {

        Swal.fire({
            title: '¿Estás seguro de que deseas guardar este registro?',
            showDenyButton: true,
            confirmButtonText: 'Confirmar',
            denyButtonText: 'Cancelar',
            confirmButtonColor: '#042F4A',
            cancelButtonColor: '#DE1616',
            icon: 'question',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }).then(async (result: any) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                try {
                    await createPersonService({
                        payload: {
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
                        }
                    });


                 clearForm();
                }
                catch (error) {
                    console.error(error);
                }
                finally {
                    setIsLoading(false);
                }
                return true;
            } else if (result.isDenied) {
                return false;
            }
        });

    };

    const handleSearch = async () => {

        try {
            const response = await searchPersonsService({
                documentNumber,
                documentType
            });

            if(response?.data.length === 0){
                Swal.fire({
                    title: 'No se encontraron resultados',
                    text: 'No se encontraron registros con los datos ingresados',
                    icon: 'info',
                    confirmButtonColor: '#042F4A',
                });
                return;
            }

            form.reset({
                id: response?.data[0].id ?? undefined,
                firstName: response?.data[0].firstName,
                middleName: response?.data[0].middleName,
                lastName: response?.data[0].lastName,
                secondLastName: response?.data[0].secondLastName,
                birthDate: response?.data[0].birthDate,
                birthCountry: response?.data[0].birthCountry,
                gender: response?.data[0].gender,
                maritalStatus: response?.data[0].maritalStatus,
                documentType: response?.data[0].documentType,
                documentNumber: response?.data[0].documentNumber,
            });

            setTypeOperation('edit');

        } catch (error) {
            console.error('Failed to fetch persons:', error);
        }
    };

    return {
        action: {
            handleSubmit,
            form,
            handleSearch,
            setDocumentType,
            setDocumentNumber,
            setIsOpenModal,
            handleClearForm,
            handleSelectToEdit
        },
        state: {
            isLoading,
            isOpenModal,
            typeOperation
        }
    };
}