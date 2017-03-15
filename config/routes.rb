Rails.application.routes.draw do
  root 'root#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :quizzes, only: [:index, :create, :update, :destroy] do
      resources :quiz_trials, only: [:show, :create, :update], shallow: true do
        resources :user_answers, only: [:show, :create], module: :quiz_trials
        resource :result, only: [:show], module: :quiz_trials
      end
    end
    namespace :users do
      resources :quizzes, only: [:index, :show], shallow: true do
        resources :questions, only: [:create, :update, :destroy], module: :quizzes
      end
    end
  end
  get '/auth/:action/callback', to: 'auths#callback'

  # client side routing
  get '*path', to: 'root#index'
end
