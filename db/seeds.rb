10.times do 
  Note.create(
    name: Faker::Name.name, 
    description: Faker::TvShows::MichaelScott.quote
  )
end