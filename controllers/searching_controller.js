const util = require("../helpers/utils");

module.exports.linear = async function (req, res) {
  try {
    let item = await Number(req.body.item);
    let str = req.body.array;
    let ans = [];
    let pos = 0;
    let arr = [],
      found = false;

    arr = await util.getArray(str);

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

module.exports.binarySearch = async function (req, res) {
  try {
    let item = await Number(req.body.item);
    let str = req.body.array;
    let ans = [];
    let pos = 0;
    let arr = [],
      found = false;

    arr = await util.getArray(str);

    await arr.sort(function (x, y) {
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });

    for (let val of arr) {
      let v = val;
      arr.splice(pos, 1, { val: v, found: false, cousor: false });
      pos++;
    }

    let s = 0,
      e = arr.length - 1;

    while (s <= e) {
      if (arr.length === 0) {
        break;
      }
      let s = 0,
        e = arr.length - 1;
      let a = (s + e) / 2;
      let mid = parseInt(a);
      let tempArr = Array.from(arr);
      let v = arr[mid].val;

      if (arr[mid].val === item) {
        tempArr.splice(mid, 1, { val: v, found: true, cousor: true });
        ans.push({ shift: null, arr: tempArr });
        found = true;
        break;
      } else if (arr[mid].val < item) {
        tempArr.splice(mid, 1, { val: v, found: false, cousor: true });
        ans.push({ shift: "right", arr: tempArr });
        arr = arr.splice(mid + 1, e - mid);
      } else {
        tempArr.splice(mid, 1, { val: v, found: false, cousor: true });
        ans.push({ shift: "left", arr: tempArr });
        arr = arr.splice(0, mid);
      }

      if (s >= e) {
        break;
      }
    }

    return res.json(200, {
      success: true,
      data: {
        res: ans,
        found: found,
      },
    });
  } catch (err) {
    console.log("Error in Binary Search", err);
    return res.json(500, {
      success: false,
      message: "Error in Binary Search",
    });
  }
};
