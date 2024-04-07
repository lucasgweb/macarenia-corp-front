import { useEffect, useState } from "react";
import { searchPersonsService } from "../services/search-person.service";
import { TPerson } from "../types/person.type";
import Swal from "sweetalert2";

export function useModalSearchHook() {
    const [filterText, setFilterText] = useState('');
    const [persons, setPersons] = useState([] as TPerson[]);

    const submitSearch = async (filterText: string) => {
        const response = await searchPersonsService({ filterText });

        if (response) {
            setPersons(response.data);
        }

        return;
    }

    const handleClearModal = () => {
        setPersons([])
        setFilterText('')
    }

    const handleDelete = (id: number) => {


        Swal.fire({
            title: '¿Estás seguro de que deseas borrar esta persona?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, borrar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                const newPersons = persons.filter(person => person.id !== id);
                setPersons(newPersons);

                Swal.fire(
                    '¡Borrado!',
                    'La persona ha sido borrada.',
                    'success'
                )
            }
        });

    }

    useEffect(() => {
        const delay = setTimeout(() => {
            submitSearch(filterText);
        }, 500);

        return () => clearTimeout(delay);
    }, [filterText]);


    return {
        state: {
            filterText,
            persons,
        },
        action: {
            setFilterText,
            submitSearch,
            handleDelete,
            handleClearModal
        }
    }
}