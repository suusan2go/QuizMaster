Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :quizzes, only: [:create]
  end
  get '/auth/:action/callback', to: 'auths#callback'

  # client side routing
  get '*path', to: 'root#index'
end
