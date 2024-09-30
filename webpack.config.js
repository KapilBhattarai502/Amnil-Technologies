const path = require("path");
module.exports = {
  mode: "development",

  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3500,
  },
//   loader
    module:{
        rules:[{
            test:/\.css$/,
            use:[
                'style-loader','css-loader'
            ]
        }]

    }

};
