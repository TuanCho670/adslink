
    const FORM_ITEM6_Name = document.getElementById('FORM_ITEM6').querySelector('input').setAttribute('name','text');
    const FORM_ITEM6_Type = document.getElementById('FORM_ITEM6').querySelector('input').setAttribute('type','text');
    const FORM3_required = document.getElementById('FORM_ITEM3').querySelector('input').setAttribute('required','');
    const FORM6_required = document.getElementById('FORM_ITEM6').querySelector('input').setAttribute('required','');
      
        document.getElementById('BUTTON5').addEventListener('click', function() {
            const email = document.getElementById('FORM_ITEM3').querySelector('input').value;
            let SHEET_ID = '1DKywxgQx9HOlSdzNufvHG42SKtI_C3YRFtutjk0C4VU'
            let SHEET_TITLE = 'Sheet1';
            let SHEET_COLUMN = 'A:J'
        
            // Tạo URL để lấy dữ liệu từ Google Sheet
            let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&column=' + SHEET_COLUMN);
         // Kiểm tra xem trường email có dữ liệu hay không
            if (!email) {
                console.log('No email entered. Please enter your email.');
                return;
            }
            // Fetch dữ liệu từ Google Sheet
            fetch(FULL_URL)
                .then(response => response.text())
                .then(data => {
                    const jsonData = JSON.parse(data.substring(47).slice(0, -2));
                    const cellValue = jsonData.table.rows[1].c[0].v;
                    console.log(cellValue)

                    // Ghi thông tin thành công vào console và chuyển hướng tới link lấy được từ Google Sheets
                    console.log('Email entered. Fetching data...');
                    

                    // Chuyển hướng tới link từ cột A hàng 2
                    window.location.href = cellValue;
                })
                .catch(error => {
                    console.log('Error fetching data from Google Sheets', error);
                });
        });
      
        document.getElementById('BUTTON6').addEventListener('click', function() {
            const tele = document.getElementById('FORM_ITEM6').querySelector('input').value;
            let SHEET_ID = '1DKywxgQx9HOlSdzNufvHG42SKtI_C3YRFtutjk0C4VU'
            let SHEET_TITLE = 'Sheet1';
            let SHEET_COLUMN = 'A:J'
        
            // Tạo URL để lấy dữ liệu từ Google Sheet
            let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&column=' + SHEET_COLUMN);
         // Kiểm tra xem trường tele có dữ liệu hay không
            if (!tele) {
                console.log('No tele entered. Please enter your tele.');
                return;
            }
            // Fetch dữ liệu từ Google Sheet
            fetch(FULL_URL)
                .then(response => response.text())
                .then(data => {
                    const jsonData = JSON.parse(data.substring(47).slice(0, -2));
                    const cellValue = jsonData.table.rows[0].c[0].v;
                    console.log(cellValue)

                    // Ghi thông tin thành công vào console và chuyển hướng tới link lấy được từ Google Sheets
                    console.log('Tele entered. Fetching data...');
                    

                    // Chuyển hướng tới link từ cột A hàng 2
                    window.location.href = cellValue;
                })
                .catch(error => {
                    console.log('Error fetching data from Google Sheets', error);
                });
        });
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
