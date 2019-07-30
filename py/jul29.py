# summing the last 3 (instead of 2) numbers of the sequence to generate the next
# Signature will always contain 3 numbers 
# n will always be a non-negative number
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
