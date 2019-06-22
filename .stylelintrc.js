module.exports = {
  plugins: [
    "stylelint-order",
  ],
  rules: {
    "block-no-empty": [true, {
      "severity": "warning",
      "message": "No empty rule blocks.",
    }],
    "color-no-invalid-hex": true,
    "color-named": ["never", {
      "severity": "warning",
      "message": "No named (web) colors.",
    }],
    "color-hex-case": ["lower", {
      "severity": "warning",
    }],
    "color-hex-length": ["long", {
      "severity": "warning",
      "message": "No short notation for #HEX colors."
    }],
    "number-leading-zero": ["always", {
      "severity": "warning",
      "message": "Missing leading zero."
    }],
    "number-max-precision": [0, {
      "severity": "warning",
      "message": "Decimal numbers not allowed for pixels.",
      "ignoreUnits": ["%", "em", "rem"],
    }],
    "order/properties-order": [
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
    ],
  },
  ignoreFiles: [
    "build/**/*"
  ],
}
