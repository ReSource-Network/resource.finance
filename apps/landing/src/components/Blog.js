import React from "react"
import ReactDOM from "react-dom"
import { transform } from "@babel/core"

function loadRemoteComponent(url) {
  return fetch(url)
    .then((res) => res.text())
    .then((source) => {
      var exports = {}

      function require(name) {
        if (name == "react") return React
        else throw `You can't use modules other than "react" in remote component.`
      }

      const transformedSource = transform(source, {
        presets: ["react", "es2015", "stage-2"],
      }).code

      eval(transformedSource)
      return exports.__esModule ? exports.default : exports
    })
}

loadRemoteComponent("https://codepen.io/tonytonyjan/pen/QEawag.js").then((Hello) => {
  ReactDOM.render(<Hello />, document.getElementById("hello"))
})
