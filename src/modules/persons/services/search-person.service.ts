import { api } from "../../../shared/libs/axios";
import { TPerson } from "../types/person.type";

type TQuery = {
    documentNumber?: string;
    documentType?: string;
    filterText?: string;
};

export async function searchPersonsService(payload: TQuery) {
   
    if (payload.documentNumber && payload.documentType) {
        const query = new URLSearchParams({
            ...(payload.documentType && { documentType: payload.documentType }),
            ...(payload.documentNumber && { documentNumber: payload.documentNumber }),
        }).toString();
        return await api.get<TPerson[]>(`/persons?${query}`);
    } else if (payload.filterText) {
        return await api.get<TPerson[]>(`/persons?filterText=${payload.filterText}`);
    }
}