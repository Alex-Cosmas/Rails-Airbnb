FactoryBot.define do
  factory :user do
    sequence (:email) { |i| "email_#{i}@your_domain_name.com" }
    password { "password" }
  end
end
