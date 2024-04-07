import { api } from "../../../shared/libs/axios";
import { TPerson } from "../types/person.type";

export function updatePersonService(person: TPerson) {
    return api.put(`/persons/${person.id}`, person);
}