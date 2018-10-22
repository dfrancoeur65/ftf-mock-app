module Api::V1
  class UsersController < ApplicationController
    def index
      @users = User.order('name DESC')
      # render json: { status: 'Success', message: 'loaded users', data: users }, status: :ok
    end

    def show
      @user = User.find(user_params[:id])
      # render json: { status: 'Success', message: 'loaded user', data: user }, status: :ok
    end

    def destroy
      @user = User.destroy(user_params[:id])
      # render json: { status: 'Success', message: 'deleted the user', data: user }, status: :ok
    end

    def create
      @user = User.new(user_params)
      @user.save

      # if user.save
      #   # render json: { status: 'Success', message: 'created a new user', data: user }, status: :ok
      # else
      #   # render json: { status: 'Error', message: 'did not save the user', data: user.errors }, status: :unprocessable_entry
      # end
    end

    private

    def user_params
      params.permit(:name, :email, :street_address)
    end
  end
end
