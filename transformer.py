answer = "["

for i in range(5):
    answer += f'"{input()[3:].replace("[정답]", "")}"'
    if (i != 4):
        answer += ', '
answer += ']'

print(answer)