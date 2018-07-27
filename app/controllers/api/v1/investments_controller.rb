module Api
  module V1
    class InvestmentsController<ApplicationController
      def index
        investments = Investment.order('amount DESC');
        render json: {status:'Success', message:'Returned all investments', data:investments },status: :ok
      end
    end
  end
end
