Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :deals
      get 'deals-accounting', to: 'deals#accounting'
      post 'accounting', to: 'deals#accounting_create_deal'
      resources :construction_draws
      resources :loans
      resources :payoffs
      resources :line_items
      resources :invoices
      resources :received_payments
    end
  end
end
