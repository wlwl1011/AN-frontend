import { USER_LOGIN_SUCESS } from "../constants/userConstants";

export const userLoginReducer = (state, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCESS:
            return { loading: true, newInfo: {}}
    }
}