process.env.NODE_ENV = "production"

const ora = require("ora")
const rm = require("rimraf")
const chalk = require("chalk")
const webpack = require("webpack")
const webpackConfig = require("./webpack.prod.conf")

const spinner = ora("Building for production...")
spinner.start()

rm("dist", err => {
  if(err) throw err
  webpack(webpackConfig, function(err, stats) {
    spinner.stop()
    if(err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    }) + "\n\n")

    console.log(chalk.cyan("  Build complete."))
  })
})
