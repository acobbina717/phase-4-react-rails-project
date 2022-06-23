Rails.application.routes.draw do
  
  resources :courses, only: [:index, :show, :create, :update, :destroy]
  resources :students, only: [:show, :create, :update, :destroy]
  resources :teachers, only: [:show, :create, :update, :destroy]
  resources :sessions, only: [:create, :destroy]
  resources :users, only: [:show]
  get "/auth", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
