const boom = require('@hapi/boom');

// validate the request body that's in the property of the request object
// schema comes from Joi
function validatorHandler(schema, property) {
  return (req, res, next) => {
    const { error } = schema.validate(req[property], { abortEarly: false });
    if(error){
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
