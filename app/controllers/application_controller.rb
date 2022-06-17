class ApplicationController < ActionController::API
  include ActionController::Cookies
  has_secure_password

end
