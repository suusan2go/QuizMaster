# frozen_string_literal: true
class Quiz::Question::HtmlSanitizer
  class << self
    def sanitize(content:)
      new.sanitize(content: content)
    end
  end

  def sanitize(content:)
    Rails::Html::WhiteListSanitizer.new.sanitize(
      content,
      tags: %w(p br b strong em u ol ul li h1 h2 h3 h4 h5 h6)
    )
  end
end
