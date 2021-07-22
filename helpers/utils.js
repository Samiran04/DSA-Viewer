module.exports.getArray = async function (str) {
  try {
    let arr = [],
      temp = "";

    for (let i = 0; i < str.length; i++) {
      if (str[i] === ",") {
        arr.push(await Number(temp));
        temp = "";
      } else {
        temp = temp + str[i];
      }
    }

    arr.push(await Number(temp));

    return arr;
  } catch (err) {
    console.log("Error in Utils", err);
    return res.json(500, {
      success: false,
      message: "Error in Utils",
    });
  }
};
