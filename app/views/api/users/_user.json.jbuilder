json.extract! user, :id, :email
json.firstName user.first_name
json.lastName user.last_name
json.profilePhotoUrl url_for(user.profile_photo)