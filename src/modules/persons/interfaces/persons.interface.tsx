import { Stack } from "@mui/material";
import { Input } from "../../../shared/components/input.component";
import { Title } from "../../../shared/components/title.component";
import { Button } from "../../../shared/components/button.component";
import { IoSearch } from "react-icons/io5";
import { PersonForm } from "../components/person-form.component";
import { usePersonsHook } from "../hooks/use-persons.hook";

type PersonsInterfaceProps = {
    controller: ReturnType<typeof usePersonsHook>;
}

export function PersonsInterface({ controller }: PersonsInterfaceProps) {
    return (
        <div>
            <Title title="Información" />
            <Stack direction={{
                xs: 'column',
                sm: 'row'

            }} width='full' gap={2}>
                <Input label="Tipo de documento" />
                <Input label="Numero del documento" />
                <Button variant="contained" color="primary" endIcon={<IoSearch />}>Buscar</Button>
                <Button variant="outlined" color="primary" endIcon={<IoSearch />}>Pesquisa Avanzada</Button>
            </Stack>
            <Title title="Resultados" />
            <PersonForm onSubmit={controller.action.createPerson} />
        </div>
    );
}