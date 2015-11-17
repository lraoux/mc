# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150512084356) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "images", force: :cascade do |t|
    t.string   "url",                         null: false
    t.string   "description",    default: ""
    t.integer  "imageable_id",                null: false
    t.string   "imageable_type",              null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

  add_index "images", ["imageable_id"], name: "index_images_on_imageable_id", using: :btree

  create_table "packs", force: :cascade do |t|
    t.integer  "author_id",                                         null: false
    t.string   "title",                                             null: false
    t.text     "description", default: "crazy cool custom content"
    t.string   "url",                                               null: false
    t.string   "prev",                                              null: false
    t.integer  "downloads",   default: 0
    t.datetime "created_at",                                        null: false
    t.datetime "updated_at",                                        null: false
  end

  create_table "subpacks", force: :cascade do |t|
    t.integer  "author_id",                                               null: false
    t.integer  "pack_id",                                                 null: false
    t.string   "title",                                                   null: false
    t.text     "description", default: "sweet supplemental super supply"
    t.string   "url",                                                     null: false
    t.string   "prev",                                                    null: false
    t.integer  "downloads",   default: 0
    t.datetime "created_at",                                              null: false
    t.datetime "updated_at",                                              null: false
  end

  create_table "taggings", force: :cascade do |t|
    t.integer  "tag_id",       null: false
    t.integer  "tagable_id",   null: false
    t.string   "tagable_type", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "tags", force: :cascade do |t|
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                   null: false
    t.string   "email",                                                                                      null: false
    t.string   "password_digest",                                                                            null: false
    t.string   "session_token",                                                                              null: false
    t.string   "avatar",          default: "https://s3-us-west-1.amazonaws.com/asco-jkh/layout/defavie.jpg"
    t.datetime "created_at",                                                                                 null: false
    t.datetime "updated_at",                                                                                 null: false
  end

end
