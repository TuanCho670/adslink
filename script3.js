 document.getElementById('BUTTON3').addEventListener('click', function() {
            let SHEET_ID = '1DKywxgQx9HOlSdzNufvHG42SKtI_C3YRFtutjk0C4VU'
            let SHEET_TITLE = 'Sheet1';
            let SHEET_COLUMN = 'A:J'
        
            // Tạo URL để lấy dữ liệu từ Google Sheet
            let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&column=' + SHEET_COLUMN);
         // Kiểm tra xem trường email có dữ liệu hay không
            // Fetch dữ liệu từ Google Sheet
            fetch(FULL_URL)
                .then(response => response.text())
                .then(data => {
                    const jsonData = JSON.parse(data.substring(47).slice(0, -2));
                    const cellValue = jsonData.table.rows[3].c[0].v;
                    console.log(cellValue)

                    // Chuyển hướng tới link từ cột A hàng 2
                    window.location.href = cellValue;
                })
                .catch(error => {
                    console.log('Error fetching data from Google Sheets', error);
                });
        });
