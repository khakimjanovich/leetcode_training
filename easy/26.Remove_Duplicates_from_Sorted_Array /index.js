let removeDuplicates = function (nums) {
    //birinchi elementini olamiz va keyingi elementlari bilan solishtirib chiqamiz
    //agar keyingi elementi bilan teng bo'lsa birinchi elementni tashlab yuboramiz
    // va yana bir marta shu funcni chaqirib yuboramiz chunki yana bitta bir xil element bo'lishi mumkin
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1)
            return removeDuplicates(nums)
        }
    }

    return nums.length
};
