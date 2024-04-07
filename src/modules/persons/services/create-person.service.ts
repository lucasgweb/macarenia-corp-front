import { api } from "../../../shared/libs/axios";
import { TPerson } from "../types/person.type";

type createPersonServiceData = {
    payload: TPerson;
};

export async function createPersonService(data: createPersonServiceData) {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await api.post('/persons', data.payload);
        return response.data;
    } catch (error) {
        throw error;
    }
}