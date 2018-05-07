FactoryGirl.define do

  factory :message do
    text "aaaaa"
    image File.open("#{Rails.root}/public/test-images/ガンバリ事務次長.jpeg")
    user
    group
    created_at { Faker::Time.between(2.days.ago, Time.now, :all)}
  end
end
