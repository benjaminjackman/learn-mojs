// module.exports = {
//   entry: {
//     app: ['./app/index.js']
//   },
//   output: {
//     filename: 'bundle.js',
//     path: './dist'
//   },
//   // watch: true
// }


var path = require("path");
module.exports = {
  entry: {
    app: ["./app/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "static"),
    publicPath: "/assets/",
    filename: "bundle.js"
  }
};