redis_host = ENV['REDIS_HOST'] || 'localhost'
Rails.application.config.session_store :redis_store, {
  key: '_QuizMaster_session',
  servers: "redis://#{redis_host}:6379/0/session",
  expires_in: 1.month
}
