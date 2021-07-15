module.exports.linear = async function (req, res) {
  try {
    let item = req.body.item;
    let str = req.body.array;
    let ans = [];
    let pos = 0;
    let arr = [],
      temp = "",
      found = false;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === ",") {
        arr.push(temp);
        temp = "";
      } else {
        temp = temp + str[i];
      }
    }

    arr.push(temp);

    for (let val of arr) {
      let v = val;
      arr.splice(pos, 1, { val: v, found: false, cousor: false });
      pos++;
    }

    pos = 0;

    for (let val of arr) {
      let tempArr = Array.from(arr);
      let v = val.val;

      if (val.val !== item) {
        tempArr.splice(pos, 1, { val: v, found: false, cousor: true });
        ans.push(tempArr);
      } else {
        tempArr.splice(pos, 1, { val: v, found: true, cousor: true });
        ans.push(tempArr);
        found = true;
        break;
      }

      pos++;
    }

    return res.json(200, {
      success: true,
      data: {
        res: ans,
        found: found,
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
