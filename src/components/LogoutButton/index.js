// Write your JS code here
import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

const LogoutButton = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <button type="button" onClick={onClickLogout()}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
