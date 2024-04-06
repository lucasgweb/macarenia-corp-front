
import { useState } from 'react';
import { createPersonService } from '../services/create-person.service';
import { TPerson } from '../types/person.type';

export function usePersonsHook() {


    const [isLoading, setIsLoading] = useState<boolean>(false);


    const createPerson = async (data: TPerson) => {
        setIsLoading(true);
        try {
            const response = await createPersonService({ payload: {
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
            } });
            return response;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setIsLoading(false);
        }
    };

    return {
        action: {
            createPerson,
        },
        state: {
            isLoading,
        }
    };
}