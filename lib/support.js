'use strict';

export const base64 = true;
export const array = true;
export const string = true;
export const arraybuffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
export const nodebuffer = typeof Buffer !== "undefined";
// contains true if JSZip can read/generate Uint8Array, false otherwise.
export const uint8array = typeof Uint8Array !== "undefined";

if (typeof ArrayBuffer === "undefined") {
    export const blob = false;
}
else {
    var buffer = new ArrayBuffer(0);
    try {
        export const blob = new Blob([buffer], {
            type: "application/zip"
        }).size === 0;
    }
    catch (e) {
        try {
            var Builder = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
            var builder = new Builder();
            builder.append(buffer);
            export const blob = builder.getBlob('application/zip').size === 0;
        }
        catch (e) {
            export const blob = false;
        }
    }
}

try {
    export const nodestream = !!require('readable-stream').Readable;
} catch(e) {
    export const nodestream = false;
}
