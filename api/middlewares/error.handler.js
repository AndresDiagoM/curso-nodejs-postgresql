const { ValidationError} = require('sequelize');

function logErrors(err, req, res, next) {
  console.log('logErrors')
  console.log(err)
  // console.log(err.errors)
  next(err)
}

function errorHandler(err, req, res, next) {
  console.log('errorHandler')
  res.status(500).json({
    message: err.message,
    // stack: err.stack, // this is not a good practice
    error: err,
  })
}

// middleware to handle boom errors
function boomErrorHandler(err, req, res, next) {
  console.log('boomErrorHandler')
  if (err.isBoom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  }else{
    next(err)
    // the else is necessary to avoid the following error:
    // Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    // because if the error is handled by boom, we dont need to call next(err) middleware
  }
}

// middleware to handle sequelize errors
function sequelizeErrorHandler(err, req, res, next) {
  console.log('sequelizeErrorHandler')
  if (err instanceof ValidationError) {
    res.status(409).json({
      name: err.name,
      message: err.message,
      error: err.errors,
    })
  }else{
    next(err)
  }
}

module.exports = {logErrors, errorHandler, boomErrorHandler, sequelizeErrorHandler}