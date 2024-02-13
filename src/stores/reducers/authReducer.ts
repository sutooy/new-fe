const initialState = {
  userInfo: [],
  adminList: [],
  roleList: [],
  userList: [],
  userDetail: [],
  privilegeList: [],
  rolePrevilage: [],
  isFailed: null,
  isServerError: null,
  isLogged: null,
  isLoading: false,
  resetToken: null,
  wlStatus: null,
  isSuccess: '',
  page: 0,
}

export const authReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, userInfo: action.payload }

    case 'CHECK_LOGIN':
      return { ...state, isLogged: action.payload }

    case 'CHECK_RESET_TOKEN':
      return { ...state, resetToken: action.payload }

    case 'UPDATE_PAGE':
      return { ...state, page: action.payload }

    case 'LOGOUT':
      return { ...state, isLogged: null }

    case 'FETCH_ADMIN_LIST':
      return { ...state, adminList: action.payload }

    case 'WL_STATUS':
      return { ...state, wlStatus: action.payload }

    case 'AUTH_GET_ERROR':
      return { ...state, isFailed: action.payload }

    case 'AUTH_CLEAR_ERROR':
      return { ...state, isFailed: null }

    case 'ACTION_SUCCESS':
      return { ...state, isSuccess: action.payload }

    case 'AUTH_ACTION_LOADING':
      return { ...state, isLoading: action.payload }

    case 'SERVER_GET_ERROR':
      return { ...state, isServerError: action.payload }

    case 'SERVER_CLEAR_ERROR':
      return { ...state, isServerError: null }

    case 'CREATE_ROLE_LOADING':
      return { ...state, isLoading: action.payload }

    case 'CREATE_ROLE_SUCCESS':
      return { ...state, isSuccess: action.payload }

    case 'CREATE_ROLE_FAILED':
      return { ...state, isFailed: action.payload }

    case 'GET_ROLE_LIST':
      return { ...state, roleList: action.payload }

    case 'GET_PRIVILAGE_LIST':
      return { ...state, privilegeList: action.payload }

    case 'GET_ROLE_PRIVILAGE':
      return { ...state, rolePrevilage: action.payload }

    case 'CLEAR_ROLE_PRIVILAGE':
      return { ...state, rolePrevilage: [] }

    case 'GET_USER_LIST':
      return { ...state, userList: action.payload }

    case 'GET_USER_DETAIL':
      return { ...state, userDetail: action.payload }

    case 'GET_USER_DETAIL_FAILED':
      return { ...state, isFailed: action.payload }

    case 'EDIT_USER_DETAIL_SUCCESS':
      return { ...state, isSuccess: action.payload }

    case 'EDIT_USER_DETAIL_FAILED':
      return { ...state, isFailed: action.payload }

    case 'DELETE_USER_DETAIL':
      return { ...state, isSuccess: action.payload }

    default:
      return state
  }
}
