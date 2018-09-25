def is_unique(string)
 hashSet = Set.new
 string.chars.each do |char|
   return false if !hashSet.add?(char)
 end
 true
end
