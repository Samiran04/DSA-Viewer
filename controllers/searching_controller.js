module.exports.linear = async function (req, res) {
  try {
    console.log("********HERE", req.body);

    let item = req.body.item;
    let arr = req.body.array;
    let res = [];
    let pos = 0;

    for (let val of arr) {
      let v = val;
      arr.splice(pos, 1, { val: v, found: false, cousor: false });
      pos++;
    }

    pos = 0;

    for (let val of arr) {
      let tempArr = arr;
      let v = val.val;

      if (val.val !== item) {
        tempArr.splice(pos, 1, { val: v, found: false, cousor: true });
        res.push(tempArr);
      } else {
        tempArr.splice(pos, 1, { val: v, found: true, cousor: true });
        res.push(tempArr);

        break;
      }

      pos++;
    }

    return res.json(200, {
      success: true,
      data: {
        res: res,
      },
    });
  } catch (err) {
    console.log("Error in Lenear Search", err);
    return res.json(500, {
      success: false,
      message: "Error in linear search",
    });
  }
};
