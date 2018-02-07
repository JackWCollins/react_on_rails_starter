Rails.application.routes.draw do
  root "hello_world#index"
  get 'hello_world', to: 'hello_world#index'
end
