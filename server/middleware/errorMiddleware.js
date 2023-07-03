export const createError = (status, message) => {
  const err = new Error()
  err.status = status
  err.message = message
  return err
}

export const notFound = (req, res, next) => {
   const error = new Error(`Not Found - ${req.originalUrl}`);
   res.status(404);
   next(error)
 };
 

 export const errorHandler = (err, req, res, next) => {
  let status = res.status === 200 ? 400 : res.status;
  let message = err.message || "something went wrong!"
    
  //  If Mongoose not found error, set to 404 and change message
   if (err.name === 'CastError' && err.kind === 'ObjectId') {
     status = 404;
     message = 'Resource not found';
   }

   if (err.code === 11000) {
     status = 409
     message = 'Duplicate Resource'
   }
  return res.status(status).json({
     success: false,  
     status,
     message,
     stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
};

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
 

 