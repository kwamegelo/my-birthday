secret_number = 9
guess_count = 0
guess_limit = 3
while guess_count < guess_limit:
    guess = int(input('Guess: '))
    guess_count += 1
    if guess_count == secret_number:
        print('you have won')
        break
    else:
        print('Sorry, you have lost')