'use strict'

class StoreBook {
  get rules () {
    return {
      // validation rules
      title: 'required',
      isbn: 'required|unique:users,email',
      author: 'required'
    }
  }

  get messages () {
    return {
      'title.required': 'El campo titulo es obligatorio',
      'title.unique': 'El titulo ya existe',
      'isbn.required': 'El campo isbn es obligatorio',
      'isbn.unique': 'El isbn ya existe',
      'author.required': 'El campo autor es obligatoria'
    }
  }
}

module.exports = StoreBook
