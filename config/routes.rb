Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: { format: :json } do
    resources :users, except: [:new]
    resource :session, only: [:create, :destroy]
    resources :parks, only: [:show, :index]
    resources :searches, only: [:index]
    resources :trails, only: [:show, :index] do
      resources :reviews, only: [:create, :index]
    end

    resources :reviews, only: [:destroy, :show, :update]
  end

  
  
  root to: "static_pages#root"
end
