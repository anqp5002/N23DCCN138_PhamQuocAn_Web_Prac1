# Lab 1: Blog Listing Page - NextJS & Tailwind

**Thông tin sinh viên**
- **Họ và tên:** Phạm Quốc An
- **Mã sinh viên:** N23DCCN138
- **Môn học:** Thực hành Lập trình Web - Nhóm 2

## Mô tả bài làm
Dự án được xây dựng với NextJS (App Router) và Tailwind CSS, bao gồm:
1. **Trang chủ (`/`)**: Hiển thị danh sách 12 bài viết dạng lưới responsive (sử dụng component `BlogCard`, `Header`). Dữ liệu được fetch trực tiếp từ REST API `jsonplaceholder`.
2. **Trang chi tiết (`/blog/[id]`)**: Dynamic route hiển thị chi tiết nội dung của từng bài viết thông qua ID, kèm theo nút quay lại trang chủ, tuân thủ UI/UX responsive.

## Quy trình Git
Đã chia thành 5 commit theo đúng yêu cầu thời gian, bao gồm:
- Thiết lập dự án NextJS.
- Thêm Layout & Component (Header, Badge).
- Fetch API và hiển thị Grid Danh sách BlogCard.
- Hoàn thiện Responsive trang chủ.
- Xây dựng phần bài tập cá nhân: Trang chi tiết bài viết (Blog Detail).