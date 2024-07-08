import {atom} from 'recoil'

const userState = atom<any>({
    key: 'userState',
    default: undefined
})

export default userState