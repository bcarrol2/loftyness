# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ label: 'Star Wars' }, { label: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


21.times do
    pitch1 = Pitch.create(label: "Why don't you give it/ us a try?", value: 1)
end

30.times do
    pitch2 = Pitch.create(label: "What do you have to lose?", value: 2)
end

42.times do
    pitch3 = Pitch.create(label: "Ready to move forward? I can send over the contract right now.", value: 3)
end

11.times do
    pitch4 = Pitch.create(label: "When can we begin [implementation, training, etc.]?", value: 4)
end

88.times do
    pitch5 = Pitch.create(label: "Come onnnnnnnnnnnnnn", value: 5)
end