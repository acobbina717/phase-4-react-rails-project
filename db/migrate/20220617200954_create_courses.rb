class CreateCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :courses do |t|
      t.string :title
      t.string :program_language
      t.string :description
      t.integer :price
      t.integer :rating
      t.string :skill_level

      t.timestamps
    end
  end
end
