# AutoHigh — Workshop Management Dashboard

Mockup interaktif **khusus AutoHigh Cikarang (Ultimate Coating & Detailing)**, disesuaikan dengan notulen kebutuhan pelanggan pada 1 November 2026.

## Cakupan

1. **Dashboard:** Ringkasan booking hari ini, kendaraan dikerjakan, pemasukan, presensi, grafik pembayaran, dan progres pengerjaan.
2. **Booking Kendaraan:** Input data pelanggan/kendaraan, tanggal dan jam kedatangan, pencarian, filter, ubah status, hapus booking.
3. **Transaksi Pembayaran:** Transaksi dari booking atau manual, status belum bayar/DP/lunas, metode pembayaran, dan ringkasan tagihan.
4. **Pembukuan:** Pemasukan dari transaksi, pengeluaran manual, selisih kas, filter bulan, ekspor CSV.
5. **Kehadiran Karyawan:** Data karyawan, hadir/izin/sakit/alpha, rekap bulanan sebagai dasar perhitungan gaji.

**Tidak menyertakan sistem klinik** (proyek terpisah sesuai notulen). Identitas visual mengikuti logo AutoHigh dengan palet hitam/emas.

## Cara menjalankan

Memerlukan Node.js 18+.

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`. API Express berjalan di `http://localhost:3001`.

Untuk build produksi:

```bash
npm run build
npm start
```

## Catatan mockup

- Proyek menyertakan **data simulasi** untuk membantu demo. Data berada di `data/db.json`. Semua nama, harga, layanan dan transaksi di data demo **bukan data operasional riil AutoHigh**.
- Untuk mengosongkan data simulasi, ganti isi `data/db.json` dengan `{"bookings":[],"transactions":[],"expenses":[],"employees":[],"attendance":[]}`.
- Daftar layanan masih contoh di `src/lib/constants.js` dan harus dikonfirmasi bersama pemilik.
- Penyimpanan saat ini via **file JSON di server** untuk prototipe, bukan untuk penggunaan bisnis produksi. Sistem produksi memerlukan autentikasi, hak akses, backup dan DB transaksi yang aman.
- Angka “Selisih Kas” belum merupakan laba akuntansi final. Metode pembayaran/konfirmasi dan ketentuan penggajian perlu disepakati dalam analisis kebutuhan lanjutan.
- Font Google dapat membutuhkan koneksi internet, namun sistem tetap memakai font fallback bila offline.
