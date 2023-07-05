






export const createError = function (status, message ) {
  const err = new Error()
  err.success = false,
  err.status = status,
  err.message = message
  return err
}

export const notFound = (req, res, next) => {
  const err = new Error(`Not Found - ${req.originalUrl}`);
  err.success = false,
  err.status = 404,
  next(err)
};


export const errorHandler = (err, req, res, next) => {

    if (err.code === 11000) {
      err.success = false,
      err.status = 409,
      err.message = 'Duplicate Resource'
   }

  res.json({
    success: err.success,
    status: err.status,
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}
// export const myLogger = (status, message) => {

// }



// export const errorHandler = (err, req, res, next) => {

  // err.send("middleware is working")
  // next()
  // let statusCode = err.code  === 200 ? 400 : err.code ;
  // let message = err.message || "something went wrong!"
    
  //  If Mongoose not found error, set to 404 and change message
  //  if (err.name === 'CastError' && err.kind === 'ObjectId') {
  //   statusCode = 404;
  //    message = 'Resource not found';
  //  }

  //  if (err.code === 11000) {
  //   statusCode = 409
  //    message = 'Duplicate Resource'
  //  }
  // res.status(statusCode).json({
  //    success: false,  
  //    statusCode,
  //    message,
  //    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  // })
// };

 

//  const errorHandler = (err, req, res, next) => {
//    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
//    let message = err.message;
 
//    // If Mongoose not found error, set to 404 and change message
//    if (err.name === 'CastError' && err.kind === 'ObjectId') {
//      statusCode = 404;
//      message = 'Resource not found';
//    }
 
//    res.status(statusCode).json({
//      message: message,
//      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
//    });
//  };
 

 