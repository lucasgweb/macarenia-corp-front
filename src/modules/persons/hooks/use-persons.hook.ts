
import { useState } from 'react';
import { createPersonService } from '../services/create-person.service';
import { TPerson } from '../types/person.type';
import {  useForm } from 'react-hook-form';
import { TPersonFormData } from '../types/person-form-data.type';
import { api } from '../../../shared/libs/axios';
import Swal from 'sweetalert2'

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

    const updatePerson = async (data: TPerson) => {
        try {
            await api.put(`/persons/${data.documentNumber}`, data);

            setTypeOperation('create');
        } catch (error) {
            console.error(error);
        }
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
      }).then( async(result: any) => {
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
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setIsLoading(false);
        }
          return true;
        } else if(result.isDenied){
          return false;
        }
      });

    };

    const handleSearch = async () => {
        const query = new URLSearchParams({
            ...(documentType && { documentType }),
            ...(documentNumber && { documentNumber }),
        }).toString();

        try {
            const response = await api.get<TPerson[]>(`/persons?${query}`);

            if (response.data.length === 0) {
                alert('No se encontraron resultados');
                return;
            }

            form.reset({
                firstName: response.data[0].firstName,
                middleName: response.data[0].middleName,
                lastName: response.data[0].lastName,
                secondLastName: response.data[0].secondLastName,
                birthDate: response.data[0].birthDate,
                birthCountry: response.data[0].birthCountry,
                gender: response.data[0].gender,
                maritalStatus: response.data[0].maritalStatus,
                documentType: response.data[0].documentType,
                documentNumber: response.data[0].documentNumber,
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
            setIsOpenModal
        },
        state: {
            isLoading,
            isOpenModal,
        }
    };
}