export const fetchParks = () => (
  $.ajax({
    url: `/api/parks`,
    method: 'GET'
  })
)

export const fetchPark = (parkId) => (
  $.ajax({
    url: `/api/parks/${parkId}`,
    method: 'GET',
    parkId
  })
)