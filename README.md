# Test PT. Sistem Integrasi Medika
## Amalia Fitria Dewi_SQA_Mojokerto
*8-9 Mei 2025*


### Bagian A

| No | Pertanyaan | Jawaban |
|----|------------|---------|
| 1 | Jelaskan perbedaan antara **bug**, **defect**, dan **error**. | **Error** adalah kesalahan dalam penulisan atau logika kode oleh developer. <br> **Defect** adalah Kesalahan pada program yang ditemukan oleh tester saat melakukan pengujian. <br> **Bug** adalah cacat/error/defect dalam software yang membuat hasil tidak sesuai harapan dan disampaikan kepada developer sebagai bug dan diperbaiki oleh developer. |
| 2 | Apa yang dimaksud dengan **regression testing** dan kapan biasanya dilakukan? | Regression testing adalah pengujian ulang terhadap sistem untuk memastikan bahwa perubahan yang telah dilakukan misalnya terdapat update fitur atau fixing bug untuk memastikan tidak ada error baru atau mengganggu fitur yang sudah ada. Regression testing biasanya dilakukan setelah adanya update kode, patch, atau perbaikan bug. |
| 3 | Sebutkan **lifecycle dari bug/defect** dari ditemukan hingga ditutup. | 1. **New** (bug dilaporkan) <br> 2. **Assigned** (diberikan ke developer) <br> 3. **Open** (developer mulai mengerjakan) <br> 4. **Fixed** (sudah diperbaiki) <br> 5. **Retest** (QA mengetes ulang) <br> 6. **Verified** (bug validasi sukses) *(Jika masih ada bug maka melalui tahapan ***Reopen***)* <br> 7. **Closed** (bug ditutup) <br> |
| 4 | Apa itu **test case** dan **test scenario**? Jelaskan perbedaannya dan berikan contohnya. | **Test case** adalah bagian dari test scenario yang berisi rincian bagaimana langkah langkah pengujian yang detail untuk mengecek fitur tertentu agar lebih mudah ter-tracking. <br> **Test scenario** adalah Rincian apa saja yang diuji dan nantinya skenario tersebut akan mencakup beberapa test case. <br> **Contoh Test Case**: Uji login dengan username benar dan password salah. <br> **Contoh Test Scenario**: Uji seluruh proses login dari halaman utama hingga dashboard. |
| 5 | Apa yang dimaksud dengan **severity** dan **priority** dalam konteks bug? Berikan masing-masing contohnya. | **Severity** menunjukkan seberapa parah dampaknya terhadap sistem. <br> **Priority** menunjukkan seberapa penting bug untuk diperbaiki dengan cepat. <br> **Contoh Severity Tinggi**: Sistem forceclose saat klik tombol bayar. <br> **Contoh Priority Tinggi**: Logo pada halaman login terbalik dan terlihat oleh semua pengguna. |


### Bagian B

1. Test Case Login

| Test Case ID | Deskripsi                       | Langkah                                                                 | Input                          | Expected Result                              |
|--------------|----------------------------------|------------------------------------------------------------------------|-------------------------------|-----------------------------------------------|
| TC01         | Login sukses dengan data valid   | 1. Buka halaman login<br>2. Isi email dan password valid<br>3. Klik Login | Email: user@example.com<br>Password: valid123 | Berpindah ke dashboard utama                  |
| TC02         | Login gagal dengan password salah | 1. Buka halaman login<br>2. Isi email valid dan password salah<br>3. Klik Login | Email: user@example.com<br>Password: salah123 | Muncul pesan error: "Password salah"         |
| TC03         | Email tidak diisi                | 1. Buka login<br>2. Kosongkan email<br>3. Isi password<br>4. Klik Login | Email: (kosong)<br>Password: valid123 | Muncul pesan error: "Email wajib diisi"      |
| TC04         | Password tidak diisi             | 1. Buka login<br>2. Isi email<br>3. Kosongkan password<br>4. Klik Login | Email: user@example.com<br>Password: (kosong) | Muncul pesan error: "Password wajib diisi"   |
| TC05         | Format email tidak valid         | 1. Buka login<br>2. Isi email tanpa '@'<br>3. Isi password<br>4. Klik Login | Email: userexample.com<br>Password: valid123 | Muncul pesan error: "Format email tidak valid" |
| TC06         | Email tidak terdaftar            | 1. Isi email yang tidak terdaftar<br>2. Isi password valid<br>3. Klik Login | Email: unknown@domain.com<br>Password: valid123 | Muncul pesan: "Akun tidak ditemukan"         |
| TC07         | Password kurang dari 6 karakter  | 1. Isi email valid<br>2. Isi password pendek<br>3. Klik Login            | Email: user@example.com<br>Password: 123 | Muncul pesan error: "Password minimal 6 karakter" |
| TC08         | Field email berisi spasi         | 1. Isi email dengan spasi di awal/akhir<br>2. Klik Login                 | Email: " user@example.com "<br>Password: valid123 | Muncul pesan: "Format email tidak valid"     |
| TC09         | Password berisi spasi saja       | 1. Isi email valid<br>2. Isi password dengan spasi saja<br>3. Klik Login | Email: user@example.com<br>Password: "   " | Muncul pesan error: "Password tidak valid"   |
| TC10         | Klik Login tanpa isi apapun      | 1. Buka login<br>2. Klik langsung tombol Login                          | Email: (kosong)<br>Password: (kosong) | Muncul pesan error di kedua field            |


2. Negative Testing Scenario

| No | Skenario | Input | Expected Result |
|----|----------|-------|------------------|
| 1  | Password salah | Email valid, password salah | Gagal login, muncul pesan "password salah" |
| 2  | Email tidak valid | Email tanpa '@', password valid | Gagal login, muncul pesan: "Format email salah" |
| 3  | Semua field kosong | Email dan password kosong | Muncul validasi "Kolom harus diisi" muncul di kedua field |


3. Boundary Testing Password Field

| No | Skenario | Password | Expected Result |
|----|----------|----------|------------------|
| 1  | Password tepat 6 karakter (batas minimum) | `amalia` | Berhasil, login jika data valid |
| 2  | Password 5 karakter (di bawah minimum)    | `amel2`  | Gagal, muncul error validasi |
