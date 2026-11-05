// API sederhana (Express) dengan penyimpanan file JSON di data/db.json.
// Ganti ke database (SQLite/MySQL/Postgres) saat sistem masuk produksi.
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_FILE = path.join(__dirname, 'data', 'db.json');
const COLS = ['bookings', 'transactions', 'expenses', 'employees', 'attendance'];
const PORT = process.env.PORT || 3001;

const load = () => {
  if (!fs.existsSync(DB_FILE)) {
    fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });
    fs.writeFileSync(DB_FILE, JSON.stringify(Object.fromEntries(COLS.map((c) => [c, []]))));
  }
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
};
const save = (db) => fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));

const app = express();
app.use(cors());
app.use(express.json());
app.param('col', (req, res, next, col) => (COLS.includes(col) ? next() : res.status(404).json({ error: 'Koleksi tidak ditemukan' })));

app.get('/api/:col', (req, res) => res.json(load()[req.params.col]));

app.post('/api/:col', (req, res) => {
  const db = load();
  const { col } = req.params;
  const body = req.body;
  if (col === 'attendance') {
    // satu karyawan hanya punya satu catatan per tanggal
    const found = db.attendance.find((a) => a.employeeId === body.employeeId && a.date === body.date);
    if (found) {
      Object.assign(found, body);
      save(db);
      return res.json(found);
    }
  }
  const item = { id: randomUUID(), createdAt: new Date().toISOString(), ...body };
  db[col].push(item);
  save(db);
  res.status(201).json(item);
});

app.patch('/api/:col/:id', (req, res) => {
  const db = load();
  const item = db[req.params.col].find((x) => x.id === req.params.id);
  if (!item) return res.status(404).json({ error: 'Data tidak ditemukan' });
  Object.assign(item, req.body);
  save(db);
  res.json(item);
});

app.delete('/api/:col/:id', (req, res) => {
  const db = load();
  db[req.params.col] = db[req.params.col].filter((x) => x.id !== req.params.id);
  save(db);
  res.status(204).end();
});

if (process.env.NODE_ENV === 'production') {
  const dist = path.join(__dirname, 'dist');
  app.use(express.static(dist));
  app.get('*', (req, res) => res.sendFile(path.join(dist, 'index.html')));
}

app.listen(PORT, () => console.log(`AutoHigh API berjalan di http://localhost:${PORT}`));
