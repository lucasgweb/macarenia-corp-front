
import { Routes, Route, Outlet } from "react-router-dom";
import { PersonsContainer } from "../../modules/persons/container/persons.container";
import { Container } from "@mui/material";


export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<PersonsContainer />} />
            </Route>
        </Routes>
    );
}

function Layout() {
    return (
        <Container>
            <Outlet />
        </Container>
    );
}