// jQuery.fn.hapus_baris = function(){
// 	tambah_stok = $('#tambah_stok');
//     jumlah_varian = $('#stokVal');
//     hapus = $('#stok_delete');

//     tambah_stok.click(function() {
//         jumlah = parseInt(jumlah_varian.val())+1;
//     	$('#tabel_stok tbody').append("<tr><td><input type=\"text\" name=\"ukuran_"+jumlah+"\" placeholder=\"ukuran\"></td><td><input type=\"text\" name=\"stok_"+jumlah+"\"placeholder=\"stok\"></td><td><a href=\"#\" class=\"btn btn-danger btn-xs\" id=\"stok_delete\"><i class=\"glyphicon glyphicon-remove\"></i></a></td></tr>");
//         $('#stokVal').val(jumlah)
//     })

//     this.on('click','#stok_delete',function(){
//     	// console.log($(this))
//     	$(this).parent().parent().remove();
//         jumlah = parseInt(jumlah_varian.val())-1;
//         $('#stokVal').val(jumlah)
//     })
// 	return this;
// }

// // fungsi hapus keranjang
// jQuery.fn.hapus_belanja = function(){
//     // hapus = $('.hapus_keranjang');
//     this.on('click','i.hapus_belanja',function(){
//         var row = $(this).closest('tr')
//         var no_faktur = row.data('faktur');
//         var id_belanja = row.attr('id')
//         console.log('Hapus keranjang dengan id : '+id_belanja+' dan faktur :'+no_faktur)
//         // post data hapus ke dalam data
//         $.post("?page=mesin", {barang:"hapus_keranjang", id_belanja: id_belanja})
//             .done(function(data){
//                 hasil = $(data).find('#xhr_data').text()
//                 console.log(hasil)
//                 if(hasil === 'true'){
//                     $.get('?page=mesin&permintaan=lihat_keranjang&no_faktur='+no_faktur, function(data){
//                         $('#penjualan').html("")
//                         $('#penjualan').append($(data).find('#xhr_data').html())
//                     }).error(function(){alert('Error jaringan')})
//                 }else{
//                     alert('Barang gagal dihapus, cek koneksi!')
//                 }
//             })        
//     })
//     return this;
// }

// // fungsi hitung diskon dan 
// $.fn.hitung_diskon = function(){
//     this.keyup(function(e){
//         // deklarasi variable
//         subtotal = $('#total').text();
//         diskon_persen = $('#disc_pr_val').val();
//         diskon_rupiah = $('#disc_rp_val').val();

//         // console.log($(this).attr('id'));

//         // // kalo yang diinput diskon persen
//         // if ($(this).attr('id') == 'disc_pr_val') {
//         //     // update atribut data persen
//         //     $('#cetak_resi').data('diskonpr', diskon_persen)
//         // };
        
//         // // kalo yang diinput diskon rupiah
//         // if ($(this).attr('id') == 'disc_rp_val') {
//         //     // update atribut data persen
//         //     $('#cetak_resi').data('diskonrp', diskon_rupiah)
//         // };

//         // hitung potongan diskon persen
//         potongan = parseInt((diskon_persen /100)*parseInt(subtotal))
//         // console.log((subtotal-potongan)-diskon_rupiah)
//         // update nilai ke jumlah total
//         $('#total_final').text((subtotal-potongan)-diskon_rupiah)
//     })
// }

// $.fn.hitung_kembalian = function(){
//     this.keyup(function(){
//         // deklarasi variabel bayar
//         bayar = $('#bayar_val').val()
//         // console.log(bayar)
//         // deklarasi variable total pembayaran
//         total = parseInt($('#total_final').text());

//         // ubah text kembalian
//         $('#kembali').text(bayar - total);
//     })
// }

// $(function() {
//     $('#penjualan').hapus_belanja();
// })


// // cetak resi kasir
// $(function(){
//     $('#cetak_resi').click(function (event) {
//         event.preventDefault();

//         var $this = $(this);
//         console.log($this.data('popup'))

//         var url = $this.attr("href");
//         var windowName = "popUp";
//         var windowSize = $this.data("popup");

//         window.open(url+'&drp='+$('#disc_rp_val').val()+'&dpr='+$('#disc_pr_val').val()+'&byr='+$('#bayar_val').val(), windowName, windowSize);
//     });

//  })

// // selesai belanja
// $(function(){
//     $('#selesai_belanja').click(function(){
//         no_faktur = $(this).data('faktur');
//         total = $('#total_final').text();
//         $.post('?page=mesin',{no_faktur:no_faktur,total:total, barang:'selesai_pembelian'})
//             .done(function(data){
//                 hasil = $(data).find('#xhr_data').text()
//                 console.log(hasil)
//                 if(hasil === 'true'){
//                     console.log($(data).find('#xhr_data').text())
//                     window.location.reload()
//                 }else{
//                     alert('Gagal ditembahkan, cek koneksi!')
//                 }
//             })
//         // e.preventDefault()
//         // console.log("Selesai belanja, dengan data faktur : "++ "total belanja : "+total)
//     })
// })
    
// // #kasir
// // ##hitung diskon
// $(function(){
//     $('#disc_pr_val').hitung_diskon();
//     $('#disc_rp_val').hitung_diskon();
//     $('#bayar_val').hitung_kembalian();
// })


// // ##transaksi_penjualan
// $(function(){
//     $('#tambah_cart').click(function(e){
//         // console.log($('form#transaksi').serialize())
//         var no_faktur = $('#no_faktur').val();
//         var attr = $('form#transaksi').serializeArray();
//         attr.push({name: 'barang', value:'tambah_keranjang'});
//         attr.push({name: 'faktur', value:no_faktur})
//         // attr.push({barang: 'tambah_keranjang', faktur: });
//         // console.log($(data))
//         $.post('?page=mesin',attr)
//             .done(function(data){
//                 hasil = $(data).find('#xhr_data').text()
//                 if(hasil === 'true'){
//                     console.log($(data).find('#xhr_data').text())
//                     // alert('Data ditambahkan kedalam keranjang!')
//                     $.get('?page=mesin&permintaan=lihat_keranjang&no_faktur='+no_faktur, function(data,status){
//                         console.log('datanya adalah : '+ $(data).find('#xhr_data').html() +'# dan status :'+status)
//                         $('#penjualan').html("")
//                         $('#penjualan').append($(data).find('#xhr_data').html())
//                     }).error(function(){alert('Error jaringan')})

//                 }else{
//                     alert('Gagal ditembahkan, cek koneksi!')
//                 }
//             })
//         e.preventDefault()
//     })
// })


// // #filter-kodebarang
// $(function() {
//     var kodebarang = $('#kode_barang')
//     kodebarang.keyup(function(e){
//         console.log($(this).val())
//         var id = $(this).val()
//         $.post('?page=mesin',{id:id,barang:'bool'},function(data){
//             var respon = $(data);
//             var hasil = respon.find('#xhr_data').text()
//             console.log(respon.find('#xhr_data').text())
//             console.log("wal"+hasil)

//             // kalo ketemu barang yang dicari
//             if (hasil === "1") {
//                 // masukan nama barang di kolom nama barang kasir
//                  $.post('?page=mesin',{id:id,barang:'nama_barang'},function(data){
//                     $('#nama_barang').val($.post('?page=mesin',{id:id,barang:'nama_barang'},function(data){
//                         $('#nama_barang').val($(data).find('#xhr_data').text())
//                     }))
//                  })

//                 // tambahkan daftar stok yang ada
//                 $.post('?page=mesin',{id:id,barang:'stok_barang'})
//                     .done(function(data){
//                         console.log($(data).find('#xhr_data').html())
//                         $('select#ukuran').prop("disabled", false)
//                         $('select#ukuran option').remove()
//                         $('select#ukuran').append($(data).find('#xhr_data').html())
//                         // console.log($(data).find('#xhr_data').html())
//                     })
//                 // // $('#nama_barang').val('walih')
//                 console.log('ditemukan '+hasil)
//             }else{
//                 $('#nama_barang').val('tidak ditemukan')
//                 console.log('tidak ditemukan' + hasil )
//                 $('select#ukuran option').remove()
//             };
//         })
//         e.preventDefault();
//         // return false
//     })
//     // disable enterkodebarang
//     kodebarang.keypress(function(e){
//         var kode = e.charCode || e.keyCode;
//         if(kode == 13){return false}
//     })

//     if (kodebarang.val() === '') {
//         $('#nama_barang').val('kosong')
//     }


//     // $.get('?page=mesin',{permintaan:'lihat_stok'})
//     //     .done( function(data){
//     //         var respon = $(data)
//     //         console.log(respon.find('#xhr_data').text())
//     //     })
// })


// $(function(){
//     // panggil lokasi
//     var lokasi = window.location.search
//     // hapus class active
//     $('#side-menu a').removeClass('active')
//     // tambahkan class active pada url yg sama
//     $('a[href$="'+lokasi+'"]').addClass('active').parent().parent().parent().addClass('active')
//     // buka menunya
//     $('a[href$="'+lokasi+'"]').closest('.collapse').addClass('in')

//     $("[rel='tooltip']").tooltip();

// 	$('#tambah_produk').hapus_baris()
//     var pembayaran = $('tr#pembayaran')
//     pembayaran.hide()

//     $('input#transaksi').click(function(){
//         // console.log($(this).val())
//         if($(this).val() === 'grosir'){
//             pembayaran.show()
//         }else{
//             pembayaran.hide()
//         }
//     })
//     // tampilkan input jatuh tempo bila grosir kredit
//     $('input#pembayaranGrosir').click(function() {
//         // console.log($(this).val())
//         jatuhtempo = $('#jatuhtempo')
//         if($(this).val() === 'kredit'){
//             jatuhtempo.show()
//         }else{
//             jatuhtempo.hide()
//         }
//     })

//     // tambah input bayar hutang
//     $('#bayarHutang').click(function() {
//         // console.log('diklik')
//         $('#formBayarHutang').slideDown();
//     })
// })

// // ##DATA_BARANG
// $(function(){
//     if(window.location.search == '?page=barang'){
//         // $('#dataBarang').dataTable();
//         console.log('Linak waluh');
//         $.ajax({
//             url:'api/?req=data_barang'
//             ,type:'get'
//             ,success: function(hasil){
//                 console.log(hasil)
//                 // $('#dataBarang tbody');
//                 $('#dataBarang tbody').append(hasil);
//                 $('#dataBarang').dataTable();
//             }
//         })   
//     }
// })


// // ###LAPORAN_PENJUALAN
// $(function(){
//     if(window.location.search == '?page=penjualan'){
//         // $('#dataPenjualan').dataTable();
//         console.log('Linak waluh');
//         $.ajax({
//             url:'api/?req=penjualan'
//             ,type:'get'
//             ,success: function(hasil){
//                 $('#dataPenjualan tbody');
//                 $('#dataPenjualan tbody').append(hasil);
//                 $('#dataPenjualan').dataTable();
//             }
//         })   
//     }
// })