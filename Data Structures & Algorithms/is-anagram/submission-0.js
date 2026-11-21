class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       if(s.length!== t.length) return false
       const countMap ={}
       for (let letter of s){
        countMap[letter] = (countMap[letter] ||0) + 1
       }
       for (let letter of t){
        if(countMap[letter] === undefined || countMap[letter]  === 0){ return false
        }
         countMap[letter]--
       }
      
 return true
    }
   
}
