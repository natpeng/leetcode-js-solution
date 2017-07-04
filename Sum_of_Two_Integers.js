//https://leetcode.com/problems/sum-of-two-integers/#/solutions

// http://www.cnblogs.com/grandyang/p/5451942.html

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    return (b===0) ? a : getSum(a^b, (a&b)<<1);
    // a&&b<<1 处理进位
    // a^b 保留处需进位的数以外所有的1，对他们继续进行计算可以得出结果
    // b == 0时为终止条件
    // 将1 + 3 变为 2+2， 2 + 6 变为 4+4，最后终止是为 a + 0(b = 0)那么a 就是我们要求的数
};