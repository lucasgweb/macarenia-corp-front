import { ModalSearchPerson } from "../components/modal-search-person.component";
import { PersonsInterface } from "../interfaces/persons.interface";

export function PersonsContainer() {
    return <>
        <PersonsInterface />
        <ModalSearchPerson />
    </>
}