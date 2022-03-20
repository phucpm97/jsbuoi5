//khai bao hang so
//garb X
const GARBX_1 = 8000;
const GARBX_2 = 7500;
const GARBX_3 = 7000;
const GARBX_WAIT = 2000;

//garb SUV
const GARBSUV_1 = 9000;
const GARBSUV_2 = 8500;
const GARBSUV_3 = 8000;
const GARBSUV_WAIT = 3000;
//garb BLACK
const GARBBlLACK_1 = 10000;
const GARBBlLACK_2 = 9500;
const GARBBlLACK_3 = 9000;
const GARBBlLACK_WAIT = 3500;

var tienKm_1 = 0;
var tienKm_2 = 0;
var tienKm_3 = 0;
var TongTien = 0;
var TienCho = 0;

document.getElementById("btnTinhTien").onclick = function() {
    var soKm = document.getElementById("soKm").value;
    var tgCho = document.getElementById("tgCho").value;
    var LoaiXe = LayLoaiXe();
    console.log(LoaiXe);
    switch (LoaiXe) {
        case 'grabX':
            // TienCho = TinhTienCho(tgCho, GARBX_WAIT);
            // // tinh tien garbX
            // if (0 <= soKm && soKm <= 1) {
            //     tienKm_1 = TinhKm_1(soKm, GARBX_1);
            //     TongTien = tienKm_1 + TienCho;
            //     console.log("tong tien", TongTien);
            // } else if (1 <= soKm && soKm <= 19) {
            //     tienKm_1 = TinhKm_1(1, GARBX_1);
            //     tienKm_2 = TinhKm_2(soKm, GARBX_2);
            //     TongTien = tienKm_1 + tienKm_2 + TienCho;
            //     console.log("tong tien", TongTien);
            // } else if (soKm >= 19) {
            //     tienKm_1 = TinhKm_1(1, GARBX_1);
            //     tienKm_2 = TinhKm_2(19, GARBX_2);
            //     tienKm_3 = TinhKm_3(soKm, GARBX_3);
            //     TongTien = tienKm_1 + tienKm_2 + tienKm_3 + TienCho;
            //     console.log("tong tien", TongTien);
            // }
            TinhTienChiTiet(soKm, tgCho, GARBX_WAIT, GARBX_1, GARBX_2, GARBX_3)
            console.log("tong tien", TongTien);
            break;
        case 'grabSUV':
            // TienCho = TinhTienCho(tgCho, GARBSUV_WAIT);
            // //tinh tien grabSUV
            // if (0 <= soKm && soKm <= 1) {
            //     tienKm_1 = TinhKm_1(soKm, GARBSUV_1);
            //     TongTien = tienKm_1 + TienCho;
            //     console.log("tong tien", TongTien);
            // } else if (1 <= soKm && soKm <= 19) {
            //     tienKm_1 = TinhKm_1(1, GARBSUV_1);
            //     tienKm_2 = TinhKm_2(soKm, GARBSUV_2);
            //     TongTien = tienKm_1 + tienKm_2 + TienCho;
            //     console.log("tong tien", TongTien);
            // } else if (soKm >= 19) {
            //     tienKm_1 = TinhKm_1(1, GARBSUV_1);
            //     tienKm_2 = TinhKm_2(19, GARBSUV_2);
            //     tienKm_3 = TinhKm_3(soKm, GARBSUV_3);
            //     TongTien = tienKm_1 + tienKm_2 + tienKm_3 + TienCho;
            //     console.log("tong tien", TongTien);
            // }
            TinhTienChiTiet(soKm, tgCho, GARBSUV_WAIT, GARBSUV_1, GARBSUV_2, GARBSUV_3)
            console.log("tong tien", TongTien);
            break;
        case 'grabBlack':
            // TienCho = TinhTienCho(tgCho, GARBBlLACK_WAIT);
            // //tinh tien grabBlack
            // if (0 <= soKm && soKm <= 1) {
            //     tienKm_1 = TinhKm_1(soKm, GARBBlLACK_1);
            //     TongTien = tienKm_1 + TienCho;
            //     console.log("tong tien", TongTien);
            // } else if (1 <= soKm && soKm <= 19) {
            //     tienKm_1 = TinhKm_1(1, GARBBlLACK_1);
            //     tienKm_2 = TinhKm_2(soKm, GARBBlLACK_2);
            //     TongTien = tienKm_1 + tienKm_2 + TienCho;
            //     console.log("tong tien", TongTien);
            // } else if (soKm >= 19) {
            //     tienKm_1 = TinhKm_1(1, GARBBlLACK_1);
            //     tienKm_2 = TinhKm_2(19, GARBBlLACK_2);
            //     tienKm_3 = TinhKm_3(soKm, GARBBlLACK_3);
            //     TongTien = tienKm_1 + tienKm_2 + tienKm_3 + TienCho;
            //     console.log("tong tien", TongTien);
            // }
            TinhTienChiTiet(soKm, tgCho, GARBBlLACK_WAIT, GARBBlLACK_1, GARBBlLACK_2, GARBBlLACK_3)
            console.log("tong tien", TongTien);
            break;
        default:
            alert("vui lòng chọn loại xe")
            break;
    }
    document.getElementById('divThanhTien').style.display = "block";
    document.getElementById('xuatTien').innerHTML = TongTien;
};

function LayLoaiXe() {
    var grabX = document.getElementById("grabX");
    var grabSUV = document.getElementById("grabSUV");
    var grabBlack = document.getElementById("grabBlack");
    var LoaiXe = "";

    if (grabX.checked) {
        LoaiXe = "grabX";
    } else if (grabSUV.checked) {
        LoaiXe = "grabSUV";
    } else if (grabBlack.checked) {
        LoaiXe = "grabBlack";
    }
    return LoaiXe;

}

function TinhTienCho(tgCho, giaCho) {
    var kq = 0;
    if (tgCho >= 3) {
        kq = Math.floor(tgCho / 3) * giaCho;
    }
    return kq;
}

function TinhKm_1(soKm, giaKm) {
    var kq = soKm * giaKm;
    return kq;
}

function TinhKm_2(soKm, giaKm) {
    var kq = (soKm - 1) * giaKm;
    return kq;
}

function TinhKm_3(soKm, giaKm) {
    var kq = (soKm - 19) * giaKm;
    return kq;
}

function TinhTienChiTiet(soKm, tgCho, giaCho, giaKm_1, giaKm_2, giaKm_3) {
    TienCho = TinhTienCho(tgCho, giaCho);
    //tinh tien garbX
    if (0 <= soKm && soKm <= 1) {
        tienKm_1 = TinhKm_1(soKm, giaKm_1);
        TongTien = tienKm_1 + TienCho;
    } else if (1 < soKm && soKm <= 19) {
        tienKm_1 = TinhKm_1(1, giaKm_1);
        tienKm_2 = TinhKm_2(soKm, giaKm_2);
        TongTien = tienKm_1 + tienKm_2 + TienCho;
    } else if (soKm > 19) {
        tienKm_1 = TinhKm_1(1, giaKm_1);
        tienKm_2 = TinhKm_2(19, giaKm_2);
        tienKm_3 = TinhKm_3(soKm, giaKm_3);
        TongTien = tienKm_1 + tienKm_2 + tienKm_3 + TienCho;
    }

}

document.getElementById("btnInHoaDon").onclick = function() {
    var content = "";
    var soKm = document.getElementById("soKm").value;
    var tgCho = document.getElementById("tgCho").value;
    var LoaiXe = LayLoaiXe();
    switch (LoaiXe) {
        case 'grabX':
            if (0 <= soKm && soKm <= 1) {
                content += "<tr>";
                content += "<td>Km đầu tiên</td>";
                content += "<td>" + soKm + "</td>";
                content += "<td>" + GARBX_1 + "</td>";
                content += "<td>" + tienKm_1 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Thời gian chờ</td>";
                content += "<td>" + tgCho + "</td>";
                content += "<td>" + GARBX_WAIT + "</td>";
                content += "<td>" + TienCho + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Tổng tiền</td>";
                content += "<td>" + TongTien + "</td>";

                content += "<tr>";
            } else if (1 < soKm && soKm <= 19) {
                content += "<tr>";
                content += "<td>Km đầu tiên</td>";
                content += "<td>" + 1 + "</td>";
                content += "<td>" + GARBX_1 + "</td>";
                content += "<td>" + tienKm_1 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>km 1 đến 19 </td>";
                content += "<td>" + (soKm - 1) + "</td>";
                content += "<td>" + GARBX_2 + "</td>";
                content += "<td>" + tienKm_2 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Thời gian chờ</td>";
                content += "<td>" + tgCho + "</td>";
                content += "<td>" + GARBX_WAIT + "</td>";
                content += "<td>" + TienCho + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Tổng tiền</td>";
                content += "<td>" + TongTien + "</td>";

                content += "<tr>";
            } else if (19 < soKm) {
                content += "<tr>";
                content += "<td>Km đầu tiên</td>";
                content += "<td>" + 1 + "</td>";
                content += "<td>" + GARBX_1 + "</td>";
                content += "<td>" + tienKm_1 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>km 1 đến 19 </td>";
                content += "<td>" + (19) + "</td>";
                content += "<td>" + GARBX_2 + "</td>";
                content += "<td>" + tienKm_2 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>km 20 trở đi </td>";
                content += "<td>" + (soKm - 19) + "</td>";
                content += "<td>" + GARBX_3 + "</td>";
                content += "<td>" + tienKm_3 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Thời gian chờ</td>";
                content += "<td>" + tgCho + "</td>";
                content += "<td>" + GARBX_WAIT + "</td>";
                content += "<td>" + TienCho + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Tổng tiền</td>";
                content += "<td>" + TongTien + "</td>";

                content += "<tr>";
            }

            break;
        case 'grabSUV':
            if (0 <= soKm && soKm <= 1) {
                content += "<tr>";
                content += "<td>Km đầu tiên</td>";
                content += "<td>" + soKm + "</td>";
                content += "<td>" + GARBSUV_1 + "</td>";
                content += "<td>" + tienKm_1 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Thời gian chờ</td>";
                content += "<td>" + tgCho + "</td>";
                content += "<td>" + GARBSUV_WAIT + "</td>";
                content += "<td>" + TienCho + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Tổng tiền</td>";
                content += "<td>" + TongTien + "</td>";

                content += "<tr>";
            } else if (1 < soKm && soKm <= 19) {
                content += "<tr>";
                content += "<td>Km đầu tiên</td>";
                content += "<td>" + 1 + "</td>";
                content += "<td>" + GARBX_1 + "</td>";
                content += "<td>" + tienKm_1 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>km 1 đến 19 </td>";
                content += "<td>" + (soKm - 1) + "</td>";
                content += "<td>" + GARBSUV_2 + "</td>";
                content += "<td>" + tienKm_2 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Thời gian chờ</td>";
                content += "<td>" + tgCho + "</td>";
                content += "<td>" + GARBSUV_WAIT + "</td>";
                content += "<td>" + TienCho + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Tổng tiền</td>";
                content += "<td>" + TongTien + "</td>";

                content += "<tr>";
            } else if (19 < soKm) {
                content += "<tr>";
                content += "<td>Km đầu tiên</td>";
                content += "<td>" + 1 + "</td>";
                content += "<td>" + GARBX_1 + "</td>";
                content += "<td>" + tienKm_1 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>km 1 đến 19 </td>";
                content += "<td>" + (19) + "</td>";
                content += "<td>" + GARBSUV_2 + "</td>";
                content += "<td>" + tienKm_2 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>km 20 trở đi </td>";
                content += "<td>" + (soKm - 19) + "</td>";
                content += "<td>" + GARBSUV_3 + "</td>";
                content += "<td>" + tienKm_3 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Thời gian chờ</td>";
                content += "<td>" + tgCho + "</td>";
                content += "<td>" + GARBSUV_WAIT + "</td>";
                content += "<td>" + TienCho + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Tổng tiền</td>";
                content += "<td>" + TongTien + "</td>";

                content += "<tr>";
            }
            break;
        case 'grabBlack':
            if (0 <= soKm && soKm <= 1) {
                content += "<tr>";
                content += "<td>Km đầu tiên</td>";
                content += "<td>" + soKm + "</td>";
                content += "<td>" + GARBBlLACK_1 + "</td>";
                content += "<td>" + tienKm_1 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Thời gian chờ</td>";
                content += "<td>" + tgCho + "</td>";
                content += "<td>" + GARBBlLACK_WAIT + "</td>";
                content += "<td>" + TienCho + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Tổng tiền</td>";
                content += "<td>" + TongTien + "</td>";

                content += "<tr>";
            } else if (1 < soKm && soKm <= 19) {
                content += "<tr>";
                content += "<td>Km đầu tiên</td>";
                content += "<td>" + 1 + "</td>";
                content += "<td>" + GARBBlLACK_1 + "</td>";
                content += "<td>" + tienKm_1 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>km 1 đến 19 </td>";
                content += "<td>" + (soKm - 1) + "</td>";
                content += "<td>" + GARBBlLACK_2 + "</td>";
                content += "<td>" + tienKm_2 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Thời gian chờ</td>";
                content += "<td>" + tgCho + "</td>";
                content += "<td>" + GARBBlLACK_WAIT + "</td>";
                content += "<td>" + TienCho + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Tổng tiền</td>";
                content += "<td>" + TongTien + "</td>";

                content += "<tr>";
            } else if (19 < soKm) {
                content += "<tr>";
                content += "<td>Km đầu tiên</td>";
                content += "<td>" + 1 + "</td>";
                content += "<td>" + GARBBlLACK_1 + "</td>";
                content += "<td>" + tienKm_1 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>km 1 đến 19 </td>";
                content += "<td>" + (19) + "</td>";
                content += "<td>" + GARBBlLACK_2 + "</td>";
                content += "<td>" + tienKm_2 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>km 20 trở đi </td>";
                content += "<td>" + (soKm - 19) + "</td>";
                content += "<td>" + GARBBlLACK_3 + "</td>";
                content += "<td>" + tienKm_3 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Thời gian chờ</td>";
                content += "<td>" + tgCho + "</td>";
                content += "<td>" + GARBBlLACK_WAIT + "</td>";
                content += "<td>" + TienCho + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Tổng tiền</td>";
                content += "<td>" + TongTien + "</td>";

                content += "<tr>";
            }
            break;
        default:
            alert("vui lòng chọn loại xe")
            break;
    }

    document.getElementById("tbody").innerHTML = content;
};




function hihi() {
    switch (LoaiXe) {
        case 'grabX':
            if (0 <= soKm && soKm <= 1) {
                content += "<tr>";
                content += "<td>Km đầu tiên</td>";
                content += "<td>" + soKm + "</td>";
                content += "<td>" + GARBX_1 + "</td>";
                content += "<td>" + tienKm_1 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Thời gian chờ</td>";
                content += "<td>" + tgCho + "</td>";
                content += "<td>" + GARBX_WAIT + "</td>";
                content += "<td>" + TienCho + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Tổng tiền</td>";
                content += "<td>" + TongTien + "</td>";

                content += "<tr>";
            } else if (1 < soKm && soKm <= 19) {
                content += "<tr>";
                content += "<td>Km đầu tiên</td>";
                content += "<td>" + 1 + "</td>";
                content += "<td>" + GARBX_1 + "</td>";
                content += "<td>" + tienKm_1 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>km 1 đến 19 </td>";
                content += "<td>" + (soKm - 1) + "</td>";
                content += "<td>" + GARBX_2 + "</td>";
                content += "<td>" + tienKm_2 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Thời gian chờ</td>";
                content += "<td>" + tgCho + "</td>";
                content += "<td>" + GARBX_WAIT + "</td>";
                content += "<td>" + TienCho + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Tổng tiền</td>";
                content += "<td>" + TongTien + "</td>";

                content += "<tr>";
            } else if (19 < soKm) {
                content += "<tr>";
                content += "<td>Km đầu tiên</td>";
                content += "<td>" + 1 + "</td>";
                content += "<td>" + GARBX_1 + "</td>";
                content += "<td>" + tienKm_1 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>km 1 đến 19 </td>";
                content += "<td>" + (19) + "</td>";
                content += "<td>" + GARBX_2 + "</td>";
                content += "<td>" + tienKm_2 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>km 20 trở đi </td>";
                content += "<td>" + (soKm - 19) + "</td>";
                content += "<td>" + GARBX_3 + "</td>";
                content += "<td>" + tienKm_3 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Thời gian chờ</td>";
                content += "<td>" + tgCho + "</td>";
                content += "<td>" + GARBX_WAIT + "</td>";
                content += "<td>" + TienCho + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Tổng tiền</td>";
                content += "<td>" + TongTien + "</td>";

                content += "<tr>";
            }

            break;
        case 'grabSUV':
            if (0 <= soKm && soKm <= 1) {
                content += "<tr>";
                content += "<td>Km đầu tiên</td>";
                content += "<td>" + soKm + "</td>";
                content += "<td>" + GARBSUV_1 + "</td>";
                content += "<td>" + tienKm_1 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Thời gian chờ</td>";
                content += "<td>" + tgCho + "</td>";
                content += "<td>" + GARBSUV_WAIT + "</td>";
                content += "<td>" + TienCho + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Tổng tiền</td>";
                content += "<td>" + TongTien + "</td>";

                content += "<tr>";
            } else if (1 < soKm && soKm <= 19) {
                content += "<tr>";
                content += "<td>Km đầu tiên</td>";
                content += "<td>" + 1 + "</td>";
                content += "<td>" + GARBX_1 + "</td>";
                content += "<td>" + tienKm_1 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>km 1 đến 19 </td>";
                content += "<td>" + (soKm - 1) + "</td>";
                content += "<td>" + GARBSUV_2 + "</td>";
                content += "<td>" + tienKm_2 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Thời gian chờ</td>";
                content += "<td>" + tgCho + "</td>";
                content += "<td>" + GARBSUV_WAIT + "</td>";
                content += "<td>" + TienCho + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Tổng tiền</td>";
                content += "<td>" + TongTien + "</td>";

                content += "<tr>";
            } else if (19 < soKm) {
                content += "<tr>";
                content += "<td>Km đầu tiên</td>";
                content += "<td>" + 1 + "</td>";
                content += "<td>" + GARBX_1 + "</td>";
                content += "<td>" + tienKm_1 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>km 1 đến 19 </td>";
                content += "<td>" + (19) + "</td>";
                content += "<td>" + GARBSUV_2 + "</td>";
                content += "<td>" + tienKm_2 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>km 20 trở đi </td>";
                content += "<td>" + (soKm - 19) + "</td>";
                content += "<td>" + GARBSUV_3 + "</td>";
                content += "<td>" + tienKm_3 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Thời gian chờ</td>";
                content += "<td>" + tgCho + "</td>";
                content += "<td>" + GARBSUV_WAIT + "</td>";
                content += "<td>" + TienCho + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Tổng tiền</td>";
                content += "<td>" + TongTien + "</td>";

                content += "<tr>";
            }
            break;
        case 'grabBlack':
            if (0 <= soKm && soKm <= 1) {
                content += "<tr>";
                content += "<td>Km đầu tiên</td>";
                content += "<td>" + soKm + "</td>";
                content += "<td>" + GARBBlLACK_1 + "</td>";
                content += "<td>" + tienKm_1 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Thời gian chờ</td>";
                content += "<td>" + tgCho + "</td>";
                content += "<td>" + GARBBlLACK_WAIT + "</td>";
                content += "<td>" + TienCho + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Tổng tiền</td>";
                content += "<td>" + TongTien + "</td>";

                content += "<tr>";
            } else if (1 < soKm && soKm <= 19) {
                content += "<tr>";
                content += "<td>Km đầu tiên</td>";
                content += "<td>" + 1 + "</td>";
                content += "<td>" + GARBBlLACK_1 + "</td>";
                content += "<td>" + tienKm_1 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>km 1 đến 19 </td>";
                content += "<td>" + (soKm - 1) + "</td>";
                content += "<td>" + GARBBlLACK_2 + "</td>";
                content += "<td>" + tienKm_2 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Thời gian chờ</td>";
                content += "<td>" + tgCho + "</td>";
                content += "<td>" + GARBBlLACK_WAIT + "</td>";
                content += "<td>" + TienCho + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Tổng tiền</td>";
                content += "<td>" + TongTien + "</td>";

                content += "<tr>";
            } else if (19 < soKm) {
                content += "<tr>";
                content += "<td>Km đầu tiên</td>";
                content += "<td>" + 1 + "</td>";
                content += "<td>" + GARBBlLACK_1 + "</td>";
                content += "<td>" + tienKm_1 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>km 1 đến 19 </td>";
                content += "<td>" + (19) + "</td>";
                content += "<td>" + GARBBlLACK_2 + "</td>";
                content += "<td>" + tienKm_2 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>km 20 trở đi </td>";
                content += "<td>" + (soKm - 19) + "</td>";
                content += "<td>" + GARBBlLACK_3 + "</td>";
                content += "<td>" + tienKm_3 + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Thời gian chờ</td>";
                content += "<td>" + tgCho + "</td>";
                content += "<td>" + GARBBlLACK_WAIT + "</td>";
                content += "<td>" + TienCho + "</td>";
                content += "<tr>";

                content += "<tr>";
                content += "<td>Tổng tiền</td>";
                content += "<td>" + TongTien + "</td>";

                content += "<tr>";
            }
            break;
        default:
            alert("vui lòng chọn loại xe")
            break;
    }
}