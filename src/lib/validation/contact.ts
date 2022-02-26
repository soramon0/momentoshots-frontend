import * as yup from "yup";

import type { ContactPayload } from "@/lib/sanity";
import { validate } from "./validate";

const contactSchema = yup.object().shape({
  fullname: yup.string().required().min(5).max(50).label("Full name"),
  email: yup.string().email().required().label("Email"),
  phone: yup.string().required().min(5).max(20).label("Phone"),
  message: yup.string().required().max(500).min(10).label("Message"),
});

export async function validateContact(payload: ContactPayload) {
  const { data, errors } = await validate(contactSchema, payload);

  return { data: data as ContactPayload, errors };
}
