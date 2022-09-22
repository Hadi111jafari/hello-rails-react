class MessagesController < ApplicationController
  def index
    @messages = Message.all
    render json: @messages, status: :ok
  end
end
