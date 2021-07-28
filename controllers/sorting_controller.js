const util = require("../helpers/utils");

module.exports.bubbleSort = async function (req, res) {
  try {
    let str = req.body.array;
    let ans = [];
    let arr = [],
      pos = 0;

    arr = await util.getArray(str);

    for (let val of arr) {
      let v = val;
      arr.splice(pos, 1, { val: v, type: "", cousor: false });
      pos++;
    }

    for (let i = 1; i < arr.length; i++) {
      for (let j = i; j >= 1; j--) {
        let tempArr = Array.from(arr);

        if (arr[j].val < arr[j - 1].val) {
          tempArr[j].cousor = true;
          tempArr[j - 1].cousor = true;
          tempArr[j].type = "second";
          tempArr[j - 1].type = "first";

          ans.push(tempArr);

          arr[j] = [arr[j - 1], (arr[j - 1] = arr[j])][0];
        } else {
          break;
        }
      }
    }

    ans.push(arr);

    return res.json(200, {
      success: true,
      data: {
        res: ans,
      },
    });
  } catch (err) {
    console.log("Error in Bubble Sort", err);
    return res.json(500, {
      success: false,
      message: "Error in Bubble Sort",
    });
  }
};
