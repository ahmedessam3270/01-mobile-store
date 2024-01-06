const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      let errMsg = error.details.map((err) => {
        return { message: err.message, path: err.path };
      });
      return res.status(400).send(errMsg);
    }
    next();
  };
};

module.exports = validate;
