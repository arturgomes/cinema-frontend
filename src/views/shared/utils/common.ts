export const generateRandomId = (): number => {
  return Math.floor(100000 + Math.random() * 900000);
}

export const range = (start: number, end: number): number[] => {
  let ans: number[] = [];

  for (let i = start; i <= end; i++) {
    ans.push(i);
  }

  return ans;
}
