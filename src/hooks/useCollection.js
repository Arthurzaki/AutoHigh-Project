import { useCallback, useEffect, useState } from 'react';
import { api } from '../lib/api.js';

export default function useCollection(col) {
  const [items, setItems] = useState([]);
  const reload = useCallback(() => api.list(col).then(setItems).catch(() => setItems([])), [col]);
  useEffect(() => { reload(); }, [reload]);

  return {
    items,
    add: async (b) => { await api.create(col, b); reload(); },
    patch: async (id, b) => { await api.update(col, id, b); reload(); },
    del: async (id) => { await api.remove(col, id); reload(); },
  };
}
