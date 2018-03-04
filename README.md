# React on Rails Starter

Feel free to use this repo as a way to start a new project with: 

* Rails 5.2
* `react_on_rails` gem using webpacker
* React.js with React Router V4
* `jwt` gem for Javascript Web Token authorization
* Apollo and GraphQL

The repo has a basic `AuthService` on the React side to handle authentication. To set this up on the server, run the following command to generate a `users` table:

```ruby
rails g migration users email:string name:string authentication_token:string password_digest:string 
```
