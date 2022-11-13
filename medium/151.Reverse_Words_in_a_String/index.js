//reverse the given sentence words
let reverseWords = (s) => {
    return s.replace(/\s+/g, ' ').trim().split(' ').reverse().join(' ')
}
console.log(reverseWords('the sky is blue'))
console.log(reverseWords('  hello world  '))
console.log(reverseWords('a good   example'))
