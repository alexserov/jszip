import ArrayReader from './ArrayReader';
import utils from '../utils';

export default class Uint8ArrayReader extends ArrayReader{
    constructor(data) {
        super(data);
    }
    /**
     * @see DataReader.readData
     */
    readData(size) {
        this.checkOffset(size);
        if(size === 0) {
            // in IE10, when using subarray(idx, idx), we get the array [0x00] instead of [].
            return new Uint8Array(0);
        }
        var result = this.data.subarray(this.zero + this.index, this.zero + this.index + size);
        this.index += size;
        return result;
    }
}