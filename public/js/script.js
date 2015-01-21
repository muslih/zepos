jQuery.fn.hapus_baris = function(){
 tambah_stok = $('#tambah_stok');
    jumlah_varian = $('#stokVal');
    hapus = $('#stok_delete');

    tambah_stok.click(function() {
        jumlah = parseInt(jumlah_varian.val())+1;
     $('#tabel_stok tbody').append("<tr><td><input type=\"text\" name=\"ukuran_"+jumlah+"\" placeholder=\"ukuran\"></td><td><input type=\"text\" name=\"stok_"+jumlah+"\"placeholder=\"stok\"></td><td><a href=\"#\" class=\"btn btn-danger btn-xs\" id=\"stok_delete\"><i class=\"glyphicon glyphicon-remove\"></i></a></td></tr>");
        $('#stokVal').val(jumlah)
    })

    this.on('click','#stok_delete',function(){
     // console.log($(this))
     $(this).parent().parent().remove();
        jumlah = parseInt(jumlah_varian.val())-1;
        $('#stokVal').val(jumlah)
    })
 return this;
}

// #stok-edit
$(function(){
    $('body').on("click", ".stok_edit", function(){
        // tampilkan tombol submit
        $(this).next().fadeToggle();
        // deklarasi id
        var id = this.id
        // deklarasi variable link
        var url = '?page=barang';
        // console.log(this.id)

        var row = $(this).closest('tr')

        var target = $('#stok_'+id);

        $(".stok_"+id).slideToggle();
        // $(".stok_"+id).fadeToggle();
        $(".ukuran_"+id).slideToggle();

        // // kirim data ke stok edit
        // $.post(url, {post:"edit",id:id }, function(data) {
        //     // console.log($(this).closest('tr'));
        //     // .innerHTML($(data).find("#xhr_data"))
        //     var konten = $(data).find('#xhr_data')
        //     target.prepend(konten)
        // })

    });
});

// #stok-update
$(function(){
    $('body').on("click", ".stok_ok", function(){
        
        // deklarasi id
        var id = this.id
        // deklarasi variable link
        var url = '?page=barang';

        // deklarasi ukuran
        var ukuran = $('input.ukuran_'+id).val();
        // deklarasi stok
        var stok = $('input.stok_'+id).val();
        console.log('ukurannya adalah :'+ukuran+', stoknya adalah :'+stok);


        // kirim data
        $.post(url, {post:"update",id: id, ukuran: ukuran, stok: stok})
            .done( function(data){
            // console.log(data);

            // update nilai data
            $(".stok_"+id).text(stok);
            $(".ukuran_"+id).text(ukuran);


            $(".stok_"+id).fadeToggle();
            $(".ukuran_"+id).fadeToggle();
            alert("data berhasil di update")
        })
        $(this).hide()
        // hapus data
        // tampilkan pesan sukses
        // update label m

    });

    $('body').on("click", ".stok_delete", function(){
        
        // deklarasi id
        var id = this.id

        var ini = $(this)
        // deklarasi variable link
        var url = '?page=barang';

        console.log(this.id)

        // // kirim data
        $.post(url, {post:"delete",id: id})
            .done( function(data){
                $(this).closest('tr').remove()
                alert('Data berhasil dihapus bang!')
                // console.log(ini.closest('tr'));
                ini.closest('tr').remove()
            });

    });
})

// #stok-tambah-edit
$(function(){
    $('#tambah_stok_edit').click(function(){
        var id = this.id

        var url = '?page=barang';
        var id_barang = $('input#ukuran_tambah').data('id')
        var stok = $('input#stok_tambah').val()
        var ukuran = $('input#ukuran_tambah').val()

        console.log('diklik id barang :'+id_barang+', stok :'+ stok +' dan ukuran :'+ ukuran)
        // submit data ke dalam server
        $.post(url, {post:"tambah", barang_id:id_barang, stok:stok, ukuran:ukuran})
            .done(function(data){
                $('#tambah_stok_edit').closest('tr').before('<tr><td>'+ukuran+'</td><td>'+stok+'</td></tr>')
                console.log(data)
                location.reload()
            });
    })
})

// ##DATA_BARANG
$(function(){
    if(window.location.search == '?page=barang'){
        // $('#dataBarang').dataTable();
        console.log('Linak waluh');
        $.ajax({
            url:'api/?req=data_barang'
            ,type:'get'
            ,success: function(hasil){
                console.log(hasil)
                // $('#dataBarang tbody');
                $('#dataBarang tbody').append(hasil);
                $('#dataBarang').dataTable();
            }
        })   
    }
})

$(function(){
    // panggil lokasi
    var lokasi = window.location.search
    // hapus class active
    $('#side-menu a').removeClass('active')
    // tambahkan class active pada url yg sama
    $('a[href$="'+lokasi+'"]').addClass('active').parent().parent().parent().addClass('active')
    // buka menunya
    $('a[href$="'+lokasi+'"]').closest('.collapse').addClass('in')

    $("[rel='tooltip']").tooltip();

    $('#tambah_produk').hapus_baris()
    var pembayaran = $('tr#pembayaran')
    pembayaran.hide()

    $('input#transaksi').click(function(){
        // console.log($(this).val())
        if($(this).val() === 'grosir'){
            pembayaran.show()
        }else{
            pembayaran.hide()
        }
    })
})



// #fungsi hapus keranjang penjualan grosir
jQuery.fn.hapus_belanja_grosir = function(){
    // hapus = $('.hapus_keranjang');
    this.on('click','i.hapus_belanja_grosir',function(){
        var row = $(this).closest('tr')
        var no_faktur = row.data('faktur');
        var id_belanja = row.attr('id')
        console.log('Hapus keranjang dengan id : '+id_belanja+' dan faktur :'+no_faktur)
        // post data hapus ke dalam data
        $.post("?page=grosir", {barang:"hapus_keranjang", id_belanja: id_belanja})
            .done(function(data){
                hasil = $(data).find('#xhr_data').text()
                console.log(hasil)
                if(hasil === 'true'){
                    $.get('?page=grosir&permintaan=lihat_keranjang&no_faktur='+no_faktur, function(data){
                        $('#penjualan_grosir').html("")
                        $('#penjualan_grosir').append($(data).find('#xhr_data').html())
                        // window.location.reload()
                    }).error(function(){alert('Error jaringan')})
                }else{
                    alert('Barang gagal dihapus, cek koneksi!')
                }
            })        
    })
    return this;
}

// ##transaksi_penjualan
$(function(){
    $('#tambah_cart_grosir').click(function(e){
        // console.log($('form#transaksi').serialize())
        var no_faktur = $('#no_faktur').val();
        var attr = $('form#transaksi').serializeArray();
        attr.push({name: 'barang', value:'tambah_keranjang'});
        attr.push({name: 'faktur', value:no_faktur})
        attr.push({status:'false'})

        // attr.push({barang: 'tambah_keranjang', faktur: });
        console.log(attr)
        if ($('#ukuran').find(":selected").data('stok') === 0){
            alert("Stok Habis, silahkan pilih barang yang lain!");
        }else{   
            $.post('?page=grosir',attr)
                .done(function(data){
                    hasil = $(data).find('#xhr_data').text()
                    // console.log(hasil)
                    if(hasil === 'true'){
                        console.log($(data).find('#xhr_data').text())
                        // alert('Data ditambahkan kedalam keranjang!')
                        $.get('?page=grosir&permintaan=lihat_keranjang&no_faktur='+no_faktur, function(data,status){
                            console.log('datanya adalah : '+ $(data).find('#xhr_data').html() +'# dan status :'+status)
                            $('#penjualan').html("")
                            $('#penjualan').append($(data).find('#xhr_data').html())
                            window.location.reload()
                        }).error(function(){alert('Error jaringan')})

                    }else{
                        alert('Gagal ditembahkan, cek koneksi!')
                    }
                })
        }
        e.preventDefault()
    })
})


// #panggil fungsi hapus penjualan grosir
$(function() {
    $('#penjualan_grosir').hapus_belanja_grosir();
})

$(function(){
    // tampilkan input jatuh tempo bila grosir kredit
    $('input#bayar_grosir').click(function() {
        // console.log($(this).val())
        jatuhtempo = $('#jatuhtempo')
        if($(this).val() === 'kredit'){
            jatuhtempo.show()
        }else{
            jatuhtempo.hide()
        }
    })

    // tambah input bayar hutang
    $('#bayarHutang').click(function() {
        // console.log('diklik')
        $('#formBayarHutang').slideToggle();
    })
})
// #SELESAI belanja
$('#selesai_belanja_grosir').click(function(){
    // deklarasi variable
    pelanggan = $('#pelanggan').val();
    pembayaran = $('input[name=bayar_grosir]:checked').val();
    jatuhtempo = $('#jatuh_tempo').val()
    no_faktur = $(this).data('faktur');
    bayar = $('#bayar_val').val();
    total = $('#total_final').text();

    diskon_pr = $('#disc_pr_val').val();
    diskon_rp = $('#disc_rp_val').val();
    // validasi sebentar
   if (pelanggan === "" || pembayaran === undefined || total === "0" || total === undefined) {
        alert("Harap lengkapi data pelanggan, pembayaran, serta total penjualan!!")
    }else{
        $.post('?page=grosir',{no_faktur: no_faktur,diskon_rp:diskon_rp, bayar_val: bayar,diskon_pr:diskon_pr,total: total,pelanggan: pelanggan,pembayaran: pembayaran, jatuhtempo: jatuhtempo, barang:'selesai_pembelian'})
            .done(function(data){
                hasil = $(data).find('#xhr_data').text()
                console.log(hasil)
                if(hasil === 'true'){
                    console.log($(data).find('#xhr_data').text())
                    window.location.reload()
                }else{
                    alert('Gagal ditembahkan, cek koneksi!')
                }
            })
    };
});

$('#bayar_kredit').click(function(e){
    console.log('Bayar kredit di klik');
    data = $('form#formBayarHutang').serializeArray()
    data.push({name: 'barang', value:'bayar_kredit'})
    console.log(data)
    $.post('?page=grosir',data)
        .done(function(data){
            hasil = $(data).find('#xhr_data').text();
            console.log(hasil)
            if(hasil === 'true'){
                console.log($(data).find('#xhr_data').text());
                window.location.reload();
            }else{
                alert('Gagal ditambahkan, cek koneksi!');
            }
        })
    e.preventDefault();
})


$('#cetakLaporan').click(function(){
    window.print();
    return false;
})
// fungsi hapus keranjang
jQuery.fn.hapus_belanja = function(){
    // hapus = $('.hapus_keranjang');
    this.on('click','i.hapus_belanja',function(){
        var row = $(this).closest('tr')
        var no_faktur = row.data('faktur');
        var id_belanja = row.attr('id')
        console.log('Hapus keranjang dengan id : '+id_belanja+' dan faktur :'+no_faktur)
        // post data hapus ke dalam data
        $.post("?page=mesin", {barang:"hapus_keranjang", id_belanja: id_belanja})
            .done(function(data){
                hasil = $(data).find('#xhr_data').text()
                console.log(hasil)
                if(hasil === 'true'){
                    $.get('?page=mesin&permintaan=lihat_keranjang&no_faktur='+no_faktur, function(data){
                        $('#penjualan').html("")
                        $('#penjualan').append($(data).find('#xhr_data').html())
                        window.location.reload()
                    }).error(function(){alert('Error jaringan')})
                }else{
                    alert('Barang gagal dihapus, cek koneksi!')
                }
            })        
    })
    return this;
}
// fungsi hitung diskon dan 
$.fn.hitung_diskon = function(){
    this.keyup(function(e){
        // deklarasi variable
        subtotal = $('#total').text();
        diskon_persen = $('#disc_pr_val').val();
        diskon_rupiah = $('#disc_rp_val').val();

        // hitung potongan diskon persen
        potongan = parseInt((diskon_persen /100)*parseInt(subtotal))
        // console.log((subtotal-potongan)-diskon_rupiah)
        // update nilai ke jumlah total
        $('#total_final').text((subtotal-potongan)-diskon_rupiah)
    })
}

$.fn.hitung_kembalian = function(){
    this.keyup(function(){
        // deklarasi variabel bayar
        bayar = $('#bayar_val').val()
        // console.log(bayar)

        // deklarasi variable total pembayaran
        total = parseInt($('#total_final').text());

        // ubah text kembalian
        $('#kembali').text(bayar - total);
    })
}

$(function() {
    $('#penjualan').hapus_belanja();
})

// cetak resi kasir
$(function(){
    $('#cetak_resi').click(function (event) {
        event.preventDefault();

        var $this = $(this);
        console.log($this.data('popup'))

        var url = $this.attr("href");
        var windowName = "popUp";
        var windowSize = $this.data("popup");

        window.open(url+'&drp='+$('#disc_rp_val').val()+'&dpr='+$('#disc_pr_val').val()+'&byr='+$('#bayar_val').val(), windowName, windowSize);
    });

 })

// selesai belanja
$(function(){
    $('#selesai_belanja').click(function(){
        no_faktur = $(this).data('faktur');
        total = $('#total_final').text();
        diskon_pr = $('#disc_pr_val').val();
        diskon_rp = $('#disc_rp_val').val();

        // console.log("diskon persen :"+diskon_pr+" >diskon rupia")
        $.post('?page=mesin',{no_faktur:no_faktur,total:total,diskon_rp:diskon_rp, diskon_pr:diskon_pr, barang:'selesai_pembelian'})
            .done(function(data){
                hasil = $(data).find('#xhr_data').text()
                console.log(hasil)
                if(hasil === 'true'){
                    console.log($(data).find('#xhr_data').text())
                    window.location.reload()
                }else{
                    alert('Gagal ditembahkan, cek koneksi!')
                }
            })
        // console.log("Selesai belanja, dengan data faktur : "++ "total belanja : "+total)
    })
})
    
// #kasir
// ##hitung diskon
$(function(){
    $('#disc_pr_val').hitung_diskon();
    $('#disc_rp_val').hitung_diskon();
    $('#bayar_val').hitung_kembalian();
})


// ##transaksi_penjualan
$(function(){
    $('#tambah_cart').click(function(e){
        // console.log($('form#transaksi').serialize())
        var no_faktur = $('#no_faktur').val();
        var attr = $('form#transaksi').serializeArray();
        attr.push({name: 'barang', value:'tambah_keranjang'});
        attr.push({name: 'faktur', value:no_faktur})
        // attr.push({barang: 'tambah_keranjang', faktur: });
        // console.log($(data))
        if ($('#ukuran').find(":selected").data('stok') === 0){
            alert("Stok barang habis, silahkan pilih barang yang lain!");
        }else{
            $.post('?page=mesin',attr)
                .done(function(data){
                    hasil = $(data).find('#xhr_data').text()
                    if(hasil === 'true'){
                        console.log($(data).find('#xhr_data').text())
                        // alert('Data ditambahkan kedalam keranjang!')
                        $.get('?page=mesin&permintaan=lihat_keranjang&no_faktur='+no_faktur, function(data,status){
                            console.log('datanya adalah : '+ $(data).find('#xhr_data').html() +'# dan status :'+status)
                            $('#penjualan').html("")
                            $('#penjualan').append($(data).find('#xhr_data').html())
                        }).error(function(){alert('Error jaringan')})

                    }else{
                        alert('Gagal ditembahkan, cek koneksi!')
                    }
                })
        }
        e.preventDefault()
    })
})

// #filter-kodebarang
$(function() {
    var kodebarang = $('#kode_barang')
    kodebarang.keyup(function(e){
        console.log($(this).val())
        var id = $(this).val()
        $.post('?page=mesin',{id:id,barang:'bool'},function(data){
            var respon = $(data);
            var hasil = respon.find('#xhr_data').text()
            console.log(respon.find('#xhr_data').text())
            console.log("wal"+hasil)

            // kalo ketemu barang yang dicari
            if (hasil === "1") {
                // masukan nama barang di kolom nama barang kasir
                 $.post('?page=mesin',{id:id,barang:'nama_barang'},function(data){
                    $('#nama_barang').val($.post('?page=mesin',{id:id,barang:'nama_barang'},function(data){
                        $('#nama_barang').val($(data).find('#xhr_data').text())
                    }))
                 })

                // tambahkan daftar stok yang ada
                $.post('?page=mesin',{id:id,barang:'stok_barang'})
                    .done(function(data){
                        console.log($(data).find('#xhr_data').html())
                        $('select#ukuran').prop("disabled", false)
                        $('select#ukuran option').remove()
                        $('select#ukuran').append($(data).find('#xhr_data').html())
                        // console.log($(data).find('#xhr_data').html())
                    })
                // // $('#nama_barang').val('walih')
                console.log('ditemukan '+hasil)
            }else{
                $('#nama_barang').val('tidak ditemukan')
                console.log('tidak ditemukan' + hasil )
                $('select#ukuran option').remove()
            };
        })
        e.preventDefault();
        // return false
    })
    // disable enterkodebarang
    kodebarang.keypress(function(e){
        var kode = e.charCode || e.keyCode;
        if(kode == 13){return false}
    })

    if (kodebarang.val() === '') {
        $('#nama_barang').val('kosong')
    }
})