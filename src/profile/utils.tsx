// .utils.tsx

export const encodeBase64 = (str: string): string => {
  try {
    return btoa(str);
  } catch (e) {
    console.error(`Failed to encode Base64 string: ${str}`, e);
    return '';
  }
};

export const decodeBase64 = (str: string): string => {
  try {
    return atob(str);
  } catch (e) {
    console.error(`Failed to decode Base64 string: ${str}`, e);
    return '';
  }
};
