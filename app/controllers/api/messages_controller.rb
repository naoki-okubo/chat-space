class Api::MessagesController < ApplicationController
  before_action :group

  def index
    respond_to do |format|
      format.json{@messages = @group.Message.where('id > ?',params[:id]) }
    end
  end

  def group
    @group = params[:group_id]
  end
end