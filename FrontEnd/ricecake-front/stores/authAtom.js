import { atom } from "jotai";

const authAtom = atom({
  userId: null,
  password: null,
  name: null,
  email: null,
});

export default authAtom;
