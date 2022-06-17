class CourseSerializer < ActiveModel::Serializer
  attributes :id, :title, :program_language, :description, :price, :rating, :skill_level
end
