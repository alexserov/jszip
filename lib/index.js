import object from './object';
import load from './load';
import support from './support';
import defaults from './defaults';

/**
 * Representation a of zip file in js
 * @constructor
 */
function JSZip() {
    // if this constructor is used without `new`, it adds `new` before itself:
    if(!(this instanceof JSZip)) {
        return new JSZip();
    }

    if(arguments.length) {
        throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
    }

    // object containing the files :
    // {
    //   "folder/" : {...},
    //   "folder/data.txt" : {...}
    // }
    this.files = {};

    this.comment = null;

    // Where we are in the hierarchy
    this.root = "";
    this.clone = function() {
        var newObj = new JSZip();
        for (var i in this) {
            if (typeof this[i] !== "function") {
                newObj[i] = this[i];
            }
        }
        return newObj;
    };
}
JSZip.prototype = object;
JSZip.prototype.loadAsync = load;
JSZip.support = support;
JSZip.defaults = defaults;

JSZip.version = "3.6.0";

JSZip.loadAsync = function (content, options) {
    return new JSZip().loadAsync(content, options);
};

export default JSZip;
