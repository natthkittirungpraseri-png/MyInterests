const filterButtons = document.querySelectorAll('.filter-btn');
const gallery = document.querySelector('.gallery');
const imageBoxes = document.querySelectorAll('.image-box');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // สลับสถานะปุ่ม Active
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-category');

        // ถ้ากดปุ่ม All ให้แสดงทั้งหมด
        if (category === 'all') {
            gallery.classList.remove('search-mode');
            imageBoxes.forEach(box => {
                box.style.display = '';
            });
            return;
        }

        // เปิดโหมดกรองหมวดหมู่
        gallery.classList.add('search-mode');

        imageBoxes.forEach(box => {
            const boxCategory = box.getAttribute('data-category');
            if (boxCategory === category) {
                box.style.display = '';
            } else {
                box.style.display = 'none';
            }
        });
    });
});