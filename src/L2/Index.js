import  Amazon from "./MyComponent/amazon/MyComponent";
import  Shopclues from "./MyComponent/shopclues/MyComponent";

let toExport;

switch (window.location.pathname) {
    case "/":
        toExport = Amazon;
        break;

    case "/shopclues":
        toExport = Shopclues;
        break;

    default:
        break;
}

export default toExport;