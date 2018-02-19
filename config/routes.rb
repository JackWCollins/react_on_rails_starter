Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end

  post "/graphql", to: "graphql#execute"
  root "home#index"
  get 'hello_world', to: 'hello_world#index'
  get '*path', to: "home#index"
end
