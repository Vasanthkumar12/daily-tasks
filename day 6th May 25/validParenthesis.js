var isValid = function(s) {
    let openParenthesis = '({['
    let closeParenthesis = ')}]'

    if(closeParenthesis.includes(s[0])) {
        return false
    }

    let stack = []

    for(let i=0; i<s.length; i++) {
        if(openParenthesis.includes(s[i])) {
            stack.push(s[i])
        }
        else if (stack.length > 0 && (s[i] == ')' && stack[stack.length - 1] == '(') || (s[i] == ']' &&     stack[stack.length - 1] == '[') || (s[i] == '}' && stack[stack.length - 1] == '{')) {
            stack.pop()
        }
        else {
            return false
        }
        console.log(stack)
    }

    if(stack.length == 0) {
        return true
    }
    else {
        return false
    }

}

console.log(isValid('(())[]'))
console.log(isValid('(()){}]'))
console.log(isValid(']'))