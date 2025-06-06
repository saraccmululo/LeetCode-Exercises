//While loop version:
function validMountainArray(arr) {
  const n = arr.length;
  if (n < 3) return false;

  let i = 0;

  console.log("Start walking up...");

  // Walk up
  while (i + 1 < n && arr[i] < arr[i + 1]) {
    i++;
    console.log("Climbing up, i =", i);
  }

  console.log("Finished walking up. Peak index:", i);

  // Check if peak is valid
  if (i === 0 || i === n - 1) {
    console.log("Invalid peak. Either at start or end.");
    return false;
  }

  console.log("Start walking down...");

  // Walk down
  while (i + 1 < n && arr[i] > arr[i + 1]) {
    i++;
    console.log("Going down, i =", i);
  }

  console.log("Finished walking down. Final index:", i);

  // Valid mountain if we've reached the end
  return i === n - 1;
}

console.log(validMountainArray([1, 3, 5, 4, 2]));
/* Output:
Start walking up...
Climbing up, i = 1
Climbing up, i = 2
Finished walking up. Peak index: 2
Start walking down...
Going down, i = 3
Going down, i = 4
Finished walking down. Final index: 4
true */


//For loop version:
function validMountainArray(arr) {
  const n = arr.length;
  if (n < 3) return false;

  let i = 0;

  // ⛰️ Walk Up
  for (; i + 1 < n && arr[i] < arr[i + 1]; i++) {
    // You can log here if you want
    // console.log("Climbing up:", i);
  }

  // 📍 Check if peak is valid
  if (i === 0 || i === n - 1) return false;

  // ⛰️ Walk Down
  for (; i + 1 < n && arr[i] > arr[i + 1]; i++) {
    // console.log("Going down:", i);
  }

  // ✅ Must end at the last index
  return i === n - 1;
}
