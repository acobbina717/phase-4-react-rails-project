class SessionsController < ApplicationController

  def create
    student = Student.find_by(email: params[:email])
    teacher = Teacher.find_by(email: params[:email])

    if student && student.authenticate(params[:password])
      session[:user_id] = student.id
      render json: student, status: 200
    end

    if teacher && teacher.authenticate(params[:password])
      session[:user_id] = teacher.id
      render json: teacher, status: 200
    else
      render json: { error: 'Invalid email or password' }, status: 401
    end

  end

  def destroy
    session.delete(:user_id)
    head 204
  end

end
