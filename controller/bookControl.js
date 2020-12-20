const bookModel = require("../db/models/bookModel");

exports.getallBook = async (req, res, next) => {
  try {
    const allbook = await bookModel.find();
    res.status(200).json({ success: true, data: allbook });
  } catch (error) {
    res.status(400).json({ success: false, err });
  }
};
exports.getallBookid = async (req, res, next) => {
  try {
    const bookid = await bookModel.findById(req.params.id);
    res.json({
      success: true,
      data: bookid,
    });
  } catch (err) {
    res.status(400).json({ success: false, err });
  }
};
exports.postBook = async (req, res, next) => {
  try {
    const postbook = await bookModel.create(req.body);
    res.status(200).json({ success: true, data: postbook });
  } catch (error) {
    res.status(400).json({ success: false, data: null });
  }
};
exports.updateBook = async (req, res, next) => {
  try {
    const editbook = await bookModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        new: true,
      }
    );
    if (!editbook) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: editbook });
  } catch (error) {
    res.status(400).json({ success: false, error: error });
  }
};
exports.deleteBook = async (req, res, next) => {
  try {
    const deletebook = await bookModel.findByIdAndDelete(req.params.id);
    if (!deletebook) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: deletebook });
  } catch (error) {
    res.status(400).json({ success: false, error: error });
  }
};
