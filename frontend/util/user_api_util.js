export const signUp = (user) => (
  $.ajax({
    url: `/api/users`,
    method: 'POST',
    data: { user }
  })
)

export const fetchUsers = () => (
  $.ajax({
    url: `/api/users`,
    method: 'GET'
  })
)

export const fetchUser = (userId) => (
  $.ajax({
    url: `/api/users/${userId}`,
    method: 'GET',
    userId
  })
)

export const deleteUser = (userId) => (
  $.ajax({
    url: `/api/users/${userId}`,
    method: 'DELETE'
  })
)

export const updateUser = (user) => (
  $.ajax({
    url: `/api/users/${user.id}`,
    method: 'PATCH',
    data: {user}
  })
)