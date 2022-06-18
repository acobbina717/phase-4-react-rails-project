puts "☠ Destroying all data..."

Teacher.destroy_all
Student.destroy_all
Course.destroy_all

puts "☠ Destroying all data... Done!"

puts "🌱 Seeding database..."

5.times do |i| 
  Teacher.create!(
    name: Faker::Name.unique.name,
    email: Faker::Internet.email,
    password_digest: "password"
  )
  end

  5.times do |i|
    Student.create!(
      name: Faker::Name.unique.name,
      email: Faker::Internet.email,
      password_digest: "password"
    )
  end

  skill_level = ["Beginner","Intermediate","Advanced"]
  titles = ["Learn","Study","Practice","Master"]

  program_language = Faker::ProgrammingLanguage.name

  10.times do |i|
    Course.create!(
      title:"#{titles.sample} #{Faker::ProgrammingLanguage.name}",
      program_language: Faker::ProgrammingLanguage.name, 
      description:"Stff" , 
      price:rand(1..150), 
      rating:rand(1..5), 
      skill_level:skill_level.sample,
      teacher_id:Teacher.ids.sample, 
      student_id:Student.ids.sample)
  end

  puts "🌱 Seeding database... Done!"

