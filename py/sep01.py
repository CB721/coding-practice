# In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

def make_negative( number ):
    if (number <= 0):
        print(number) 
    else:
        print(number * -1)

# test cases
make_negative(42)
# -42
make_negative(-1)
# -2
make_negative(0)
# 0
make_negative(-30012)
# -30012
make_negative(40232123123)
# -40232123123