// middleware/logger.js
const logger = (req, res, next) => {
    const log = `[${new Date().toLocaleString()}] ${req.method} ${req.originalUrl}`;
    console.log(log);
    next(); 
  };
  
  module.exports = logger;
  