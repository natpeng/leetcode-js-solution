/** 
 * Problem description:
 *   https://leetcode.com/problems/integer-to-english-words/#/solutions
 */
 
 /**
 * @param {number} num
 * @return {string}
 */
 // trick part is when to add whitespace and if num%1000 = 0 skip the convert for this three digits
var numberToWords = function(num) {
    
    var dict1 = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    var dict2 = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    var dict3 = ['', 'Thousand', 'Million', 'Billion'];
    
    if (num == 0) return 'Zero';
    
    // observed that number in english has a repeatitive pattern every 1,000
    
    var ret = '';
    var position = 0;
    
    while (num > 0) {
        var remain = parseInt(num%1000);
        if (remain != 0) // if it's 1,000,000 %1000 = 0 skip
            ret = convert(remain) + dict3[position] + ' ' + ret;
        position++;
        num = parseInt(num/1000);
    }
    
    function convert(num) {
        if (num == 0) return '';
        if (num < 20) 
            return dict1[num] + ' '; // we try to leave white space at the end so we can use trim() to trim leading and trailing whitespaces
        else if (num < 100) {
            return dict2[parseInt(num/10)] + ' ' + convert(num%10);
        }
        else if (num < 1000) {
            return dict1[parseInt(num/100)] + ' Hundred ' + convert(num%100);
        }
    }
    
    return ret.trim();
};
