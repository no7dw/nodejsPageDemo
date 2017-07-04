'use strict'

const uniqueValidator = require('mongoose-unique-validator')
const mongoosePaginate = require('mongoose-paginate')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = function (id) {
  return mongoose.Types.ObjectId(id)
}
class BaseModel {
  constructor (db) {
    this.schema = null
    this.db = db
    this.statics = null
    this.methods = null
  }

  init () {
    console.log('init')
    const _schema = new Schema(this.schema)
    // _schema.set('timestamps', true)        // createAt, updatedAt -> UTC
    _schema.set('minimize', false) // Mongoose will, by default, "minimize" schemas by removing
                                   // empty objects.
    _schema.set('collection', this.name)
    _schema.set('id', true)
    _schema.set('toObject', {getters: true, virtuals: true, minimize: false, id: true})
    _schema.set('toJSON', {getters: true, virtuals: true, minimize: false, id: true})
    if (this.statics) _schema.statics = this.statics
    if (this.methods) _schema.methods = this.methods
    _schema.plugin(uniqueValidator)
    _schema.plugin(mongoosePaginate)
    const model = this.db.model(this.name, _schema)
    model.ObjectId = ObjectId
    return model
  }
}

module.exports = BaseModel
