import GenericWorker from './GenericWorker';
import crc32 from '../crc32';
import utils from '../utils';

/**
 * A worker which calculate the crc32 of the data flowing through.
 * @constructor
 */
export default class Crc32Probe extends GenericWorker{
    constructor() {
        super("Crc32Probe");
        this.withStreamInfo("crc32", 0);
    }
    /**
     * @see GenericWorker.processChunk
     */
    processChunk(chunk) {
        this.streamInfo.crc32 = crc32(chunk.data, this.streamInfo.crc32 || 0);
        this.push(chunk);
    }
}