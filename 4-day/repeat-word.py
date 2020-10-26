def repeat_message(message, times):
    if times <= 1:
        return message
    else:
        return message + repeat_message(message, times - 1)

message = input('Message to repeat: ')
times = int(input('Number of times: '))
print(repeat_message(message, times))