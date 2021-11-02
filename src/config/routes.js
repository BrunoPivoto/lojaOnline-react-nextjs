import { Router } from 'express'


export default function(server){

    const router = Router()
    server.use('/api', router)

    const todoService = require('../api/loja/lojaService')
    lojaService.register(router, '/lojas')
    
}