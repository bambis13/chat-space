class MessagesController < ApplicationController
  before_action :set_group
  # before_action :show_group_member, only: :index

	def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
    @members = @group.members.includes(:user)
	end

  def create
    @message = @group.messages.new(message_params)
    if @message.save
      respond_to do |format|
       format.json 
       format.html { redirect_to group_messages_path, notice: 'メッセージを投稿しました。' }
      end
    else
      @messages = @group.messages.includes(:user)
      flash.now[:alert] = 'メッセージを入力してください。'
      render :index
    end
  end

  private
  def message_params
   params.require(:message).permit(:text, :image).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end

  # def show_group_member
  #   current_user.groups.each do |group|
  #     @group_name = group.name
  #     @group_member = group.user.name
  #   end
  # end
  
end
