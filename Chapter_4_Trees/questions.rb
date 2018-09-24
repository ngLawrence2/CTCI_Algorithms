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
