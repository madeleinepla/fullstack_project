export const fetchListItem = listItemId => (
  $.ajax({
    url: `/api/list_items/${listItemId}`,
    method: 'GET'
  })
);

export const createListItem = (listItem) => (
  $.ajax({
    url: '/api/list_items',
    method: 'POST',
    data: { listItem }
  })
)

export const updateListItem = (listItem) => (
  $.ajax({
    url: `/api/list_items/${listItem.id}`,
    method: 'PATCH',
    data: { list }
  })
)

export const deleteListItem = (listItemId) => (
  $.ajax({
    url: `/api/list_items/${listItemId}`,
    method: 'DELETE'
  })
)