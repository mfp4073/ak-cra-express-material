import React from 'react'

const AuthContext = React.createContext()

class AuthProvider extends React.Component {
  state = { isAuth: false }

  constructor() {
    super()
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }


  
  login() {
    console.log("clicked", this.state)
    this.setState({ isAuth: true })
    // setTimeout(() => this.setState({ isAuth: true }), 1000)
    console.log("clicked2", this.state)
    // you set the state but you dont redirect it anywhere
    // push(/dashboard) or wherever you intend for it to go
    // youll have to look up the correct way frome react-router-dom
  }

  logout() {
    this.setState({ isAuth: false })
  }
  
  render() {
    console.log("YOU ARE HERE")
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }