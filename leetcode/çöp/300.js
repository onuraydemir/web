var lengthOfLIS = function(nums) {
    var size = nums.length;
    
    if(size === 0) {
        return 0;
    }
    
    dp = Array(size).fill(1);
    
    for(var i = 1; i < size; i++) {
        for(var j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    return Math.max.apply(null, dp);
};



console.log(Infinity < Infinity)