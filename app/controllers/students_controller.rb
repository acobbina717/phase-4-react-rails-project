class StudentsController < ApplicationController
  
  def show 
    student = find_student
    render json: student, status: 200
  end

  def create
    student = Student.create!(student_params)
    session[:user_id] = student.id
    render json: student, status: 201
  end

  def update
    student = find_student
    student.update!(student_params)
    render json: student, status: 200
  end

  def destroy
    student = find_student
    student.destroy
    head 204
  end

  private
  def find_student
    Student.find(params[:id])
  end

  def student_params
    params.permit(:name, :email, :password, :password_confirmation)
  end

end
