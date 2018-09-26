# Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? 
def is_unique(string)
 hashSet = Set.new
 string.chars.each do |char|
   return false if !hashSet.add?(char)
 end
 true
end
