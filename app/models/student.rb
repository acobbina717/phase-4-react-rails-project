class Student < ApplicationRecord
  has_many :courses, dependent: :destroy
  has_many :teachers, through: :courses
  validates :name, presence: true
  validates :email, uniqueness: true, presence: true
  validates :password, presence: true, length: { minimum: 6 }
end
