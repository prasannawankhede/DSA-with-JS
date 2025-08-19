function NGR(arr) {
  let result = [];
  let stack = [];
  let n = arr.length;

  for (let i = n - 1; i >= 0; i--) {
    if (stack.length === 0) {
      result.push(-1);
    } else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
      result.push(stack[stack.length - 1]);
    } else if (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {//we pop small
        stack.pop();
      }
      if (stack.length === 0) {
        result.push(-1);
      } else {
        result.push(stack[stack.length - 1]);
      }
    }
    stack.push(arr[i]);
  }
  return result.reverse();
}

module.exports = { NGR };
