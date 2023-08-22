import React from "react";

const authChecker = (provider) => {
  if (provider) {
    return {
      signup: {
        shortDesc: "enter a username then accept the metamask auth",
        args: { nbArgs: 1 },
        run: (inputValue) => <ul>{}</ul>,
      },
    };
  }
};

const Terminal = () => {
  return <div></div>;
};

export default Terminal;
