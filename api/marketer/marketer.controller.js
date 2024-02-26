import { marketerService } from './marketer.service.js'
import { logger } from '../../services/logger.service.js'

export async function add(req, res) {
    try {
        const marketer = req.body
        if (!marketer.email) throw new Error('Missing Email')
        marketer.date = new Date()
        const addedMarketer = await marketerService.add(marketer)
        res.json(addedMarketer)
    } catch (err) {
        logger.error('Failed to add marketer', err)
        res.status(500).send({ err: 'Failed to add marketer' })
    }
}

export async function get(req, res) {
    try {
        logger.debug('Getting marketers')
        const marketers = await marketerService.query()
        res.json(marketers)
    } catch (err) {
        logger.error('Failed to get marketers', err)
        res.status(500).send({ err: 'Failed to get marketers' })
    }
}

