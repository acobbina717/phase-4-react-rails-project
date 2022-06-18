class Teacher < ApplicationRecord
  has_secure_password
  has_many :courses, dependent: :destroy
  has_many :students, through: :courses
  validates :name, presence: true
  validates :email, uniqueness: true, presence: true
  validates :password_digest, presence: true, length: { minimum: 6 }
end
