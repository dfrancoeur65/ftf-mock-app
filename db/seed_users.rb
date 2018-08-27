User.all.each do |u|
  u.admin = Faker::Boolean.boolean
  u.underwriter = u.admin ? Faker::Boolean.boolean : false
  u.sales = u.admin ? Faker::Boolean.boolean : false
  u.dev = u.admin ? Faker::Boolean.boolean : false
  u.save!
end
