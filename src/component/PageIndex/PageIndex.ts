const page = ["/people", "/object", "/color"];

export const getIndex = (path: string): number => {
  if (path == "/") path = "/people";
  const index = page.indexOf(path);

  return index;
};

export const getPath = (index: number): string => {
  if (index >= 3) index = 0;
  if (index < 0) index = 2;

  const pagePath = page[index];

  return pagePath;
};
