import { atom } from "jotai";
import moment from "moment";

const dateAtom = atom({
  data: moment(new Date()).format("YYYY-MM-DD"),
});

export default dateAtom;
