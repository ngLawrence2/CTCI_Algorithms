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
