import { getInvalidUrl } from './errorHandling.js';

test('should return correct error message for invalid URL', async () => {
  await expect(getInvalidUrl()).rejects.toThrow('Resource not found');
});
