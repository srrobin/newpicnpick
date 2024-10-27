import { useEffect } from "react";

export default function ImportBsJS() {
  useEffect(() => {
    require("../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
    // require("picnpick/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map");
    // require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
}