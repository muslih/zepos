<?php 
class Kasirgrosir extends Activerecord\Model{

  public static $table_name = 'kasirgrosir';

  static $has_many = array(
     array('kasir_grosir_detail'),
     array('kasir_grosir_bayar')
  );  

  static $belongs_to = array(
	   array('user'),
     array('pelanggan'),
     array('toko')
  );

  public function before_create(){
    $this->tgl_penjualan = Date('d-m-Y', strtotime('now'));
  } 

  static $after_create = array(
    'update_related_data_grosir'
  );
  
  public function update_related_data_grosir(){
    foreach ($this->kasir_grosir_detail as $dat) {
      $dat->update_attributes(array('status'=> '1'));

      // update stok otomatis ketika transaksi di proses
      // jumlah barang yang dibeli
      $qty = $dat->qty;

      // jumlah stok yang ada 
      $qty_stok = $dat->stok->stok;

      // sisa setelah update
      $sisa_stok = $qty_stok-$qty;

      $dat->stok->update_attributes(array('stok'=> $sisa_stok));
    }
  }

}
