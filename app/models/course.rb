class Course < ApplicationRecord
  beloing_to :teacher
  beloing_to :student
  validates :program_language, presence: true
  validates :description, presence: true
  validates :price, presence: true, numericality: true
  validates :skill_level, presence: true, inclusion: {in:"Beginner", "Intermediate", "Advanced"}
end
