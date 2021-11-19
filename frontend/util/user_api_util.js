export const signUp = (user) => (
  $.ajax({
    url: `/api/users`,
    type: `POST`,
    data: { user }
  })
)

export const fetchUsers = () => (
  $.ajax({
    url: `/api/users`,
    type: `GET`
  })
)

export const fetchUser = (userId) => (
  $.ajax({
    url: `/api/users/${userId}`,
    type: `GET`,
    userId
  })
)

export const deleteUser = (userId) => (
  $.ajax({
    url: `/api/users/${userId}`,
    type: `DELETE`
  })
)

export const updateUser = (user) => (
  $.ajax({
    url: `/api/users/${user.id}`,
    type: `PATCH`,
    data: {user}
  })
)