import { replace } from './replace';

describe('replace', () => {
  it('should be chinsun9', () => {
    const origin = 'chinsung';

    const result = replace(origin);

    expect(result).toEqual('chinsun9');
  });

  it('should be G', () => {
    const origin = 'G';

    const result = replace(origin);

    expect(result).toEqual(origin);
  });

  it('should be 99G', () => {
    const origin = 'ggG';

    const result = replace(origin);

    expect(result).toEqual('99G');
  });

  it('should be 안녕하세요 저는 9를 9로 바꾸는 모듈입니다', () => {
    const origin = '안녕하세요 저는 g를 9로 바꾸는 모듈입니다';

    const result = replace(origin);

    expect(result).toEqual('안녕하세요 저는 9를 9로 바꾸는 모듈입니다');
  });
});
