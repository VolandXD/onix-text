const rateService  = require('../service/rate-service')
const {validationResult} = require('express-validator');
const ApiError = require('../exeptions/api-error');
class RateController {
    async rates(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Помилка валідації', errors.array()))
            }
            const {currency} = req.query;
            const rateData = await rateService.getRate(currency)
            return res.json(rateData)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new RateController();