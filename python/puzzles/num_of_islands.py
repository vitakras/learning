class Solution:

    def numIslands(self, grid):
        """
        :type grid: List[List[str]]
        :rtype: int
        """
        island_count = 0
        self.visited_positions = dict()
        self.grid = grid

        for x in range(len(grid)):
            for y in range(len(grid[0])):
                position = (x, y)

                if self.not_visited(position) and self.is_island(position):
                    island_count += 1
                    self.walk_island(position)
                                        
        return island_count
    
    def walk_island(self, start_position):
        positions = [start_position]

        while(len(positions) != 0):
            position = positions.pop()

            if self.not_visited(position) and self.is_island(position):
                self.visit(position)
                for next_position in self.each_direction(position):
                    if self.is_position_on_grid(next_position):
                        positions.append(next_position)
    
    def visited(self, position):
        return self.visited_positions.get(position, False)
            
    def not_visited(self, position):
        return not self.visited(position)

    def is_island(self, position):
        x, y = position
        return self.grid[x][y] == '1'
    
    def visit(self, position):
        x, y = position
        self.grid[x][y] = True
    
    def each_direction(self, position):
        x, y = position
        return [(x + 1, y), (x, y + 1), (x - 1, y), (x, y - 1)]

    def is_position_on_grid(self, position):
        x, y = position
        if x >= 0 and x < len(self.grid) and y >= 0 and y < len(self.grid[0]):
            return True
        return False
