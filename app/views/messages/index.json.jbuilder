if @new_messages.present?
  json.array! @new_messages do |message|
    json.name     message.user.name
    json.date     message.created_at.to_s(:datetime)
    json.text     message.text
    json.image    message.image
    json.id       message.id
  end
end
