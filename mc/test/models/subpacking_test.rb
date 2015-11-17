# == Schema Information
#
# Table name: subpackings
#
#  id         :integer          not null, primary key
#  subpack_id :integer
#  pack_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class SubpackingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
