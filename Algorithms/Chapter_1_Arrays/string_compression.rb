# Implement a method to perform basic string compression using the counts
# of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the
# "compressed" string would not become smaller than the original string, your method should return
# the original string. You can assume the string has only uppercase and lowercase letters (a - z).
def string_compression(string)
  res = ""
  index = 0
  character_counter = 0
  next_character = 0
  while(index<string.length)
    current_character = string[index]
    character_counter += 1
    next_character += 1
    if(string[next_character] != current_character)
      res += current_character + character_counter.to_s
      character_counter = 0
    end
    index+=1
  end
  return string if res.length > string.length
  res
end
