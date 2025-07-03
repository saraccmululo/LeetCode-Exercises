
function minSubArrayLen(target, nums) {
    let minLength = nums.length + 1;
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < nums.length; end++) {
        currentSum += nums[end];

        while (currentSum >= target) {
            minLength = Math.min(minLength, end - start + 1);
            currentSum -= nums[start];
            start++;
        }
    }

    return minLength === n+1 ? 0 : minLength;
}
const nums=[2,3,1,2,4,3]
const target=7
console.log(minSubArrayLen(target, nums));
