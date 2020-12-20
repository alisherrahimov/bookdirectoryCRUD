const {
  getallBook,
  getallBookid,
  postBook,
  updateBook,
  deleteBook,
} = require("../controller/bookControl");
const express = require("express");
const router = express.Router();

router.route("/").get(getallBook).post(postBook);
router.route("/:id").get(getallBookid).put(updateBook).delete(deleteBook);

module.exports = router;
