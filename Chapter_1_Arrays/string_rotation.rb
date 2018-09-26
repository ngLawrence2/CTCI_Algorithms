# Assume you have a method isSubstring which checks if one word is a substring
# of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one
# call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").

#erbottlewaterbottle

def string_rotation(s1,s2)
  return true if s1.isSubstring((s2+s2)) 
  false
end
