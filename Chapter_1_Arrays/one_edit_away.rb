# There are three types of edits that can be performed on strings: insert a character,
# remove a character, or replace a character. Given two strings, write a function to check if they are
# one edit (or zero edits) away.
#
# EXAMPLE
# pale, ple -> true
# pales, pale -> true
# pale, bale -> true
# pale, bae -> false

def one_edit_away(original,edit)
  return false if (original.length - edit.length) > 1
  diff = 0
  same_length = true
  if original.length != edit.length
    same_length = false
  end

  original.chars.each_with_index do |ch, idx|
    char_to_compare = edit[idx]
    char_to_compare = edit[idx - diff] if !same_length
    diff+=1 if char_to_compare != ch
    return false if diff>1
  end
  true
end



p one_edit_away('pale', 'ple')
p one_edit_away('pales', 'pale')
p one_edit_away('pale', 'bale')
p one_edit_away('pale', 'bake')
