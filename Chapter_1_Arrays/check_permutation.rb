def check_permutations(string1, string2)
  return false if string1.length != string2.length
  string1.chars.sort!.join == string2.chars.sort!.join
end
