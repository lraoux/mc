# == Schema Information
#
# Table name: subpacks
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  pack_id     :integer          not null
#  title       :string           not null
#  description :text             default("sweet supplemental super supply")
#  url         :string           not null
#  prev        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Subpack < ActiveRecord::Base
  validates :author_id, :title, :url, :prev, presence: true

  belongs_to :author, class_name: :User
  belongs_to :pack
  has_many :images, as: :imageable
  has_many :taggings, as: :tagable
  has_many :tags, through: :taggings, source: :tag
end
