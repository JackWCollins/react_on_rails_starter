Rails.application.routes.draw do
  root "home#index"
  get 'hello_world', to: 'hello_world#index'
end
