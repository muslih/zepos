jQuery.fn.hapus_baris=function(){return tambah_stok=$("#tambah_stok"),jumlah_varian=$("#stokVal"),hapus=$("#stok_delete"),tambah_stok.click(function(){jumlah=parseInt(jumlah_varian.val())+1,$("#tabel_stok tbody").append('<tr><td><input type="text" name="ukuran_'+jumlah+'" placeholder="ukuran"></td><td><input type="text" name="stok_'+jumlah+'"placeholder="stok"></td><td><a href="#" class="btn btn-danger btn-xs" id="stok_delete"><i class="glyphicon glyphicon-remove"></i></a></td></tr>'),$("#stokVal").val(jumlah)}),this.on("click","#stok_delete",function(){$(this).parent().parent().remove(),jumlah=parseInt(jumlah_varian.val())-1,$("#stokVal").val(jumlah)}),this},$(function(){$("body").on("click",".stok_edit",function(){$(this).next().fadeToggle();{var a=this.id;$(this).closest("tr"),$("#stok_"+a)}$(".stok_"+a).slideToggle(),$(".ukuran_"+a).slideToggle()})}),$(function(){$("body").on("click",".stok_ok",function(){var a=this.id,t="?page=barang",n=$("input.ukuran_"+a).val(),e=$("input.stok_"+a).val();console.log("ukurannya adalah :"+n+", stoknya adalah :"+e),$.post(t,{post:"update",id:a,ukuran:n,stok:e}).done(function(){$(".stok_"+a).text(e),$(".ukuran_"+a).text(n),$(".stok_"+a).fadeToggle(),$(".ukuran_"+a).fadeToggle(),alert("data berhasil di update")}),$(this).hide()}),$("body").on("click",".stok_delete",function(){var a=this.id,t=$(this),n="?page=barang";console.log(this.id),$.post(n,{post:"delete",id:a}).done(function(){$(this).closest("tr").remove(),alert("Data berhasil dihapus bang!"),t.closest("tr").remove()})})}),$(function(){$("#tambah_stok_edit").click(function(){var a=(this.id,"?page=barang"),t=$("input#ukuran_tambah").data("id"),n=$("input#stok_tambah").val(),e=$("input#ukuran_tambah").val();console.log("diklik id barang :"+t+", stok :"+n+" dan ukuran :"+e),$.post(a,{post:"tambah",barang_id:t,stok:n,ukuran:e}).done(function(a){$("#tambah_stok_edit").closest("tr").before("<tr><td>"+e+"</td><td>"+n+"</td></tr>"),console.log(a),location.reload()})})}),$(function(){"?page=barang"==window.location.search&&(console.log("Linak waluh"),$.ajax({url:"api/?req=data_barang",type:"get",success:function(a){console.log(a),$("#dataBarang tbody").append(a),$("#dataBarang").dataTable()}}))}),$(function(){var a=window.location.search;$("#side-menu a").removeClass("active"),$('a[href$="'+a+'"]').addClass("active").parent().parent().parent().addClass("active"),$('a[href$="'+a+'"]').closest(".collapse").addClass("in"),$("[rel='tooltip']").tooltip(),$("#tambah_produk").hapus_baris();var t=$("tr#pembayaran");t.hide(),$("input#transaksi").click(function(){"grosir"===$(this).val()?t.show():t.hide()})}),jQuery.fn.hapus_belanja_grosir=function(){return this.on("click","i.hapus_belanja_grosir",function(){var a=$(this).closest("tr"),t=a.data("faktur"),n=a.attr("id");console.log("Hapus keranjang dengan id : "+n+" dan faktur :"+t),$.post("?page=grosir",{barang:"hapus_keranjang",id_belanja:n}).done(function(a){hasil=$(a).find("#xhr_data").text(),console.log(hasil),"true"===hasil?$.get("?page=grosir&permintaan=lihat_keranjang&no_faktur="+t,function(a){$("#penjualan_grosir").html(""),$("#penjualan_grosir").append($(a).find("#xhr_data").html())}).error(function(){alert("Error jaringan")}):alert("Barang gagal dihapus, cek koneksi!")})}),this},$(function(){$("#tambah_cart_grosir").click(function(a){var t=$("#no_faktur").val(),n=$("form#transaksi").serializeArray();n.push({name:"barang",value:"tambah_keranjang"}),n.push({name:"faktur",value:t}),n.push({status:"false"}),console.log(n),$.post("?page=grosir",n).done(function(a){hasil=$(a).find("#xhr_data").text(),"true"===hasil?(console.log($(a).find("#xhr_data").text()),alert("Data ditambahkan kedalam keranjang!"),$.get("?page=grosir&permintaan=lihat_keranjang&no_faktur="+t,function(a,t){console.log("datanya adalah : "+$(a).find("#xhr_data").html()+"# dan status :"+t),$("#penjualan").html(""),$("#penjualan").append($(a).find("#xhr_data").html()),window.location.reload()}).error(function(){alert("Error jaringan")})):alert("Gagal ditembahkan, cek koneksi!")}),a.preventDefault()})}),$(function(){$("#penjualan_grosir").hapus_belanja_grosir()}),$(function(){$("input#bayar_grosir").click(function(){jatuhtempo=$("#jatuhtempo"),"kredit"===$(this).val()?jatuhtempo.show():jatuhtempo.hide()}),$("#bayarHutang").click(function(){$("#formBayarHutang").slideDown()})}),$("#selesai_belanja_grosir").click(function(){pelanggan=$("#pelanggan").val(),pembayaran=$("input[name=bayar_grosir]:checked").val(),jatuhtempo=$("#jatuh_tempo").val(),no_faktur=$(this).data("faktur"),total=$("#total_final").text(),""===pelanggan||void 0===pembayaran||"0"===total||void 0===total?alert("Harap lengkapi data pelanggan, pembayaran, serta total penjualan!!"):$.post("?page=grosir",{no_faktur:no_faktur,total:total,pelanggan:pelanggan,pembayaran:pembayaran,jatuhtempo:jatuhtempo,barang:"selesai_pembelian"}).done(function(a){hasil=$(a).find("#xhr_data").text(),console.log(hasil),"true"===hasil?(console.log($(a).find("#xhr_data").text()),window.location.reload()):alert("Gagal ditembahkan, cek koneksi!")})}),jQuery.fn.hapus_belanja=function(){return this.on("click","i.hapus_belanja",function(){var a=$(this).closest("tr"),t=a.data("faktur"),n=a.attr("id");console.log("Hapus keranjang dengan id : "+n+" dan faktur :"+t),$.post("?page=mesin",{barang:"hapus_keranjang",id_belanja:n}).done(function(a){hasil=$(a).find("#xhr_data").text(),console.log(hasil),"true"===hasil?$.get("?page=mesin&permintaan=lihat_keranjang&no_faktur="+t,function(a){$("#penjualan").html(""),$("#penjualan").append($(a).find("#xhr_data").html()),window.location.reload()}).error(function(){alert("Error jaringan")}):alert("Barang gagal dihapus, cek koneksi!")})}),this},$.fn.hitung_diskon=function(){this.keyup(function(){subtotal=$("#total").text(),diskon_persen=$("#disc_pr_val").val(),diskon_rupiah=$("#disc_rp_val").val(),potongan=parseInt(diskon_persen/100*parseInt(subtotal)),$("#total_final").text(subtotal-potongan-diskon_rupiah)})},$.fn.hitung_kembalian=function(){this.keyup(function(){bayar=$("#bayar_val").val(),total=parseInt($("#total_final").text()),$("#kembali").text(bayar-total)})},$(function(){$("#penjualan").hapus_belanja()}),$(function(){$("#cetak_resi").click(function(a){a.preventDefault();var t=$(this);console.log(t.data("popup"));var n=t.attr("href"),e="popUp",o=t.data("popup");window.open(n+"&drp="+$("#disc_rp_val").val()+"&dpr="+$("#disc_pr_val").val()+"&byr="+$("#bayar_val").val(),e,o)})}),$(function(){$("#selesai_belanja").click(function(){no_faktur=$(this).data("faktur"),total=$("#total_final").text(),$.post("?page=mesin",{no_faktur:no_faktur,total:total,barang:"selesai_pembelian"}).done(function(a){hasil=$(a).find("#xhr_data").text(),console.log(hasil),"true"===hasil?(console.log($(a).find("#xhr_data").text()),window.location.reload()):alert("Gagal ditembahkan, cek koneksi!")})})}),$(function(){$("#disc_pr_val").hitung_diskon(),$("#disc_rp_val").hitung_diskon(),$("#bayar_val").hitung_kembalian()}),$(function(){$("#tambah_cart").click(function(a){var t=$("#no_faktur").val(),n=$("form#transaksi").serializeArray();n.push({name:"barang",value:"tambah_keranjang"}),n.push({name:"faktur",value:t}),$.post("?page=mesin",n).done(function(a){hasil=$(a).find("#xhr_data").text(),"true"===hasil?(console.log($(a).find("#xhr_data").text()),$.get("?page=mesin&permintaan=lihat_keranjang&no_faktur="+t,function(a,t){console.log("datanya adalah : "+$(a).find("#xhr_data").html()+"# dan status :"+t),$("#penjualan").html(""),$("#penjualan").append($(a).find("#xhr_data").html())}).error(function(){alert("Error jaringan")})):alert("Gagal ditembahkan, cek koneksi!")}),a.preventDefault()})}),$(function(){var a=$("#kode_barang");a.keyup(function(a){console.log($(this).val());var t=$(this).val();$.post("?page=mesin",{id:t,barang:"bool"},function(a){var n=$(a),e=n.find("#xhr_data").text();console.log(n.find("#xhr_data").text()),console.log("wal"+e),"1"===e?($.post("?page=mesin",{id:t,barang:"nama_barang"},function(){$("#nama_barang").val($.post("?page=mesin",{id:t,barang:"nama_barang"},function(a){$("#nama_barang").val($(a).find("#xhr_data").text())}))}),$.post("?page=mesin",{id:t,barang:"stok_barang"}).done(function(a){console.log($(a).find("#xhr_data").html()),$("select#ukuran").prop("disabled",!1),$("select#ukuran option").remove(),$("select#ukuran").append($(a).find("#xhr_data").html())}),console.log("ditemukan "+e)):($("#nama_barang").val("tidak ditemukan"),console.log("tidak ditemukan"+e),$("select#ukuran option").remove())}),a.preventDefault()}),a.keypress(function(a){var t=a.charCode||a.keyCode;return 13==t?!1:void 0}),""===a.val()&&$("#nama_barang").val("kosong")});