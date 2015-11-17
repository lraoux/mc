Rails.application.routes.draw do
  root to: 'static_pages#root'

  match '*all', to: 'application#preflight', via: [:options]

  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]
  get 'delete', :to => 'sessions#delete'
  namespace :api, defaults: { format: :json } do
    resources :images
    resources :packs
    resources :subpacks
    resources :users
    resources :subpackings, only: [:create, :destroy]
    resources :imagings, only: [:create, :destroy]
  end
  match '*all', to: 'static_pages#root', via: [:get]
end
