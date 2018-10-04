require 'bst_node'
require 'bst'

#using a depth first search with a stack
#4.1 given a directed graph, design an algorithm to find out whether there is a route between two nodes
def question_1(root, target)
  return false if root.nil?
  stack = [root]
  until stack.empty?
    current = stack.pop
    return true if current.value == target.value
    stack << current.right if !current.right.nil?
    stack << current.left if !current.left.nil?
  end
  false
end


#solve by having the root as the middle element of the array
#4.2 Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.
def question_2(array)
  bst = BST.new
  mid_element = array[array.length/2] #get the middle element of the array
  bst.insert(mid_element)             #insert the middle into bst
  array.delete_at(array.length/2)    # delete the middle value of the array
  array.each do |el|                #iterate through the rest of the array and insert
    bst.insert(el)
  end
end

# Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g., if you have a tree with depth 0, you'll have 0 linked lists).
def level_order(root)
    res = []
    return res if root.nil?
    queue = [root]
    tmp = [root.val]
    until queue.empty?
        res << tmp
        parent = queue
        queue = []
        tmp = []
        parent.each do |nodes|
            queue << nodes.left unless nodes.left.nil?
            queue << nodes.right unless nodes.right.nil?
            tmp << nodes.left.val unless nodes.left.nil?
            tmp << nodes.right.val unless nodes.right.nil?
        end
    end
    res
end



#depth of a bst
def max_depth(root)
    #iterative
    # res = 0
    # return res if root.nil?
    # current = [root]
    # until current.empty?
    #     res+=1
    #     parents = current
    #     current = []
    #     parents.each do |node|
    #         current << node.left unless node.left.nil?
    #         current << node.right unless node.right.nil?
    #     end
    # end
    # res

    #recursive
    return 0 if root.nil?
    left = max_depth(root.left) + 1
    right = max_depth(root.right) + 1
    [left,right].max
end


#4.4
#Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.
def is_balanced(root)
    return true if root.nil?
    left_height = depth(root.left)
    right_height = depth(root.right)
    result = (left_height - right_height).abs
    return false if result > 1
    return is_balanced(root.left) && is_balanced(root.right)
end

#4.5
#validate BST
def is_valid_bst(root)
    is_sorted(in_order_traversal(root))
end

def is_sorted(array)
    return true if array.length == 1
    prev = 0
    next_element = 1
    while next_element < array.length
        if array[next_element] <= array[prev]
            return false
        end
        next_element += 1
        prev +=1
    end
    true
end

def in_order_traversal(root,arr=[])
    return [] if root.nil?
    unless root.left.nil?
        in_order_traversal(root.left,arr)
    end
    arr << root.val
    unless root.right.nil?
         in_order_traversal(root.right,arr)
    end
    arr
end



#4.8
#Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not necessarily a binary search tree.
def common_ancestor(node1, node2)

end

#4.9
#A binary search tree was created by traversing through an array from left to right and inserting each element. Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.
def bst_sequences(root)

end 
