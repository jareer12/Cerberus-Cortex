var Filter = require("bad-words"),
  filter = new Filter({ placeHolder: "#" });

module.exports = function main(msg) {
  return filter.clean(msg);
};
