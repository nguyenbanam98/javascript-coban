
function DanhSachSinhVien() {

    this.DSSV = [];

    this.ThemSinhVien = function (svThem) {

        this.DSSV[0].push(svThem)
    } 

    this.SuaSinhVien = function (svCapNhat) {

        for (let i = 0; i < this.DSSV[0].length ; i++) {

            let sinhvien = this.DSSV[0][i];

            if(svCapNhat._id === sinhvien._id) {

                sinhvien._id  = svCapNhat._id
                sinhvien.MaSv  = svCapNhat.MaSv
                sinhvien.HoTen = svCapNhat.HoTen;
                sinhvien.Email = svCapNhat.Email;
                sinhvien.SoDt = svCapNhat.SoDt;
            }

        }
    }    
  
    this.XoaSinhVien = function (studentId) {

            for (let i = 0; i < this.DSSV[0].length ; i++) {

                let sinhvien = this.DSSV[0][i];
                
                if (studentId === sinhvien._id) {

                    this.DSSV[0].splice(i, 1);
                }
         }
        
    }

    this.TimSVTheoMa = function(studentId) {

        for (let i = 0; i < this.DSSV[0].length; i++) {

            let sv = this.DSSV[0][i];
           
            if (sv._id === studentId) {
                return sv;
            }
        }
        return null;
    }

}