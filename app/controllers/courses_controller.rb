class CoursesController < ApplicationController

  def index 
    render json: Course.all, status: 200
  end

  def show 
    course = find_course
    render json: course, status: 200
  end

  def create 
    course = Course.create!(course_params)
    session[:user_id] = student.id
    render json: course, status: 201
  end

  def update
    course = find_course
    course.update!(course_params)
    render json: course, status: 200
  end

  def destroy
    course = find_course
    course.destroy
    head 204
  end



  private
  def course_params
    params.permit(:title, :program_language, :description, :price, :rating, :skill_level)
  end

  def find_course
    Course.find(params[:id])
  end

end
