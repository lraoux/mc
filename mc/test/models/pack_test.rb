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

require 'test_helper'

class PackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
