import express from 'express'
import { add, get } from './marketer.controller.js'

export const marketerRoutes = express.Router()

marketerRoutes.get('/', get)
marketerRoutes.post('/', add)