Rails.application.routes.draw do
  devise_for :users
  root  'messages#index'
  resources :users, only: [:edit, :update, :index]
	resources :messages, only: [:index, :create]
  resources :groups, only: [:new, :create, :update, :edit]
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
