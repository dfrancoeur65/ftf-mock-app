Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :deals
      resources :construction_draws
      resources :loans
      resources :payoffs
      resources :line_items
      resources :invoices
      resources :received_payments
    end
  end
end
