# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


21.times do
    pitch1 = Pitch.create(name: "Why don't you give it/ us a try?", value: 1)
end

30.times do
    pitch2 = Pitch.create(name: "What do you have to lose?", value: 2)
end

42.times do
    pitch3 = Pitch.create(name: "Ready to move forward? I can send over the contract right now.", value: 3)
end

11.times do
    pitch4 = Pitch.create(name: "When can we begin [implementation, training, etc.]?", value: 4)
end

88.times do
    pitch5 = Pitch.create(name: "Come onnnnnnnnnnnnnn", value: 5)
end