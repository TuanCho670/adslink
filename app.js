// Hàm xóa div có class 'ladipage-message'
        function removeMessageDiv() {
            const messageDiv = document.querySelector('.ladipage-message');
            if (messageDiv) {
                messageDiv.remove();
                console.log("Div with class 'ladipage-message' has been removed.");
            }
        }

        // Sử dụng MutationObserver để theo dõi các thay đổi trong DOM
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                // Kiểm tra nếu div với class 'ladipage-message' được thêm vào DOM
                if (mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.classList && node.classList.contains('ladipage-message')) {
                            removeMessageDiv();
                        }
                    });
                }
            });
        });

        // Bắt đầu theo dõi các thay đổi trong toàn bộ body
        observer.observe(document.body, { childList: true, subtree: true });

        // Gọi hàm removeMessageDiv nếu div đã tồn tại từ trước
        removeMessageDiv();
