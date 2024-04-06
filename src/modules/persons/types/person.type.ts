export type TPerson = {
    id?: number;
    documentNumber: string;
    documentType: string;
    firstName: string | null;
    middleName?: string | null;
    lastName: string;
    secondLastName?: string | null;
    birthDate: Date;
    birthCountry: string;
    gender: string;
    maritalStatus: string;
};