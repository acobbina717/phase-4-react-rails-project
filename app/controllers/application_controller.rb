class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

  def render_not_found(exception)
    render json: { error: "#{exception.model} not found" }, status: 404
  end
  
  def render_invalid(exception)
    render json: { error: exception.record.errors.full_messages }, status: 422
  end

end
