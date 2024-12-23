import ArrayBufferConverter from '../ArrayBufferConverter';
import { getBuffer } from '../arraybuffer';


const arrayBufferConverter = new ArrayBufferConverter();
const buffer = getBuffer();
arrayBufferConverter.load(buffer);
test('test', () => {
    expect(arrayBufferConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

