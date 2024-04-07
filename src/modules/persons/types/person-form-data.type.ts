
export type TPersonFormData = {
    id?: number;
    documentNumber: string;
    documentType: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    secondLastName?: string;
    birthDate: Date | null;
    birthCountry: string;
    gender: string;
    maritalStatus: string;
}