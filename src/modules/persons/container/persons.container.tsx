import { ModalSearchPerson } from "../components/modal-search-person.component";
import { usePersonsHook } from "../hooks/use-persons.hook";
import { PersonsInterface } from "../interfaces/persons.interface";

export function PersonsContainer() {
    const controller = usePersonsHook();
    return <>
        <PersonsInterface controller={controller} />
        <ModalSearchPerson />
    </>
}