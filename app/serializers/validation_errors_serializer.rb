# frozen_string_literal: true
class ValidationErrorsSerializer < ApplicationSerializer
  property(:validation_errors)

  def validation_errors
    Hash[*model.errors.keys.flat_map{ |k| [k, model.errors.full_messages_for(k) ] }]
  end
end
