
 # Given a string, write a function to check if it is a permutation of a palindrome.
#  EXAMPLE
# Input: Tact Coa
# Output: True (permutations: "taco cat". "atco cta". etc.)
def permutation_palindrome(string)
  character_counter = Hash.new {|h,k| h[k]=0}
  string.chars.each do |k|
    character_counter[k]+=1
    if character_counter[k] > 2 #3
      character_counter[k] = 1
    end
  end

  if string.length.even?
    character_counter.values.include?(1)
  else
    character_counter.values.count(1) == 1
  end
end
