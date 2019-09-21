'use strict'

class UpdateBook {
  get rules () {
    const bookId = this.ctx.params.id
    return {
      // validation rules
      title: `required|unique:books,title,id,${bookId}`,
      isbn: `required|unique:books,title,isbn,${bookId}`,
      author: 'required'
    }
  }

  get messages () {
    return {
      'title.required': 'El campo titulo es obligatorio',
      'title.unique': 'El titulo ya existe',
      'isbn.required': 'El campo isbn es obligatorio',
      'isbn.unique': 'El isb ya existe',
      'author.required': 'El campo autor es obligatoria'
    }
  }
}

module.exports = UpdateBook
