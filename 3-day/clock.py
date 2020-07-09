hours = int(input('Enter the hours: '))
minutes = int(input('Enter the minutes: '))

if hours == 0:
  minute_hour = hours
else:
  minute_hour = 60 * hours

seconds = 60 * (minutes + minute_hour)

print(f'The seconds in {hours} h with {minutes} min are {seconds} sec')