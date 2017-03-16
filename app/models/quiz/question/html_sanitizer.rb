# frozen_string_literal: true
class Quiz::Question::HtmlSanitizer
  class << self
    def sanitize(content:)
      new(content: content).sanitize
    end
  end

  def initialize(content:)
    @content = content
  end

  def sanitize
    Rails::Html::WhiteListSanitizer.new.sanitize(
      content,
      tags: %w(p br b strong em u ol ul li h1 h2 h3 h4 h5 h6)
    )
  end

  private

  attr_reader :content
end
