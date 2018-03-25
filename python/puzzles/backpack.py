class Solution:
    """
    @param m: An integer m denotes the size of a backpack
    @param A: Given n items with size A[i]
    @return: The maximum size
    """
    def backPack(self, m, A):
        store = [0] * (m + 1)
        
        for item_size in A:
            current_size = m
            
            for previous_value in reversed(store[item_size:]):
                offset_size = current_size - item_size
                new_value = item_size + store[offset_size]
                store[current_size] = max(new_value, previous_value)
                
                current_size -= 1
                
        return store[m]
