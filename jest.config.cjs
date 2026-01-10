module.exports = {
    testEnvironment: "node",
    transform: {
      "^.+\\.js$": "babel-jest",
    },
    transformIgnorePatterns: [
      "/node_modules/(?!(@exodus|html-encoding-sniffer|whatwg-encoding)/)"
    ],
  };
  