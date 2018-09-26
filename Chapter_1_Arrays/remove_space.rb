# Write a method to replace all spaces in a string with '%20: You may assume that the string
# has sufficient space at the end to hold the additional characters, and that you are given the "true"
# length of the string.
# EXAMPLE
# Input: "Mr John Smith " 13
# Output: "Mr%20J ohn%20Smith"
def remove_spaces(string)
  result = ''
  string.chars.each do |k|
    if k == ' '
      result += '%20'
    else
      result +=k
    end
  end
  result
end
