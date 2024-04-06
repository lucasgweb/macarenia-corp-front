
import { createPersonService } from '../services/create-person.service';
import { TPerson } from '../types/person.type';


export function usePersonsHook() {

    const createPerson = async (person: TPerson) => {

        try {
            const response = await createPersonService({ payload: person });
            return response;
        }
        catch (error) {
            console.error(error);
        }
    };

    return {
        createPerson
    };
}