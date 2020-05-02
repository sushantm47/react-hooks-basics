import React from "react";

export default function Hello() {
  React.useEffect(() => {
    console.log("rendering Hello component");
    return () => {
      console.log("unmount Hello component");
    };
  }, []);
  return <div>HELLO</div>;
}
