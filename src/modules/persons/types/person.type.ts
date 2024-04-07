export type TPerson = {
    id?: number;
    documentNumber: string;
    documentType: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    secondLastName?: string;
    birthDate: Date;
    birthCountry: string;
    gender: string;
    maritalStatus: string;
};