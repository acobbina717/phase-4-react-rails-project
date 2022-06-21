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
  images = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ScRdvbOTMp202CK5ypzcYwAAAA%26pid%3DApi&f=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.THkZy_q9Xcc9yFuqPhy3egAAAA%26pid%3DApi&f=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.-7PX0He1nljZGfpVr7v7GgHaFj%26pid%3DApi&f=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.C47vH71yRS24_mjscfFpOwAAAA%26pid%3DApi&f=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.u6WTDB5BJ_rpvhFDCBKW9AAAAA%26pid%3DApi&f=1"
  ]
  program_language = Faker::ProgrammingLanguage.name

  10.times do |i|
    Course.create!(
      title:"#{titles.sample} #{Faker::ProgrammingLanguage.name}",
      program_language: Faker::ProgrammingLanguage.name, 
      description:"Stff" , 
      image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ScRdvbOTMp202CK5ypzcYwAAAA%26pid%3DApi&f=1",
      price:rand(1..150), 
      rating:rand(1..5), 
      skill_level:skill_level.sample,
      teacher_id:Teacher.ids.sample, 
      student_id:Student.ids.sample)
  end

  puts "🌱 Seeding database... Done!"

