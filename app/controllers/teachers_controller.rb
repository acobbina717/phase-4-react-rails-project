class TeachersController < ApplicationController
skip_before_action :authorized, only: [:create]

  def show 
    teacher = find_teacher
    render json: teacher, status: 200
  end

  def create
    teacher = Teacher.create!(teacher_params)
    session[:user_id] = teacher.id
    render json: teacher, status: 201
  end

  def update
    teacher = find_teacher
    teacher.update!(teacher_params)
    render json: teacher, status: 200
  end

  def destroy
    teacher = find_teacher
    teacher.destroy
    head 204
  end

  private
  def find_teacher
    Teacher.find(params[:id])
  end

  def teacher_params
    params.permit(:name, :email, :password, :password_confirmation)
  end

end
