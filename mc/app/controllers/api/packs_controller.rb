class Api::PacksController < ApplicationController
  def create
    @pack = Pack.new(pack_params)
    @pack.author_id = current_user.id

    if @pack.save
      render json: @pack
    else
      render json: @pack.errors.full_messages, staus: :unprocessable_entity
    end
  end

  def index
    case params[:sort]
    when "title"
      @packs = Pack.order(:title).limit(30)
    when "title desc"
      @packs = Pack.order(title: :desc).limit(30)
    when "downloads"
      @packs = Pack.order(:downloads).limit(30)
    when "downloads desc"
      @packs = Pack.order(downloads: :desc).limit(30)
    when "created"
      @packs = Pack.order(:created_at).limit(30)
    when "created desc"
      @packs = Pack.order(created_at: :desc).limit(30)
    when "updated"
      @packs = Pack.order(:updated_at).limit(30)
    when "updated desc"
      @packs = Pack.order(updated_at: :desc).limit(30)
    when /tag-(\w+)/
      @packs = Pack.joins(:tags).where('tags.title ~ ?', $1).limit(30)
    else
      @packs = Pack.all
    end

    render :index
  end

  def destroy
    @pack = Pack.find(params[:id])
    @pack.try(:destroy)
    render json: {}
  end

  def show
    @pack = Pack.find(params[:id])
    render :show
  end

  private
  def pack_params
    params.require(:pack).permit(:title, :description, :url, :prev)
  end
end
