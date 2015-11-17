class Api::SubpacksController < ApplicationController
  def create
    @subpack = Subpack.new(subpack_params)
  end

  def index
    @subpacks = Subpack.all

    render :index
  end

  def show
    @subpack = Subpack.find(params[:id])
    render :show
  end

  private
  def subpack_params
    params.require(:subpack).permit(:title, :description, :url)
  end
end
