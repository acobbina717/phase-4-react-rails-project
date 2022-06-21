class CourseSerializer < ActiveModel::Serializer
  attributes :id, :title, :program_language, :description, :image, :price, :rating, :skill_level, :teacher_id, :student_id
end
