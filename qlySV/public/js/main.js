const danhSachSinhVien = new DanhSachSinhVien()

function getByID(id) {
    let element = document.getElementById(id)
    return element

}

function CapNhatDanhSachSV (listStudents) {

    let lstTableSV = getByID("tbodySinhVien");
    lstTableSV.innerHTML = "";

    let students = listStudents.DSSV[0]
    let lstTrSV = ""
    students.forEach((sv, index) => {

        index++
        lstTrSV += `<tr id="${sv._id}" class="trSinhVien">
                        <td>${index}</td>
                        <td class="MaSV">${sv.MaSv}</td>
                        <td class="HoTen">${sv.HoTen}</td>
                        <td class="Email">${sv.Email}</td>
                        <td class="SoDT">${sv.SoDt}</td>
                        <td class="d-flex">
                            <button class="btn" onclick="ChinhSuaSinhVien('${sv._id}')"><i class="fas fa-pencil-alt text-primary"></i></button>
                            <button class="btn" onclick="deleteById('${sv._id}')"><i class="fas fa-trash-restore text-danger"></i></button>
                        </td>
                    </tr>`
        lstTableSV.innerHTML = lstTrSV
    });
   
}

function loadAllData() {

    $.ajax({
        url: '/students',
        type: 'GET'
    })
    .then(data => {

        danhSachSinhVien.DSSV.splice(0)
        danhSachSinhVien.DSSV.push(data)
      
        CapNhatDanhSachSV(danhSachSinhVien) 

    })
    .catch(err => {
        console.log('loi');
    })
    
}

loadAllData()


function ThemSinhVien() {

    let masv = getByID("masv").value;
    let hoten = getByID("hoten").value;
    let email = getByID("email").value;
    let sdt = getByID("sdt").value;

    // Them sinh vien
    $.ajax({
        url: '/students',
        type:'POST',
        data: {
            MaSv: masv,
            HoTen: hoten,
            Email: email,
            SoDt: sdt
        }
    })
    .then(sinhVien => {

        danhSachSinhVien.ThemSinhVien(sinhVien)
        CapNhatDanhSachSV(danhSachSinhVien) 
        resetForm()
       

    })
    .catch(err=>{
        
    })

}

function deleteById(id){

    $.ajax({
        url: '/students/' + id,
        type: 'delete'
    })
    .then(data => {

        danhSachSinhVien.XoaSinhVien(id)
        CapNhatDanhSachSV(danhSachSinhVien)   
        resetForm()
        
    })
    .catch(err=>{

    })
}

function updateByID(id) {

    let masv = getByID("masv").value;
    let hoten = getByID("hoten").value;
    let email = getByID("email").value;
    let sdt = getByID("sdt").value;

    $.ajax({
        url: '/students/' + id,
        type: 'put',
        data: {
            MaSv: masv,
            HoTen: hoten,
            Email: email,
            SoDt: sdt
        }
    })
    .then(data => {

        let sinhvien = { _id: id, MaSv: masv, HoTen: hoten, Email: email, SoDt: sdt}
        console.log(sinhvien);

        danhSachSinhVien.SuaSinhVien(sinhvien)
        console.log(danhSachSinhVien.SuaSinhVien(sinhvien));

        CapNhatDanhSachSV(danhSachSinhVien);
        
    })
    .catch(err=>{
        
    })
}
$("#updateStudent").click(function() {
    updateByID($(this).attr("data-idSv"))
});


function resetForm() {
    return document.getElementById('studentForm').reset();
}

function ChinhSuaSinhVien(id) {
   
    let sinhvien = danhSachSinhVien.TimSVTheoMa(id);
    console.log(sinhvien);
    if (sinhvien != null) {

        getByID("masv").value = sinhvien.MaSv;
        getByID("hoten").value = sinhvien.HoTen;
        getByID("email").value = sinhvien.Email;
        getByID("sdt").value = sinhvien.SoDt;
        document.getElementById('updateStudent').setAttribute('data-idSv',id)
    }

}

