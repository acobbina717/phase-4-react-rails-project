class CreateCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :courses do |t|
      t.string :title
      t.string :program_language
      t.string :description
      t.integer :price
      t.integer :rating
      t.string :skill_level
      t.integer :teacher_id
      t.integer :student_id


      t.timestamps
    end
  end
end
