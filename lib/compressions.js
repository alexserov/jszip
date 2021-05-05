import GenericWorker from "./stream/GenericWorker";
import deflate from './flate';

export const STORE = {
    magic: "\x00\x00",
    compressWorker : function (compressionOptions) {
        return new GenericWorker("STORE compression");
    },
    uncompressWorker : function () {
        return new GenericWorker("STORE decompression");
    }
};
export const DEFLATE = deflate;
