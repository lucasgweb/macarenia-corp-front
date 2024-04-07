import { api } from "../../../shared/libs/axios";

export function deletePersonService(id: number) {
    return api.delete(`/persons/${id}`);
}