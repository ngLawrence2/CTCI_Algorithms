require 'bst_node'

class BST
  attr_reader :root

  def initialize
    @root=nil
  end

  def insert(val)
    @root = BSTNode.new(val) if @root.nil?
    insert_helper(@root,val)
  end

  def insert_helper(tree_node=@root,val)
    if tree_node > val
      if tree_node.left.nil?
        tree_node.left=BSTNode.new(val)
        return 
      else
        insert_helper(tree_node.left,val)
      end
    else
      if tree_node.right.nil?
        tree_node.right = BSTNode.new(val)
        return
      else
        insert_helper(tree_node.right,val)
      end
    end
  end

end
