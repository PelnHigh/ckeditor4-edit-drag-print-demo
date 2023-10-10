// HTML更新
function setHtml(data) {
    document.getElementById(timestamp).contentWindow?.postMessage(
        {
            html: data,
            paperSize: 'A4',
        },
        '*',
    );
}

function print(html = '') {
    // 获取当前页的html代码
    if (html) {
        document.getElementById(timestamp).contentWindow.postMessage(
            {
                printOtherHtml: html,
            },
            '*',
        );
    } else {
        document.getElementById(timestamp).contentWindow.focus();
        document.getElementById(timestamp).contentWindow.postMessage(
            {
                print: true,
            },
            '*',
        );
    }
}

function exportPDF(filename) {
    document.getElementById(timestamp).contentWindow.postMessage(
        {
            pdfName: filename || 'print',
        },
        '*',
    );
}

function download() {

}