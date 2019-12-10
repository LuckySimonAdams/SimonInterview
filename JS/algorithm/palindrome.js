function Stack() {
    let item = [];
    this.push = function(element) {item.push(element)}
    this.pop = function() {return item.pop()}
    this.peek = function() {return item[item.length - 1]}
    this.length = function() {return item.length}
    this.clear = function() {item = []}
}

function isPalindrome(word) {
    let stack = new Stack();
    for (let i = 0; i < word.length; i++) {
        stack.push(word[i]);
    }
    let reverse = '';
    while(stack.length() > 0) {
        reverse += stack.pop();
    }
    console.log(reverse);
    return word === reverse;
}

/*function isPalindrome (word) {
    return String(word).split().reverse().join() === word;
}*/

console.log(isPalindrome('level'));