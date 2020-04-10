module.exports = (request, response, next) => {
  console.log("Log de request" + request.body);
  next();
};
