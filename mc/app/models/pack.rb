# == Schema Information
#
# Table name: packs
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  title       :string           not null
#  description :text             default("crazy cool custom content")
#  url         :string           not null
#  prev        :string           not null
#  downloads   :integer          default(0)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Pack < ActiveRecord::Base
  validates :author_id, :title, :url, :prev, presence: true

  belongs_to :author, class_name: :User

  has_many :images, as: :imageable
  has_many :subpacks
  has_many :taggings, as: :tagable
  has_many :tags, through: :taggings, source: :tag

  def all_images
    all_images = self.images
    subpacks.each do |s|
      all_images += s.images
    end
    all_images
  end

  def all_tags
    all_tags = self.tags
    subpacks.each do |s|
      all_tags += s.tags
    end
    all_tags.uniq
  end
end
