import { dbService } from '../../services/db.service.js'
import { logger } from '../../services/logger.service.js'

export const marketerService = {
    query,
    add,
}

async function add(marketer) {
    try {
        const collection = await dbService.getCollection('marketer')
        await collection.insertOne(marketer)
        return marketer
    } catch (err) {
        logger.error('cannot insert marketer', err)
        throw err
    }
}

async function query() {
    try {

        const collection = await dbService.getCollection('marketer')
        const marketers = await collection.find().toArray()
        return marketers
    } catch (err) {
        logger.error('cannot find cars', err)
        throw err
    }
}
