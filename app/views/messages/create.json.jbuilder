json.id        @message.id
json.text      @message.text
json.image     @message.image
json.name      @message.user.name
json.date      @message.created_at.strftime(Time::DATE_FORMATS[:datetime])
