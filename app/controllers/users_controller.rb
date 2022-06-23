class UsersController < ApplicationController

  def show
    teacher = Teacher.find_by(id: session[:user_id])
    student = Student.find_by(id: session[:user_id])
    if teacher
      render json: teacher
    elsif student
      render json: student
    end
  end
end
