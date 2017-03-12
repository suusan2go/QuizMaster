Rails.application.routes.draw do
  root 'root#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :quizzes, only: [:create, :update]
    resource :user, only: [] do
      resources :quizzes, only: [:index, :show], module: :users
    end
  end
  get '/auth/:action/callback', to: 'auths#callback'

  # client side routing
  get '*path', to: 'root#index'
end
