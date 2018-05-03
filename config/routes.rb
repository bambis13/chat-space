Rails.application.routes.draw do
  devise_for :users
  root  'messages#index'
  resources :users, only: [:edit, :update]
	resources :messages
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
