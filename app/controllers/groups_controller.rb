class GroupsController < ApplicationController
  before_action :set_group

  def index
    # @group.current_user
  end

  def new
    @group.users << current_user
  end

  def create
    if @group.save(group_params)
      redirect_to root_path, notice: 'グループを作成しました'
    else
      render :new
    end
  end

  def edit
    # @group.current_user
  end

  def update
  end

  private
  def group_params
    params.require(:group).permit(:name, user_ids: = [])
  end

  def set_group
    @group = Group.new
  end
end
