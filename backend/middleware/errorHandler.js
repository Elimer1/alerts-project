const errorHandler = (err, req, res, next) => {
  const error = err.mesage || "Internal server error";
  const statusCode = err.status || 500;
  return res.status(statusCode).json({ Error: error });
};
