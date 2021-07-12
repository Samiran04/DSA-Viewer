module.exports.linear = async function (req, res) {
  try {
    let item = req.body.item;
    let arr = req.body.array;
    let res = [];

    for (let val of arr) {
      if (val !== item) {
        res.push({ arr: arr, found: false, cousor: true });
      } else {
        res.push({ arr: arr, found: true, cousor: true });
        break;
      }
    }

    return res.json(200, {
      success: true,
      res: res,
    });
  } catch (err) {
    console.log("Error in Lenear Search", err);
    return res.json(500, {
      success: false,
      message: "Error in linear search",
    });
  }
};
