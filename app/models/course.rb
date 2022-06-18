class Course < ApplicationRecord
  belongs_to :teacher
  belongs_to :student
  validates :program_language, presence: true
  validates :description, presence: true
  validates :price, presence: true, numericality: true
  validates :skill_level, presence: true
  #  inclusion: {in:"Beginner", "Intermediate", "Advanced"} Add inclusion validation after seeding
end
