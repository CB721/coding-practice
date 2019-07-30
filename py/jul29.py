# summing the last 3 (instead of 2) numbers of the sequence to generate the next
# Signature will always contain 3 numbers 
# n will always be a non-negative number
# n is number of tribonacci numbers
def tribonacci(signature, n):
    # store numbers
    numArr = []
    # go through array
    for i in range (n):
        # add up numbers in array
        nextNum = signature[-1] + signature[-2] + signature[-3]
        # append this number to array
        signature.append(nextNum)
        # remove first number in array and append to num array
        numArr.append(signature.pop(0))

    return numArr

# test cases
print(tribonacci([1, 1, 1], 10))
# [1, 1, 1, 3, 5, 8, 17, 31, 57, 105]
print(tribonacci([3, 2, 4], 5))
# [3, 2, 4, 9, 15]
print(tribonacci([-1, 4, -4], 15))
# [-1, 4, -4, -1, -1, -6, -8, -15, -29, -52, -96, -177, -325, -598, -1100]