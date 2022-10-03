import { atom } from 'jotai'

// const authAtom = atom(기본값);
const authAtom = atom({ //atom 생성
    user: null,  //인증된 user에 대한 정보를 저장할 프로퍼티

}); //기본값으로 객체

export default authAtom;