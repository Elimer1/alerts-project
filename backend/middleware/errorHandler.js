export const errorHandler = (err, req, res, next) => {
  const error = err.issues[0].message || err.mesage || "Internal server error";
  const statusCode = err.issues ? 400 : err.status || 500;
  return res.status(statusCode).json({ success: false, Error: error });
};
