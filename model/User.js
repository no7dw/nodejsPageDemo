'use strict'

const BaseModel = require('./BaseModel')

class User extends BaseModel {
  constructor (db) {
    super(db)
    this.name = 'user'
    this.schema = {
      name: String,
    }  
  }
}

module.exports =  User
