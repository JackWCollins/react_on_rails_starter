class User < ApplicationRecord
  # include TokenAuthenticable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  # devise :database_authenticatable, :registerable,
  #        :recoverable, :rememberable, :trackable, :validatable
  has_secure_password

  after_create :send_welcome_email

  # has_many :pool_entries
  # belongs_to :favorite_team, class_name: "NflTeam"

  validates_presence_of :name
  validates :email, presence: true, uniqueness: true

  private

  def send_welcome_email
    # UserMailer.welcome_email(self).deliver
  end

end
