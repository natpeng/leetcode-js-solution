/** 
 * Problem description:
 *   https://leetcode.com/problems/combination-sum-iv/#/description
 */
 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var combinationSum4 = function(nums, target) {
	if (nums.length == 0 || target == 0) return 0;
	var dp = [];
	dp[0] = 1;
	for (var i = 1; i <= target; i++) {
		dp[i] = 0;
		for (var j = 0; j < nums.length; j++) {
			if (i >= nums[j]) 
				dp[i] += dp[i - nums[j]];
		}
	}
	return dp[target];
}