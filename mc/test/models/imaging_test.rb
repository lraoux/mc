# == Schema Information
#
# Table name: imagings
#
#  id         :integer          not null, primary key
#  image_id   :integer
#  pack_id    :integer
#  subpack_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ImagingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
