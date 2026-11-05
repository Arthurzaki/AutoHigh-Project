const call = async (url, opt = {}) => {
  const res = await fetch('/api' + url, { headers: { 'Content-Type': 'application/json' }, ...opt });
  if (!res.ok) throw new Error(res.statusText);
  return res.status === 204 ? null : res.json();
};

export const api = {
  list: (col) => call('/' + col),
  create: (col, body) => call('/' + col, { method: 'POST', body: JSON.stringify(body) }),
  update: (col, id, body) => call(`/${col}/${id}`, { method: 'PATCH', body: JSON.stringify(body) }),
  remove: (col, id) => call(`/${col}/${id}`, { method: 'DELETE' }),
};
