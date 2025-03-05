import { signUpFormIds } from './../constants/auth';

export type SignUpFormIds = (typeof signUpFormIds)[number];

export type SignUpFormData = {
  [K in SignUpFormIds]: K extends 'profileImage' ? File | null : string;
};

export type SignUpFormError = {
  [K in SignUpFormIds]: string;
};
