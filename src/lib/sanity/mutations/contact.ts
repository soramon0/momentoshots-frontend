import { writeClient } from "../client";

export type ContactPayload = {
  fullname: string;
  email: string;
  phone: string;
  message: string;
};

export async function createContact(payload: ContactPayload) {
  return writeClient.create({
    _type: "contact",
    ...payload,
  });
}
