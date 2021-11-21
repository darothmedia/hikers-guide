# json.partial! 'api/users/user' user: @user

json.user do 
json.extract! @user, :id, :fname, :lname, :email
end