/**
 * Created by OWL on 1/3/2017.
 */
module.exports = {
    entry: {
      App: "./app/assets/scripts/app.js",
      Vendor: "./app/assets/scripts/Vendor.js"
    },
    output: {
       path: "./app/temp/scripts",
       filename: "[name].js"
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                query: {

                    "presets": [require.resolve("babel-preset-es2015")]
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}
