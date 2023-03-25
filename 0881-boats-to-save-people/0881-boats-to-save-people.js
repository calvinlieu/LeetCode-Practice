/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people = people.sort((a, b) => b - a);
    
    let boat = 0;
    let low = 0;
    let high = people.length - 1;
    
    while (low <= high) {
        if (people[low] + people[high] <= limit) {
            high--;
        }
        
        low++;
        boat++;
    }
    
    return boat;
}; 