class MessagesController < ApplicationController
  def index
    random_num = Random.rand(1...5)
    @messages = Message.where(id: random_num)
    render json: @messages, status: :ok
  end
end
