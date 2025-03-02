import { signUpFormIds } from './../constants/auth';

export type SignUpFormValues = Record<(typeof signUpFormIds)[number], string>;
