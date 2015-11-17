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

require 'test_helper'

class SubpackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
