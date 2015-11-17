class Api::ImagesController < ApplicationController
  def create
    @image = Image.new(image_params)
    @image.author = current_user
    ## do logic for attaching subpack / pack to image
    return 'success'
  end

  def index
    @images = Image.all

    render :index
  end

  def show
    @image = Image.find(params[:id])

    render :show
  end

  private
  def image_params
    params.require(:image).permit(:url, :description)
  end
end
