import getCookie from '@/utils/cookies/getCookie'
import setCookie from '@/utils/cookies/setCookie'

const reducer = (
  state = getCookie('lang') === 'en' ? 'EN' : 'ID',
  action: { type: string }
) => {
  switch (action.type) {
    case 'en':
      setCookie('lang', 'en', 365)
      return (state = 'EN')
    case 'id':
      setCookie('lang', 'id', 365)
      return (state = 'ID')
    default:
      return state
  }
}

export default reducer
