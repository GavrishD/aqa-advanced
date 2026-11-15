import { jest } from '@jest/globals';

jest.unstable_mockModule('axios', () => ({
  default: {
    get: jest.fn(),
  },
}));

const axios = (await import('axios')).default;
const { getUser } = await import('./mockAxios.js');

test('should return user data when request is successful', async () => {
  const mockUser = {
    id: 1,
    name: 'Test User',
    email: 'test@example.com',
  };

  axios.get.mockResolvedValue({
    data: mockUser,
  });

  const result = await getUser();

  expect(result).toEqual(mockUser);
});

test('should throw error when request fails', async () => {
  axios.get.mockRejectedValue(new Error('Network error'));

  await expect(getUser()).rejects.toThrow('Failed to fetch user');
});
