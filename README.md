# Kỳ Phạm — Personal Lab

Website cá nhân nhiều trang viết bằng **React + Vite**, với giao diện **pixel art 2D** trên nhánh `codex/pixel-art`. Dự án chạy trên máy; các lệnh bên dưới không tạo Site hay domain và không triển khai website lên dịch vụ nào. Repo GitHub, nếu có, chỉ lưu mã nguồn.

## Chạy local

```sh
npm install
npm run dev
```

Mở địa chỉ Local mà Vite in ra, thường là `http://127.0.0.1:5173/`. Nhấn `Ctrl+C` để dừng.

## Tạo bản build local

```sh
npm run build
npm run preview
```

Vite ghi kết quả vào `dist/`. Bước sau build sao chép `index.html` vào các thư mục tuyến đường, để có thể mở trực tiếp các URL con trên dịch vụ lưu trữ tĩnh sau này. Bạn tự quyết định nơi lưu trữ và domain.

## Cấu trúc mã

- `src/App.jsx`: chọn trang theo đường dẫn.
- `src/components/SiteShell.jsx`: header, footer, tiêu đề trang và bố cục chung.
- `src/pages/`: trang chủ, hồ sơ, dự án, bài viết, ghi chú, Lab, bộ công cụ, liên hệ.
- `src/data.js`: ba concept dự án và ba bài viết mẫu.
- `src/styles.css`, `src/pages.css`: bố cục và responsive gốc.
- `src/pixel.css`: màu sắc, kiểu chữ, khung pixel và responsive cho giao diện mới.
- `src/components/PixelIllustration.jsx`: minh họa SVG vẽ bằng mã nguồn, không tải ảnh hay font từ bên ngoài.
- `scripts/copy-routes.mjs`: chuẩn bị 14 tuyến đường trong bản build local.

## Nội dung hiện tại

| Đường dẫn | Nội dung |
| --- | --- |
| `/` | Trang chủ |
| `/about/` | Hồ sơ và cách tiếp cận |
| `/work/` | Danh sách concept dự án, có lọc |
| `/work/<ten-du-an>/` | Ba case study minh họa |
| `/writing/` | Bài viết mẫu, có tìm kiếm và lọc chủ đề |
| `/writing/<ten-bai>/` | Ba trang đọc bài mẫu |
| `/notes/` | Ghi chú ngắn và đoạn mã mẫu |
| `/lab/` | Hai thử nghiệm tương tác với chữ và màu |
| `/uses/` | Bộ công cụ minh họa |
| `/contact/` | Trang liên hệ chờ thông tin thật |

Atlas Journal, Forma, Mori và ba bài viết đều là **nội dung minh họa**, không được trình bày như công việc đã triển khai hay bài viết đã xuất bản. Thông tin liên hệ chưa được gắn vì chưa có địa chỉ do người dùng cung cấp.
