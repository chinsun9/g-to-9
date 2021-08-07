import { replace } from './replace';

describe('replace', () => {
  it('should be chinsun9', () => {
    const origin = 'chinsung';

    const result = replace(origin);

    expect(result).toEqual('chinsun9');
  });

  it('should be chinsunG', () => {
    const origin = 'chinsunG';

    const result = replace(origin);

    expect(result).toEqual(origin);
  });
});
