Rails.application.routes.draw do
  devise_for :users
  root  'groups#index'
  resources :users, only: [:edit, :update, :index]
  resources :groups, only: [:new, :create, :update, :edit, :destroy] do
	  resources :messages, only: [:index, :create]
  end

    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
