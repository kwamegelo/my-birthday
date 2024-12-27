import sys, os
 # Maze file constants:
WALL = '#'
EMPTY = ' '
START = 'S'
EXIT = 'E'

PLAYER = '@'  # (!) Try changing this to '+' or 'o'.
BLOCK = chr(9617)  # Character 9617 is '░'


def displayMaze(maze):
 # Display the maze:
 # for y in range(HEIGHT):
for x in range(WIDTH):
if (x, y) == (playerx, playery):
    print(PLAYER, end='')
elif (x, y) == (exitx, exity):
    print('X', end='')
 27.             elif maze[(x, y)] == WALL:
 28.                 print(BLOCK, end='')
  else:
 30.                 print(maze[(x, y)], end='')