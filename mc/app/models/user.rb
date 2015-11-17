# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  avatar          :string           default("https://s3-us-west-1.amazonaws.com/asco-jkh/layout/defavie.jpg")
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :email, :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, :username, :session_token, uniqueness: true

  has_many :packs, foreign_key: :author_id
  has_many :subpacks, foreign_key: :author_id
  has_many :pack_images, through: :packs, source: :images
  has_many :subpack_images, through: :subpacks, source: :images

  attr_reader :password

  before_validation :ensure_session_token

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def images
    self.pack_images + self.subpack_images
  end

  def reset_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def follows?(user)
    self.followed_users.include?(user)
  end

  private
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
