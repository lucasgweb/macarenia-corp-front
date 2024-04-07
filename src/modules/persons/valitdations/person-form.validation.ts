import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const personFormSchema = z.object({
  id: z.coerce.number().optional(),
  documentNumber: z.string().min(1, { message: "El número de documento es obligatorio" }),
  documentType: z.string().min(1, { message: "El tipo de documento es obligatorio" }),
  firstName: z.string().min(1, { message: "El primer nombre es obligatorio" }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: "El apellido es obligatorio" }),
  secondLastName: z.string().optional(),
  birthDate: z.date({
    required_error: "La fecha de nacimiento es obligatoria",
  }),
  birthCountry: z.string().min(1, { message: "El país de nacimiento es obligatorio" }),
  gender: z.string().min(1, { message: "El género es obligatorio" }),
  maritalStatus: z.string().min(1, { message: "El estado civil es obligatorio" }),
});

export type TPersonFormData = z.infer<typeof personFormSchema>;

export const personFormResolver = zodResolver(personFormSchema);
