export default (req, res, next) => {
  res.status(400).json({ message: "error 400 - Bad request" });
};
