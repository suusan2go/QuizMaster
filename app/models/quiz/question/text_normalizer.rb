# frozen_string_literal: true
class Quiz::Question::TextNormalizer
  class << self
    def normalize(content:)
      new(content: content).normalize
    end
  end

  def initialize(content:)
    @content = content.to_s
  end

  def normalize
    normalize_space
    normalize_case
    strip_whitespace
    word_to_number
    content
  end

  private

  def normalize_space
    self.content = content.gsub(/[[:blank:]]/, ' ')
  end

  def normalize_case
    self.content = content.downcase
  end

  def strip_whitespace
    self.content = content.strip
  end

  def word_to_number
    self.content = content.split(' ').map do |word|
      if word == 'zero'
        0
      else
        (Integer(word) rescue nil) || NumbersInWords.in_numbers(word).nonzero? || word
      end
    end.join(' ')
  end

  attr_accessor :content
end
