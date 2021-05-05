import { Readable } from 'readable-stream'

export const base64 = true;
export const array = true;
export const string = true;
export const arraybuffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
// contains true if JSZip can read/generate Uint8Array, false otherwise.
export const uint8array = typeof Uint8Array !== "undefined";

export const blob = function(){
    if (typeof ArrayBuffer === "undefined") {
        return false;
    }
    else {
        var buffer = new ArrayBuffer(0);
        try {
            return new Blob([buffer], {
                type: "application/zip"
            }).size === 0;
        }
        catch (e) {
            try {
                var Builder = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
                var builder = new Builder();
                builder.append(buffer);
                return builder.getBlob('application/zip').size === 0;
            }
            catch (e) {
                return false;
            }
        }
    }
}();