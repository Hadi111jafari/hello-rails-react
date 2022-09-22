Rails.application.routes.draw do
  get 'messages', to: 'messages#index'
  root 'root#index'
end
