# == Schema Information
#
# Table name: images
#
#  id             :integer          not null, primary key
#  url            :string           not null
#  description    :string           default("")
#  imageable_id   :integer          not null
#  imageable_type :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Image < ActiveRecord::Base
  validates :url, presence: true

  belongs_to :imageable, polymorphic: true

  def author
    self.imageable.author
  end
end
