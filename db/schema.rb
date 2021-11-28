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

ActiveRecord::Schema.define(version: 2021_11_28_012434) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "park_tags", force: :cascade do |t|
    t.integer "tag_id", null: false
    t.integer "park_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["park_id"], name: "index_park_tags_on_park_id"
    t.index ["tag_id"], name: "index_park_tags_on_tag_id"
  end

  create_table "parks", force: :cascade do |t|
    t.string "name", null: false
    t.integer "acreage", null: false
    t.text "description", null: false
    t.text "hours"
    t.string "contact"
    t.string "fb_link"
    t.string "twitter_link"
    t.string "web_link"
    t.float "lat"
    t.float "lng"
    t.string "state", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "m_photo"
    t.index ["name"], name: "index_parks_on_name"
  end

  create_table "reviews", force: :cascade do |t|
    t.text "body", null: false
    t.integer "rating", null: false
    t.date "actdate", null: false
    t.integer "author_id", null: false
    t.integer "trail_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_reviews_on_author_id"
    t.index ["trail_id"], name: "index_reviews_on_trail_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "body", null: false
    t.string "tag_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["body"], name: "index_tags_on_body"
  end

  create_table "trail_tags", force: :cascade do |t|
    t.integer "tag_id", null: false
    t.integer "trail_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tag_id"], name: "index_trail_tags_on_tag_id"
    t.index ["trail_id"], name: "index_trail_tags_on_trail_id"
  end

  create_table "trails", force: :cascade do |t|
    t.string "name", null: false
    t.text "overview", null: false
    t.text "description"
    t.string "difficulty", null: false
    t.float "length", null: false
    t.integer "elevation", null: false
    t.string "route_type", null: false
    t.float "lat"
    t.float "lng"
    t.integer "park_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "m_photo"
    t.index ["name"], name: "index_trails_on_name"
    t.index ["park_id"], name: "index_trails_on_park_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "fname", null: false
    t.string "lname", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email"
    t.index ["session_token"], name: "index_users_on_session_token"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
