export default ("/isaLive",
(req, res, next) => {
  res.json({ message: "server is a live" });
});
