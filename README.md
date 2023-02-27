# Quiz App

Aplikasi ini dibuat untuk melaksanakan tes technical Frontend Engineer di Optima

## System explanation

Library

- Redux Toolkit => State Management
- Redux Toolkit Query => Fetch API
- Next-Auth => Authentication
- Material-UI => React Component UI
- Formik => Form handling
- Yup => Form handling

Terdapat dua page, yaitu index dan quiz

1. User harus login dulu menggunakan akun google
2. User mengisi form yang berisi categoy, difficulty, dan type
3. Form terkirim, lalu akan di-push ke page quiz dan RTK Query akan melakukan fetch API
4. User bisa menekan tombol prev dan next untuk melihat soal
5. User bisa menekan tombol jawaban
6. User bisa melihat score di layar
7. Jika sudah selesai dikerjakan akan muncul score hasil
8. User bisa menekan logo atau tombol back home untuk memulai ulang
9. User bisa menekan tombol sign out untuk keluar

## Software & hardware requirement

Spesifikasi testing

### software

- Visual Studio Code
- Mozilla Firefox
- Microsoft Edge

### hardware

- RAM 8GB
- Intel Core I5 Gen 10

## Installation

Install npm package

```
npm install
```

To run the app on your computer

```
npm run dev
```
