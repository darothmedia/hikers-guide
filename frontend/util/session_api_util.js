export const login = (user) => (
  $.ajax({
    url: `/api/session`,
    type: `POST`,
    data: {user}
  })
)
export const logout = () => (
  $.ajax({
    url: `/api/session`,
    type: `DELETE`
  })
)