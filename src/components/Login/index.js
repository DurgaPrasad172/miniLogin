// Write your JS code here
import {withRouter, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')

  const onSubmitSuccess = token => {
    const {history} = props
    Cookies.set('jwt_token', token, {expires: 30})
    history.replace('/')
  }

  const onClickLogin = async () => {
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    console.log(userDetails)
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    }
  }

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <h1>Please Login</h1>
      <button type="button" onClick={onClickLogin}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default withRouter(Login)
