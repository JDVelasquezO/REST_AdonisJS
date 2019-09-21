'use strict'

class StoreUser {
  get rules () {
    return {
      // validation rules
      username: 'required',
      email: 'required|unique:users,email',
      password: 'required'
    }
  }

  get messages () {
    return {
      'username.required': 'El campo usuario es obligatorio',
      'email.required': 'El campo email es obligatorio',
      'email.unique': 'El email ya existe',
      'password.required': 'La contraseña es obligatoria'
    }
  }
}

module.exports = StoreUser
